import os
import shutil
import re
import json
import argparse
from urllib.parse import unquote
import textwrap
import sys
import zipfile
import tempfile

def clean_name(name):
    """
    Cleans a file or directory name according to Nextra's conventions.
    - Removes the 32-character Notion hash and the preceding space.
    - Converts to lowercase.
    - Replaces spaces with hyphens.
    - Removes leading/trailing hyphens that might result from cleaning.
    """
    # First, handle the hash removal
    name_without_hash = re.sub(r'\s[a-f0-9]{32}', '', name)
    # Then, lowercase and hyphenate
    cleaned = name_without_hash.lower().replace(' ', '-')
    # Return stripped of any surrounding hyphens, which is important for separators
    return cleaned.strip('-')

def clean_markdown_links(content, current_path=""):
    """
    Finds all internal Markdown links. Converts regular links to absolute Nextra paths
    and separator links into H3 headings.
    """
    link_pattern = re.compile(r'(\[.*?\])\((.*?\.md)\)')

    def replace_link(match):
        link_text_with_brackets = match.group(1)
        link_text = link_text_with_brackets.strip('[]')
        original_url = match.group(2)
        
        # Check if the link text itself indicates a separator
        is_separator = link_text.strip().startswith('---') and link_text.strip().endswith('---')
        
        if is_separator:
            # Convert the separator link to an H3 heading
            heading_title = link_text.replace('---', '').strip().title()
            return f"\n### {heading_title}\n"
        else:
            # Process as a regular link, creating an absolute path
            decoded_url = unquote(original_url)
            base_name = os.path.splitext(os.path.basename(decoded_url))[0]
            cleaned_base = clean_name(base_name)
            
            if current_path:
                new_url = f"/{current_path}/{cleaned_base}"
            else:
                new_url = f"/{cleaned_base}"
                
            return f"{link_text_with_brackets}({new_url})"

    return link_pattern.sub(replace_link, content)

def generate_sidebar_config(source_dir):
    """
    Walks the source directory to build the dynamic part of the meta config.
    Crucially, it determines the order of items by reading the links
    in the parent section's markdown file.
    """
    sidebar_config = {}
    if not os.path.isdir(source_dir):
        return sidebar_config

    # Regex to find all markdown links to .md files
    link_order_pattern = re.compile(r'\[.*?\]\((.*?\.md)\)')

    for item_name in os.listdir(source_dir):
        # We are looking for the top-level directories that represent sidebar sections
        source_path = os.path.join(source_dir, item_name)
        if not os.path.isdir(source_path):
            continue

        section_key = clean_name(item_name)
        section_title = section_key.replace('-', ' ').title()
        
        sidebar_config[section_key] = {
            'title': section_title,
            'items': {}
        }
        
        # Now, find the corresponding .md file for this directory to determine the order
        parent_md_filename = f"{os.path.splitext(item_name)[0]}.md"
        parent_md_path = os.path.join(source_dir, parent_md_filename)

        if not os.path.isfile(parent_md_path):
            print(f"Warning: Could not find parent markdown file '{parent_md_path}' to determine order. Items in '{section_key}' may be unordered.", file=sys.stderr)
            continue
        
        print(f"Reading order from: {parent_md_filename}")
        with open(parent_md_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all linked .md files in the order they appear
        linked_files = link_order_pattern.findall(content)

        for linked_file in linked_files:
            decoded_link = unquote(linked_file)
            # Get just the filename from the potentially nested path in the link
            filename = os.path.basename(decoded_link)
            # Get the name with hash, before cleaning, but without extension
            base_name = os.path.splitext(filename)[0] 
            
            # First, remove the hash to properly check for separators
            name_without_hash = re.sub(r'\s[a-f0-9]{32}', '', base_name)
            is_separator = name_without_hash.strip().startswith('---') and name_without_hash.strip().endswith('---')
            
            cleaned_key = clean_name(base_name)

            if is_separator:
                separator_title = cleaned_key.replace('-', ' ').title()
                separator_key = f"{cleaned_key}_separator"
                sidebar_config[section_key]['items'][separator_key] = {
                    'type': 'separator',
                    'title': separator_title
                }
            else:
                page_title = cleaned_key.replace('-', ' ').title()
                sidebar_config[section_key]['items'][cleaned_key] = page_title

    return sidebar_config


def write_meta_global_js(output_dir, sidebar_config):
    """
    Writes the complete _meta.global.js file, combining a static
    template with the dynamically generated sidebar configuration.
    """
    
    static_header = textwrap.dedent("""\
        export default {

          // Default settings for all pages
          '*': {
            type: 'page',
            theme: {
              timestamp: false
            }
          },
          'index': {
            title: 'Home',
            display: 'hidden'
          },
          //'about': {
           // title: 'About Me',
           // display: 'hidden'
          //},
          // --- Top Level Navigation / Special Pages  ---
          'TopicsMenu': {
            title: 'Guides',
            type: 'menu',
            items: {
              foundational_knowledge: {
                title: 'Foundational Knowledge',
                href: '/foundational-knowledge'
              },
              data_ingestion: {
                title: 'Data Ingestion',
                href: '/data-ingestion'
              },
              data_modeling_storage: {
                title: 'Data Modeling & Storage',
                href: '/data-modeling-storage'
              },
              data_transformation: {
                title: 'Data Transformation',
                href: '/data-transformation'
              },
              data_orchestration: {
                title: 'Data Orchestration',
                href: '/data-orchestration'
              },
              data_quality_governance: {
                title: 'Data Quality & Governance',
                href: '/data-quality-governance'
              },
              data_operations_dataops: {
                title: 'Data Operations',
                href: '/data-operations-dataops'
              },
              data_visualization_reporting: {
                title: 'Data Visualization & Reporting',
                href: '/data-visualization-reporting'
              }
            }
          },
          'AboutLink': {
            title: 'About',
            href: '/about'
          },


          // --- Domain Specific Sidebar Configurations ---
    """)

    dynamic_config_parts = []
    for section_key, section_data in sidebar_config.items():
        title = section_data['title']
        formatted_items = "{\n"
        # Use the items dictionary which is now ordered correctly
        items_list = list(section_data['items'].items())
        for i, (key, value) in enumerate(items_list):
            comma = "," if i < len(items_list) - 1 else ""
            if isinstance(value, dict): # Separator
                 formatted_items += f"      '{key}': {{ type: '{value['type']}', title: '{value['title']}' }}{comma}\n"
            else: # Page
                 formatted_items += f"      '{key}': '{value}'{comma}\n"
        formatted_items += "    }"

        part = f"  '{section_key}': {{\n    title: '{title}',\n    items: {formatted_items}\n  }}"
        dynamic_config_parts.append(part)

    dynamic_config_str = ",\n\n".join(dynamic_config_parts)
    final_content = static_header + dynamic_config_str + "\n};"
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"Created meta directory: {output_dir}")
        
    meta_path = os.path.join(output_dir, '_meta.global.js')
    with open(meta_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
    print(f"\nCreated global meta file: {meta_path}")


def process_directory(source_dir, dest_dir, current_path=""):
    """
    Recursively processes a Notion export directory, restructuring and
    cleaning files and folders for Nextra.
    """
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)

    items = os.listdir(source_dir)
    processed_md_files = set()

    # First pass for directories
    for item_name in items:
        source_path = os.path.join(source_dir, item_name)
        if not os.path.isdir(source_path):
            continue

        cleaned_dir_name = clean_name(item_name)
        new_dir_path = os.path.join(dest_dir, cleaned_dir_name)
        new_url_path = f"{current_path}/{cleaned_dir_name}" if current_path else cleaned_dir_name
        corresponding_md_file = f"{os.path.splitext(item_name)[0]}.md"

        if corresponding_md_file in items:
            md_source_path = os.path.join(source_dir, corresponding_md_file)
            dest_index_file = os.path.join(new_dir_path, 'index.md')
            
            if not os.path.exists(new_dir_path):
                os.makedirs(new_dir_path)

            with open(md_source_path, 'r', encoding='utf-8') as f:
                content = f.read()
            cleaned_content = clean_markdown_links(content, current_path=new_url_path)
            with open(dest_index_file, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            
            print(f"Processed '{md_source_path}' -> '{dest_index_file}'")
            processed_md_files.add(corresponding_md_file)
            # Recurse into the sub-directory
            process_directory(source_path, new_dir_path, current_path=new_url_path)
    
    # Second pass for standalone files
    for item_name in items:
        if not item_name.endswith('.md') or item_name in processed_md_files:
            continue
        
        # Check if the file is a separator and skip creating an .md file for it
        base_name_for_check = os.path.splitext(item_name)[0]
        name_without_hash = re.sub(r'\s[a-f0-9]{32}', '', base_name_for_check)
        if name_without_hash.strip().startswith('---') and name_without_hash.strip().endswith('---'):
            print(f"Skipping file creation for separator: {item_name}")
            continue

        source_path = os.path.join(source_dir, item_name)
        cleaned_file_name = clean_name(base_name_for_check)
        new_file_path = os.path.join(dest_dir, f"{cleaned_file_name}.md")
        
        with open(source_path, 'r', encoding='utf-8') as f:
            content = f.read()
        cleaned_content = clean_markdown_links(content, current_path=current_path)
        with open(new_file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"Processed '{source_path}' -> '{new_file_path}'")

def main():
    """Main function to run the script."""
    parser = argparse.ArgumentParser(
        description="Convert a Notion export ZIP file to a Nextra site structure.",
        formatter_class=argparse.RawTextHelpFormatter
    )
    parser.add_argument(
        'source_zip', help="Path to the Notion export .zip file."
    )
    parser.add_argument(
        'dest_dir', help="Path to the destination directory for Nextra pages (e.g., './pages')."
    )
    parser.add_argument(
        '--meta_dir', help="Optional: Path to a different directory for the _meta.global.js file.\nIf not provided, it will be placed in the root of `dest_dir`."
    )
    parser.add_argument(
        '--clean', action='store_true', help="If set, removes the destination pages directory before starting."
    )

    args = parser.parse_args()
    source_zip_path, pages_dest = args.source_zip, args.dest_dir
    meta_dest = args.meta_dir if args.meta_dir else pages_dest

    if not os.path.isfile(source_zip_path) or not source_zip_path.endswith('.zip'):
        print(f"Error: Source must be a .zip file. Path provided: '{source_zip_path}'")
        sys.exit(1)

    if args.clean and os.path.exists(pages_dest):
        print(f"Cleaning destination pages directory: {pages_dest}")
        shutil.rmtree(pages_dest)
    
    if not os.path.exists(pages_dest):
        os.makedirs(pages_dest)

    with tempfile.TemporaryDirectory() as temp_dir:
        print(f"Extracting '{source_zip_path}' to temporary directory...")
        with zipfile.ZipFile(source_zip_path, 'r') as zip_ref:
            zip_ref.extractall(temp_dir)
        print("Extraction complete.")

        search_path = temp_dir
        extracted_items = os.listdir(temp_dir)
        if len(extracted_items) == 1 and os.path.isdir(os.path.join(temp_dir, extracted_items[0])):
            search_path = os.path.join(temp_dir, extracted_items[0])
            print(f"Found single root directory in zip: '{extracted_items[0]}'. Searching within it.")

        try:
            content_dir_name = next(f for f in os.listdir(search_path) if f.startswith('TheDataEngineering') and os.path.isdir(os.path.join(search_path, f)))
            content_source = os.path.join(search_path, content_dir_name)
            print(f"Found Notion content directory: '{content_source}'")
        except StopIteration:
            print(f"Error: Could not find a Notion content DIRECTORY starting with 'TheDataEngineering' inside '{search_path}'.")
            sys.exit(1)

        print("\nStarting Notion to Nextra conversion...")
        
        print("\nStep 1: Analyzing source directory for sidebar configuration and order...")
        sidebar_config = generate_sidebar_config(content_source)

        print("\nStep 2: Restructuring files and folders for Nextra...")
        process_directory(content_source, pages_dest)

        print("\nStep 3: Generating _meta.global.js file...")
        write_meta_global_js(meta_dest, sidebar_config)

    print("\nConversion complete!")
    print(f"Your Nextra pages are ready in: '{pages_dest}'")
    print(f"The meta file has been placed in: '{meta_dest}'")
    print("Temporary files have been cleaned up.")

if __name__ == '__main__':
    main()

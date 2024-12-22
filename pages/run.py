import anthropic
client = anthropic.Anthropic()

topics = {
    "index": "How to start a data engineering projects, key considerations.",
    "lake": "Building Data Lake in AWS",
    "warehouse": "Building Data Warehouse in AWS",
    "batch": "Creating Batch Pipeline in AWS",
    "stream": "Creating Stream Pipeline in AWS"
}

for t in topics:
    print(t,topics[t])

    msg='''
    I am creating a website on data engineering. I will give you a topic, and I want a comprehensive article on the topic. Do not deviate from the topic. Whenever you give a bullet always include a few lines explanation of the point. Give the output in markdown format.

    Currently I am working on projects for Data Engineering. Explain at high level how to develop this project end to end. The project title is ''' + topics[t]

    message = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=4096,
        temperature=0.6,
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": msg
                    }
                ]
            }
        ]
    )

    filename = '/Users/aayush/thedataengineering/pages/projects/' + t + '.mdx'
    print(msg)
    print(filename)
    print(message.content[0].text)
    print('######################################################')
    print('\n\n\n\n\n\n\n')
    with open(filename,'w') as f:
        f.write(message.content[0].text)
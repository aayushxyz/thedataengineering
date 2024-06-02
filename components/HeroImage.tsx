import Image from 'next/image';
import { Callout, Steps, Card, Cards } from 'nextra-theme-docs'

export default function HeroImage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src="hero.svg" alt="Hero" width="400" height="400" />
      </div>
    </>
  );
}

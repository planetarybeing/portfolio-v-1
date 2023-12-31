import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { Particle } from "tsparticles-engine";
import type { ISourceOptions } from "tsparticles-engine";
import Image from "next/image";

const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root" className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}

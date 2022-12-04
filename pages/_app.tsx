import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import MainLayout from "../src/layout/MainLayout";

const corsaGroteskFont = localFont({
  src: [
    {
      path: "../public/fonts/corsa-grotesk/corsa-grotesk-thin.otf",
      weight: "100",
    },
    {
      path: "../public/fonts/corsa-grotesk/corsa-grotesk-regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/corsa-grotesk/corsa-grotesk-medium.otf",
      weight: "500",
    },
    {
      weight: "700",
      path: "../public/fonts/corsa-grotesk/corsa-grotesk-bold.otf",
    },
  ],
  variable: "--font-corsa-grotesk",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${corsaGroteskFont.variable}`}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </main>
  );
}

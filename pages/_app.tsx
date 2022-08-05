import "../styles/globals.css";
import DefaultLayout from "../components/DefaultLayout";
import type { AppProps } from "next/app";
import "@progress/kendo-theme-default/dist/all.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;

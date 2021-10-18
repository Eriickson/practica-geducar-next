import type { AppProps } from "next/app";

function MiAplicacion({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MiAplicacion;

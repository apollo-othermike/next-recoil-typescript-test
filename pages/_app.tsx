import { Suspense } from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={"Loading..."}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Suspense>
  );
}

export default MyApp;

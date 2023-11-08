import type { AppProps } from "next/app"
import "../styles/global.scss"
import useSmoothScroll from "@/hooks/useSmoothScroll"

export default function App({ Component, pageProps }: AppProps) {
  useSmoothScroll()
  return <Component {...pageProps} />
}

import '../styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 pt-6 px-6">
        <div className="w-full">
          <div className="flex flex-wrap justify-center border-b border-black pb-3">
            <span className="flex-1 uppercase text-sm">Test</span>
            <span className="flex-1 text-center mx-auto uppercase text-sm">Jason O'Rear</span>
            <span className="flex-1 text-right ml-auto uppercase text-sm">Test</span>
          </div>
        </div>
      </div>
      <div data-scroll-container id="scroll-container" className="flex">
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
    </>
  )
}
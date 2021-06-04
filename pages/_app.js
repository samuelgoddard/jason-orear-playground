import '../styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 pt-6 px-6 transition ease-in-out duration-500 ${ router.pathname != '/about'  ? 'text-black ' : 'text-white delay-500' }`}>
        <div className="w-full">
          <div className="flex flex-wrap justify-center">
            <Link href="/about"><a className="flex-1 uppercase text-sm md:text-lg 2xl:text-xl font-display">About</a></Link>

            <Link href="/"><a className="flex-1 text-center mx-auto uppercase text-sm md:text-lg 2xl:text-xl font-display">Jason O'Rear</a></Link>

            <span className="flex-1 text-right ml-auto uppercase text-sm md:text-lg 2xl:text-xl font-display">Projects</span>
          </div>
        </div>
      </div>

      <div className={`fixed bottom-0 left-0 w-full z-50 pb-6 px-6 transition ease-in-out duration-500 ${ router.pathname != '/about'  ? 'opacity-100' : 'opacity-0' }`}>
        <div className="w-full">
          <div className="flex flex-wrap justify-end">
            <span className="flex-1 uppercase text-sm md:text-lg 2xl:text-xl font-display">Focus Mode</span>
            <span className="flex-1 text-center mx-auto">
              <svg className="w-3 md:w-4 2xl:w-5 mx-auto" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" d="M7.5 15V0M0 7.5h15"/></svg>
            </span>
            <span className="flex-1 text-right ml-auto uppercase text-sm md:text-lg 2xl:text-xl font-display">Email Jason</span>
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
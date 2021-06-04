import Layout from '../components/layout'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'

export default function Home() {
  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13, direction: 'horizontal' }}>
      <Layout>
        <motion.section
          initial="initial"
          animate="enter"
          exit="exit"
          className="scrollsection"
          data-scroll-section
        >
          <motion.div variants={fade} className="h-full min-h-screen">
            <div className="w-full flex flex-wrap items-center justify-center min-h-screen p-6">
              <div className="flex flex-wrap w-full items-center">
                <div className="w-1/2">
                  <img src="https://placedog.net/640/420" alt="test" className="w-full" />
                </div>

                <div className="w-1/2" data-scroll data-scroll-speed="0.8">
                  <div className="w-9/12 mx-auto">
                    <h1 className="font-bold text-xl uppercase">Testing</h1>
                    <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="initial"
          animate="enter"
          exit="exit"
          className="scrollsection"
          data-scroll-section
        >
          <motion.div variants={fade} className="h-full min-h-screen">
            <div className="w-full flex flex-wrap items-center justify-center min-h-screen p-6">
              <div className="flex flex-wrap w-full -mx-4">
                <div className="w-1/2 px-4 mb-[-12%]">
                  <img src="https://placedog.net/640/420" alt="test" className="w-full" />
                </div>
                <div className="w-1/2 px-4 mt-[-12%]">
                  <img src="https://placedog.net/640/420" alt="test" className="w-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="initial"
          animate="enter"
          exit="exit"
          className="scrollsection"
          data-scroll-section
        >
          <motion.div variants={fade} className="h-full min-h-screen">
            <div className="w-full flex flex-wrap items-center justify-center min-h-screen p-6">
              <div className="flex flex-wrap w-8/12 -mx-4">
                <div className="w-1/2 px-4 mb-[-12%]">
                  <img src="https://placedog.net/420/640" alt="test" className="w-full" />
                </div>
                <div className="w-1/2 px-4 mt-[-12%]">
                  <img src="https://placedog.net/420/640" alt="test" className="w-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="initial"
          animate="enter"
          exit="exit"
          className="scrollsection"
          data-scroll-section
        >
          <motion.div variants={fade} className="h-full min-h-screen">
            <div className="w-full flex flex-wrap items-center justify-center min-h-screen p-6">
              <div className="flex flex-wrap w-8/12 -mx-4">
                <div className="w-full">
                  <img src="https://placedog.net/1600/650" alt="test" className="w-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </Layout>
    </SmoothScrollProvider>
  )
}

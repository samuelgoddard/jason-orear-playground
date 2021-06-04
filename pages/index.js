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
            <div className="w-full flex flex-wrap items-end justify-center min-h-screen p-6 py-[75px]">
              <div className="flex flex-wrap w-full items-center">
                <div className="w-7/12">
                  <div className="mt-auto self-end w-full">
                    <div className="mb-[3vh]">
                      <span className="text-sm block uppercase tracking-widest">(Client)</span>
                      <span className="text-sm block uppercase tracking-widest mb-3">Gensler Architects</span>
                      <span className="text-sm block uppercase tracking-widest">(Location)</span>
                      <span className="text-sm block uppercase tracking-widest mb-3">San Francisco</span>
                      <span className="text-sm block uppercase tracking-widest">(GPS)</span>
                      <span className="text-sm block uppercase tracking-widest">37°46'09.3"N 122°23'20.5"W</span>
                    </div>
                    
                    <div>
                      <h1 className="text-xl uppercase font-display text-[7.4vw] mb-[0.5vw] block leading-none ml-[5.275vw]" data-scroll data-scroll-speed="3">Shack 15</h1>
                      <div className="h-screen max-h-[50vh] w-full">
                        <img src="/images/shack-01.jpg" alt="Shack 15" className="w-full h-full object-cover object-center" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-5/12">
                  <div className="w-9/12 mx-auto text-center">
                    <span className="text-[2.5vw] leading-none block mt-[15vw]">*JO’R — PRJ_05</span>
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
            <div className="w-full flex flex-wrap items-center justify-center min-h-screen p-6 py-[75px]">
              <div className="flex flex-wrap w-full items-center justify-center">
                <div className="w-8/12">
                  <div className="h-screen max-h-[55vh]">
                    <img src="images/shack-02.jpg" alt="Shack 15" className="w-full h-full object-cover object-center" />
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
            <div className="w-full flex flex-wrap items-center justify-center min-h-screen p-6 py-[75px]">
              <div className="flex flex-wrap w-full items-center justify-center">
                <div className="w-3/12">
                  <div className="h-screen max-h-[60vh]">
                    <img src="images/shack-03.jpg" alt="Shack 15" className="w-full h-full object-cover object-center" />
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
            <div className="w-full flex flex-wrap items-start min-h-screen p-6 py-[75px]">
              <div className="w-3/12 self-start mb-auto">
                <div className="h-screen max-h-[54vh]">
                  <img src="/images/shack-04.jpg" alt="Shack 15" className="w-full h-full object-cover object-center" />
                </div>
              </div>

              <div className="w-7/12 self-end ml-auto">
                <div className="h-screen max-h-[60vh]">
                  <img src="/images/shack-05.jpg" alt="Shack 15" className="w-full h-full object-cover object-center" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </Layout>
    </SmoothScrollProvider>
  )
}

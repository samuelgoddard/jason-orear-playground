import Layout from '../components/layout'
import { fade, reveal, revealDelay1, revealDelay2 } from "../helpers/transitions"
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
                      <div className="overflow-hidden">
                        <motion.span variants={revealDelay1} className="text-sm block uppercase tracking-widest">(Client)</motion.span>
                      </div>
                      <div className="overflow-hidden mb-3">
                        <motion.span variants={revealDelay1} className="text-sm block uppercase tracking-widest">Gensler Architects</motion.span>
                      </div>
                      <div className="overflow-hidden">
                        <motion.span variants={revealDelay1} className="text-sm block uppercase tracking-widest">(Location)</motion.span>
                      </div>
                      <div className="overflow-hidden mb-3">
                        <motion.span variants={revealDelay1} className="text-sm block uppercase tracking-widest">San Francisco</motion.span>
                      </div>
                      <div className="overflow-hidden">
                        <motion.span variants={revealDelay1} className="text-sm block uppercase tracking-widest">(GPS)</motion.span>
                      </div>
                      <div className="overflow-hidden">
                        <motion.span variants={revealDelay1} className="text-sm block uppercase tracking-widest">37°46'09.3"N 122°23'20.5"W</motion.span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="overflow-hidden" data-scroll data-scroll-speed="3">
                        <motion.h1 variants={reveal} className="text-xl uppercase font-display text-[7.4vw] mb-[0.5vw] block leading-none ml-[5.275vw]">Shack 15</motion.h1>
                      </div>
                      <div className="h-screen max-h-[50vh] w-full">
                        <img src="/images/shack-01.jpg" alt="Shack 15" className="w-full h-full object-cover object-center will-change" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-5/12">
                  <div className="w-9/12 mx-auto text-center">
                    <div className="overflow-hidden">
                      <motion.span variants={revealDelay2} className="text-[2.5vw] leading-none block mt-[15vw]">*JO’R — PRJ_05</motion.span>
                    </div>
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
                    <img src="images/shack-02.jpg" alt="Shack 15" className="w-full h-full object-cover object-center will-change" />
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
                    <img src="images/shack-03.jpg" alt="Shack 15" className="w-full h-full object-cover object-center will-change" />
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
                  <img src="/images/shack-04.jpg" alt="Shack 15" className="w-full h-full object-cover object-center will-change" />
                </div>
              </div>

              <div className="w-7/12 self-end ml-auto">
                <div className="h-screen max-h-[60vh]">
                  <img src="/images/shack-05.jpg" alt="Shack 15" className="w-full h-full object-cover object-center will-change" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </Layout>
    </SmoothScrollProvider>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Ahmed</span></h1 >
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm a Frontend Developer </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-[-18px]
      bottom-25 w-full flex justify-center
      items-center mt-[20px]'>
        <a href='#about'>
          <div className=' xs:w-7 w-[35px] xs:h-[50px] h-[60px] 
          rounded-3xl border-4
           border-secondary flex 
           justify-center items-start p-1'>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{duration:1.5,repeat:Infinity ,repeatType:'loop'}}
              className='xs:w-2  w-3 xs:h-2 h-2
               rounded-full bg-secondary mb-1'
            />
           </div>
        </a>

      </div>

    </section>
  )
}

export default Hero
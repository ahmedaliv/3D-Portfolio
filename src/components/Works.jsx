import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name,description, tags, image, source_code_link, live,live_link }) => {
  return (
    <motion.div
    variants={fadeIn("up", "spring", 0.5 * index, 0, 75)}
    >
      <Tilt 
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover  rounded-2xl' />
        </div>
        <div
        className='absolute inset-0 flex justify-end m-3 card-img_hover gap-1'>
          <div
            onClick={() => {
              window.open(source_code_link, '_blank')
            }}
            className='black-gradient  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <img
              src={github}
              alt='github'
              title='github-link'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
          <div
            onClick={() => {
              window.open(live_link, '_blank')
            }}
            className=' bg-gradient-to-r from-rose-100 to-teal-100 opacity-80 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
             <img
              src={live}
              alt='live-demo'
              title='live-demo'
              className='w-2/3 h-2/3 object-contain'
            />
            
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-[24px] font-bold text-white'>{name}</h3>
          <p className='mt-3 text-secondary text-[14px] leading-[30px]'>
            {description}
          </p>
        </div>
        <div className='mt-4 flex flex-warp gap-2'>
          {tags.map((tag) => (
            <p key={tag.name}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
       <motion.div variants={textVariant} >
        <p className={styles.sectionSubText}>My Work </p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>


      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn("", "", 0.1, 0.1)}
        className='mt-3 text-secondary text-[16px] max-w-3xl leading-[30px]'
        >
          Following Projects showcases my skills and experience through examples of my work.
          Each project is briefly described with links to code repositories and live demos.
        </motion.p>
        </div>

        <div
        className='flex flex-wrap gap-10 justify-center mt-20'
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.name} index={index} {...project} />
          ))}

        </div>
    </>
  )
}

export default SectionWrapper(Works, 'works')

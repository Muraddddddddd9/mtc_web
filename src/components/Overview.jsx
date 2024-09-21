import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const Overview = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        style={{ wordBreak: 'break-all' }}
      >
        $METRO is a community token on the TON blockchain for
        those who respect public transportation. 
        $METRO dreams of becoming just as public. <br /> <br />
        CA: EQD1NLnnGPZheEXWH8OejeaCE1YUCRGfn4kpVLcYAGxljM5N
      </motion.p>
    </>
  )
}

export default SectionWrapper(Overview, "overview")
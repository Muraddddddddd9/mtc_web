import React from 'react'
import { motion } from 'framer-motion'

import { LogoDeDust, LogoGecko } from '../assets'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const DeDustAndGecko = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Buy it right now</p>
                <h2 className={styles.sectionHeadText}>DeDust and Gecko.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto mb-5"
                style={{ wordBreak: 'break-all' }}
            >
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <a
                        href="https://dedust.io/swap/TON/EQD1NLnnGPZheEXWH8OejeaCE1YUCRGfn4kpVLcYAGxljM5N"
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors z-20 flex items-center justify-center"
                    >
                        <img style={{ height: '50px', width: '50px', marginRight: '10px' }} src={LogoDeDust} alt="dedust" />
                        GO DeDust
                    </a>
                    <a
                        href="https://www.geckoterminal.com/ton/pools/EQD1NLnnGPZheEXWH8OejeaCE1YUCRGfn4kpVLcYAGxljM5N"
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors z-20 flex items-center justify-center"
                    >
                        <img style={{ height: '50px', width: '50px', marginRight: '10px' }} src={LogoGecko} alt="gecko" />
                        GO Gecko
                    </a>
                </div>
            </motion.p>
        </>
    )
}

export default SectionWrapper(DeDustAndGecko, "dedust_gecko")

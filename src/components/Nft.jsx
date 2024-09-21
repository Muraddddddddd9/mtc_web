import React from 'react'
import { motion } from 'framer-motion'

import { soonNFT } from '../assets'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const Nft = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Just a picture or not?</p>
                <h2 className={styles.sectionHeadText}>NFT.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto mb-5"
                style={{ wordBreak: 'break-all' }}
            >
                <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
                    <video
                        src={soonNFT}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto relative z-10 object-cover"
                    />
                </div>
                <a
                    href="https://getgems.io/collection/EQA6loVnIw_pBPuABtTsaU6PgwfiYbCgkgZhT12_QAcOISAF"
                    className="top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors z-20"
                >
                    GO BUY
                </a>
            </motion.p>
        </>
    )
}

export default SectionWrapper(Nft, "nft")



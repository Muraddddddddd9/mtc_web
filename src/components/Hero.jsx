import { motion } from 'framer-motion';

import { styles } from '../styles';
import { CoinCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={
        `${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
        mx-auto flex flex-row items-start gap-5`}>


        <div>
          <h1 className={`${styles.heroHeadText}`}>
            $METRO
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-50 w-21`}>
            $METRO is a community <br className='sm:block hidden' />
            token on the TON blockchain
          </p>
        </div>
      </div>

      <CoinCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#overview">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
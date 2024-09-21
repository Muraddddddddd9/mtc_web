import { motion } from 'framer-motion';
import { styles } from '../styles';
import { CoinCanvas } from './canvas';
import { LogoMetro } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`
        ${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
        mx-auto flex flex-col items-start gap-5
      `}>
        {/* Текстовая часть */}
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            $METRO
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-50`}>
            $METRO is a community <br className='sm:block hidden' />
            token on the TON blockchain
          </p>
        </div>

        {/* Изображение */}
        <div className="flex justify-center items-center w-full mb-10"> {/* Уменьшили отступ снизу */}
          <img
            src={LogoMetro}
            alt="Logo"
            className="w-[500px] h-[500px] object-contain"
          />
        </div>
      </div>

    </section>
  )
}

export default Hero;

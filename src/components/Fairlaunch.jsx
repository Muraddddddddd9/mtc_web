import React, { useState, useEffect, useRef } from 'react';
import { m, motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Fairlaunch = () => {
    const [endTime, setEndTime] = useState(false);
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSecond, setTimerSecond] = useState('00');

    const interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('October 1 2024 15:00:00').getTime();
        // const countdownDate = new Date('September 21 2024 11:29:00').getTime();

        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                setEndTime(true);
                clearInterval(interval.current);
            } else {
                setTimerDays(days < 10 ? `0${days}` : days);
                setTimerHours(hours < 10 ? `0${hours}` : hours);
                setTimerMinutes(minutes < 10 ? `0${minutes}` : minutes);
                setTimerSecond(seconds < 10 ? `0${seconds}` : seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    }, []); // Пустой массив зависимостей

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>The end is coming soon?</p>
                <h2 className={styles.sectionHeadText}>Fairlaunch.</h2>
            </motion.div>

            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center"
            >
                {!endTime ? (
                    <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 mb-5">
                        <div className="p-4 rounded-lg border border-gray-400">
                            <span className="text-3xl font-bold">{timerDays}</span>
                            <p>Days</p>
                        </div>
                        <div className="p-4 rounded-lg border border-gray-400">
                            <span className="text-3xl font-bold">{timerHours}</span>
                            <p>Hours</p>
                        </div>
                        <div className="p-4 rounded-lg border border-gray-400">
                            <span className="text-3xl font-bold">{timerMinutes}</span>
                            <p>Minutes</p>
                        </div>
                        <div className="p-4 rounded-lg border border-gray-400">
                            <span className="text-3xl font-bold">{timerSecond}</span>
                            <p>Seconds</p>
                        </div>
                    </div>
                ) : (
                    <div className="mt-4 text-xl font-bold text-600 mb-5">END FAIRLAUNCH</div>
                )}
                <a
                    href="https://tonraffles.app/jetton/fairlaunch/METRO"
                    className="top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors z-20"
                >
                    LETS GO
                </a>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Fairlaunch, 'fairlaunch');

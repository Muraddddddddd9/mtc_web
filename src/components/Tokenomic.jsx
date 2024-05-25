import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Chart from "chart.js/auto";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";

const Tokenomic = () => {
  const canvasRef = useRef(null);
  const [isSize, setIsSize] = useState(500);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  let chart;

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const updateChart = () => {
      const data = [
        { bank: 'FAIRLAUNCH 45%', proc: 45 },
        { bank: 'DEX LISTING 33%', proc: 33 },
        { bank: 'AIRDROP 12%', proc: 12 },
        { bank: 'MARKETING 10%', proc: 10 },
      ];

      if (chart) {
        chart.destroy();
      }

      chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: data.map(item => item.bank),
          datasets: [{
            data: data.map(item => item.proc),
            borderColor: 'white',
            backgroundColor: ['#00BFFF', '#DC143C', '#FFA500', '#32CD32'],
            borderWidth: 1
          }]
        },
        options: {
          plugins: {
            legend: {
              position: 'top',
              labels: {
                font: {
                  size: 14,
                },
                color: 'white',
              }
            }
          }
        }
      });
    };

    updateChart();

    // Cleanup function
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  useEffect(() => {
    switch (windowSize.width) {
      case 900: setIsSize(200); break;
      case 400: setIsSize(100); break;
    }
  }, [])

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My plan</p>
        <h2 className={styles.sectionHeadText}>Roadmap.</h2>
      </motion.div>
      <motion.canvas variants={slideIn("left", "tween", 0.1, 0.5)} ref={canvasRef} width={isSize} height={isSize} style={{ display: "block", margin: "auto", marginTop: '40px', textAlign: "center" }}></motion.canvas>
    </>
  );
};

export default SectionWrapper(Tokenomic, "tokenomic");





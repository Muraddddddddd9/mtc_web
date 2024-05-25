import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Chart from "chart.js/auto";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";

const Tokenomic = () => {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
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
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My plan</p>
        <h2 className={styles.sectionHeadText}>Roadmap.</h2>
      </motion.div>

      <motion.div
        style = {{width: `${isMobile ? 200 : 500}`, height: `${isMobile ? 200 : 500}`}}
        variants={slideIn("left", "tween", 0.1, 0.5)} 
      >
        <canvas 
          ref={canvasRef} 
          style={{ display: "block", margin: "auto", marginTop: '40px', textAlign: "center", width:'70%', height: '70%'}}
        />
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tokenomic, "tokenomic");

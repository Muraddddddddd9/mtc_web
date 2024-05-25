import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { users } from "../constants/index";

const TableData = ({ name, balance }) => {
  return (
    <>
      <td className="p-4 border bg-[#1d1836]">{name}</td>
      <td className="p-4 border bg-[#1d1836]">{balance}</td>
    </>
  );
};

const Tops = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Users</p>
        <h2 className={styles.sectionHeadText}>Tops.</h2>
      </motion.div>

      <motion.div
        variants={slideIn("left", "tween", 0.1, 0.5)}
        className="flex justify-center text-center"
      >
        <table className="border-collapse mt-[40px] w-full rounded-lg overflow-hidden border">
          <thead className="bg-green-600 text-white font-bold ">
            <tr>
              <th className="p-4 border">Name</th>
              <th className="p-4 border">Balance</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <TableData {...user} />
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tops, "tops");

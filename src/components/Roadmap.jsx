import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../styles"
import { roadmaps } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const RoadmapCard = ({ roadmap }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={roadmap.date}
      iconStyle={{ background: roadmap.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={roadmap.icon}
            alt={roadmap.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{roadmap.title}</h3>
      </div>
    </VerticalTimelineElement>
  )
}

const Roadmap = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work roadmap.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {roadmaps.map((roadmap, index) => (
            <RoadmapCard key={index} roadmap={roadmap} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Roadmap, 'roadmap')

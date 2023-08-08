import React from 'react'
import {MdSchool} from 'react-icons/md'
import {HiOfficeBuilding} from 'react-icons/hi'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/education.css'

const education = () => {
  return (
    <>
        <div className='education' id="Education">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
               Experiance & Education
            </h2>
            <hr />
            <div className='outerbox'>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#138781' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="March-2023 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#f29f67' }}
                icon={<HiOfficeBuilding/>}
            >
                <h3 className="vertical-timeline-element-title">Backend Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">FunctionUp, Benglaru</h4>
                <p>
                Node.js . DSA . JavaScript . React . MongoDB . Redis  
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#138781' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2023 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#f29f67' }}
                icon={<MdSchool/>}
            >
                <h3 className="vertical-timeline-element-title">Master of Science</h3>
                <h4 className="vertical-timeline-element-subtitle">S.P.P.U, Pune</h4>
                <p>
                    Physics . Mathematics
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: '#138781' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2019 - 2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#f29f67' }}
                icon={<MdSchool/>}
            >
                <h3 className="vertical-timeline-element-title">Batchelor of Science</h3>
                <h4 className="vertical-timeline-element-subtitle">S.P.P.U, Pune</h4>
                <p>
                Mathematics . Statistic . Chemistry . Physics . IT
                </p>
            </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
        </div>
    </>
  )
}

export default education
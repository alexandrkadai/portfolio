import { Fragment } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExpirienceCard = ({ expierence }) => {
  return (
    <>
      <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ border: '7px solid #232631' }}
        date={expierence.date}
        iconStyle={{background: expierence.iconBg}}
        icon={<div>
                <img src={expierence.icon} alt={expierence.company} className=" object-contain"/>
            </div>}
        >
        <div>
        <h3 className="text-white text-[24px] text-bold">{expierence.title}</h3>
        <p className='text-secondary font-semibold text-[26px]'>{expierence.company_name}</p>
        </div>
        <ul className='mt-5 list-disk ml-5 space-y-2'>
        {expierence.points.map((point,index) => (
            <li key={`expierence.point-${index}`} className='text-white-100 text-[14px] pl-1 traking-wider'>
            {point}
            </li>
        ))}
        </ul>
        </VerticalTimelineElement >
    </>
  );
};

export default ExpirienceCard;

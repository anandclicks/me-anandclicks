
import React from 'react'

const skillList = [
  {
    icon: <i className="fa-brands fa-html5 fs-1"></i>,
    name: "HTML 5",
  },
  {
    icon: <i className="fa-brands fa-css3-alt fs-1"></i>,
    name: "CSS 3",
  },
  {
    icon: <i className="fa-brands fa-bootstrap fs-1"></i>,
    name: "Bootstrap 5",
  },
  {
    icon: <i className="ri-tailwind-css-fill fs-1"></i>,
    name: "Tailwind",
  },
  {
    icon: <i className="fa-brands fa-square-js fs-1"></i>,
    name: "Javascript",
  },
  {
    icon: <i className="fa-brands fa-react fs-1"></i>,
    name: "React js",
  },
  {
    icon: <i className="fa-brands fa-node fs-1"></i>,
    name: "Node js",
  },
  {
    icon: <i className="ri-node-tree fs-1"></i>,
    name: "Express js",
  },
  {
    icon: <i className="fa-solid fa-database fs-1"></i>,
    name: "Mongo db",
  }
];




const SkillsList = () => {
  return (
    <ul className='flex flex-wrap gap-3 list-none justify-center'>
      {skillList.map((skill, index) => (
        <li key={index} className="flex gap-1 gap-lg-2 items-center flex-wrap text-center">
          {skill.icon}
          {skill.name}
        </li>
      ))}
    </ul>
  );
};

export default SkillsList
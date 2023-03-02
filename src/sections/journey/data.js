import { GiGraduateCap } from "react-icons/gi";
import { HiLibrary } from "react-icons/hi";
import { VscOrganization } from "react-icons/vsc";
import { GiTeacher } from "react-icons/gi";

const data = [
  { 
    id: 1, icon: <GiGraduateCap/>, title: "State Polytechnic of Jember", desc: "I'm a Frontend Web Developer with an Assosiate degree in Computer Engineering at State Polytechnic of Jember from 2019 until 2022." 
  },
  { 
    id: 2, icon: <HiLibrary/>, title: "Central Goverment of Jember District", desc: "I was got opportunity an Internship Program at Central Goverment of Jember District for 4 month." 
  },
  {
    id: 3,
    icon: <VscOrganization />,
    title: "Students Association of Computer Engineering",
    desc: "I'm was at Student Assosiation  of Computer Engineering for 2 years, meeting new people and making new contacts is fun.",
  },
  { 
    id: 4, icon: <GiTeacher />, title: "Ibnul Qayyim Islamic School Makassar", desc: "Currently I'm working at Ibnul Qayyim Islamic School Makassar as Programming Teacher, since October 2022 until now." 
  },
];

export default data;

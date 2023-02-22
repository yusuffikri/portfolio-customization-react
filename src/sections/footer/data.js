import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaSteam } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#journey", title: "Journey" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  { id: 1, link: "https://instagram.com/yusufikri_", icon: <AiOutlineInstagram /> },
  { id: 2, link: "https://twitter.com/yusufikri_", icon: <AiOutlineTwitter /> },
  { id: 3, link: "https://steamcommunity.com/id/greys7", icon: <FaSteam /> },
  { id: 4, link: "https://www.linkedin.com/in/yusuf-fikri-mustanir-231250218/", icon: <BsLinkedin /> },
  { id: 5, link: "https://github.com/yusuffikri", icon: <AiFillGithub /> },
];

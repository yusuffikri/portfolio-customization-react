import HeaderImage from "../../assets/header.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import data from "./data";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 }, []);
  });
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Potrait" />
        </div>
        <h3 data-aos="fade-up">Yusuf Fikri Mustanir</h3>
        <p data-aos="fade-up">
          Learning about programming is always been my passion. I'm new at programming but I'm learning everyday, and I'm always motivated to do more!
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

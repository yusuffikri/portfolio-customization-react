import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import Card from "../../components/Card";
import data from "../about/data";
import { HiDownload } from "react-icons/hi";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about about__potrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Hi, my name is Yusuf Fikri Mustanir from small city at Jember, Indonesia. I'am a Frontend Web Developer with a Assosiate degree in Computer Engineering. My top priority is to get your business online the right way, giving you
            industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started! Check out my resume below!
          </p>
          <a href={CV} className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

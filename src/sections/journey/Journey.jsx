import "./journey.css";
import data from "./data";
import Card from "../../components/Card";

const Journey = () => {
  return (
    <section id="journey">
      <h2>My Journey</h2>
      <p>Here is My Journey below!</p>
      <div className="container journey__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="journey light">
            <div className="journey__icon">{item.icon}</div>
            <div className="journey_details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Journey;

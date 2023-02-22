import "./floating-nav.css";
import Scrollspy from "react-scrollspy";
import Nav from "./Nav";
import data from "./data";

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy offset={-500} className="scrollspy" items={["header", "about", "journey", "contact"]} currentClassName="active">
        {data.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;

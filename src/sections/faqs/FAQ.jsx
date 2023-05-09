import Card from "../../components/Card";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const FAQ = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Card className="faq" onClick={() => setShowAnswer(prev => !prev)}>
      <div>
        <h5 className="faq__question">{faq.question}</h5>
        <button className="faq__icon">{showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </div>
      {showAnswer && <p className="faq__answer"><span dangerouslySetInnerHTML={{__html: faq.answer}}></span></p>}
    </Card>
  );
};

export default FAQ;

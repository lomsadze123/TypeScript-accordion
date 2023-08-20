import { useState } from "react";
import { styled } from "styled-components";
import AccordionList from "./AccordionList";

const Accordion = () => {
  const [hide, setHide] = useState(-1);

  const toggleItem = (index: number): void => {
    setHide(hide === index ? -1 : index);
  };

  return (
    <Main>
      {AccordionList.map((item, index) => (
        <div key={index}>
          <p onClick={() => toggleItem(index)}>{item.title}</p>
          {hide === index && <p>{item.content}</p>}
        </div>
      ))}
    </Main>
  );
};

export default Accordion;

const Main = styled.main`
  p {
    font-size: 1.8rem;
    cursor: pointer;
    color: red;
  }

  p:nth-child(2) {
    margin: 1rem 0;
    color: black;
    max-width: 64rem;
    cursor: text;
  }
`
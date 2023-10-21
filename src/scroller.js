import { useState } from "react";
import {
  NumberContainer,
  Scroller,
  ScrollerContainer,
  TitleContainer,
  Number
} from "./styled";

const ScrollerComponent = ({ min, max, value, setValue, title }) => {
  const hoursArray = [];
  for (let hour = min; hour <= max; hour++) {
    if (hour === min) hoursArray.push(" ");
    hoursArray.push(hour);
    if (hour === max) hoursArray.push(" ");
  }

  const [startTouchY, setStartTouchY] = useState(0);

  return (
    <ScrollerContainer>
      <TitleContainer>{title}</TitleContainer>
      <Scroller
        onWheel={(e) =>
          e.deltaY > min
            ? value < max && setValue((prevState) => prevState + 2)
            : value > min && setValue((prevState) => prevState - 2)
        }
        onTouchStart={(touchStartEvent) => {
          setStartTouchY(touchStartEvent.changedTouches[0].clientY);
        }}
        onTouchMove={(touchMoveEvent) => {
          const touchMoveValue = touchMoveEvent.changedTouches[0].clientY;
          const dTouch = touchMoveValue - startTouchY;
          return dTouch < 0
            ? value < max && setValue((prevState) => prevState + 10)
            : dTouch > 12 &&
                value > min &&
                setValue((prevState) => prevState - 10);
        }}
      >
        <NumberContainer margin={value}>
          {hoursArray.length > 1 &&
            hoursArray.map((hour, index) => (
              <Number key={index} selected={index === value + 1}>
                {hour < 10 && hour !== " " ? `0${hour}` : hour}
              </Number>
            ))}
        </NumberContainer>
      </Scroller>
    </ScrollerContainer>
  );
};

export default ScrollerComponent;

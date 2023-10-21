import { useState } from "react";
import ScrollerComponent from "./scroller";
import { ColonSpan, MainContainer } from "./styled";
import "./styles.css";

export default function App() {
  const [selectedHour, setSelectedHour] = useState(1);
  const [selectedMinute, setSelectedMinute] = useState(1);
  const [selectedSecond, setSelectedSecond] = useState(1);

  return (
    <MainContainer>
      <ScrollerComponent
        min={0}
        max={99}
        value={selectedHour}
        setValue={setSelectedHour}
        title="Hour"
      />
      <ColonSpan>:</ColonSpan>
      <ScrollerComponent
        min={0}
        max={59}
        value={selectedMinute}
        setValue={setSelectedMinute}
        title="Minute"
      />
      <ColonSpan>:</ColonSpan>
      <ScrollerComponent
        min={0}
        max={59}
        value={selectedSecond}
        setValue={setSelectedSecond}
        title="Second"
      />
    </MainContainer>
  );
}

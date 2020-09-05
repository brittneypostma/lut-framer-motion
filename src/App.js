import React, { useState } from "react";
import { motion } from 'framer-motion'
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [value, setValue] = useState(0)
  const [isToggled, setToggle] = useState(true)

  // By default all transforms are 3d.
  // You should only animate transform and opacity.
  // Translate shortcuts: x, y, z
  // Translate: translateX, translateY, translateZ
  // Scale: screenLeft, scaleX, scaleY
  // Rotate: rotate, rotateX, rotateY, rotateZ
  // Skew: skew, skewX, skewY
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <motion.h2 animate={{ opacity: isToggled, x: value + 'px' }}>Super Cool</motion.h2>
        <input type="range" min="-100" max="100" value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={() => setToggle(prevValue => prevValue ? 0 : 1)}>Toggle</button>
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} alt="purple" />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} alt="blue" />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} alt="black" />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} alt="green" />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;

import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";

import Modal from './Modal'
import Accordion from './Accordion'
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [value, setValue] = useState(0)
  const [isToggled, setToggle] = useState(false)

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
      animate={{ opacity: [0, 1, 0, 1] }}
      transition={{ duration: 5, times: [0, 0.2, 0.3, 1] }}
    >
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        { /* Mounting and unmounting control */}
        {/* <AnimatePresence>
          {isToggled && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: isToggled, x: value + 'px' }}
              exit={{ opacity: 0 }}
            >
              Super Cool
            </motion.h2>
          )}
        </AnimatePresence> */}
        <h2>Super Cool</h2>
        <button onClick={() => setToggle(true)}>
          Toggle
        </button>
        <input type="range" min="-100" max="100" value={value} onChange={e => setValue(e.target.value)} />
        <Accordion />
        <Modal isToggled={isToggled} setToggle={setToggle}>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <p style={{ fontSize: "36px" }}> I'm baby brooklyn tbh sartorial selvage pok pok poutine keytar hot chicken. Taxidermy humblebrag vaporware neutra viral air plant messenger bag. Thundercats kogi cronut, offal bitters keffiyeh brooklyn pickled skateboard next level ethical stumptown squid hot chicken. Master cleanse mixtape coloring book, cray ramps sriracha celiac butcher man braid kombucha. Woke hot chicken pour-over synth pitchfork scenester flexitarian 3 wolf moon lyft 90's XOXO sriracha tumblr. Distillery palo santo bushwick stumptown, sriracha unicorn locavore authentic flannel hexagon prism typewriter whatever chartreuse meh.</p>
          </Card>
        </Modal>

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
    </motion.div >
  );
}

export default App;

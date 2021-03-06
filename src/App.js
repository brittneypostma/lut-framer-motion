import React, { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";

import Modal from './Modal'
import Accordion from './Accordion'
import Nav from './Nav'
import Menu from "./Menu";
import Squares from './Squares'
import Slideshow from './Slideshow'
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [value, setValue] = useState(0)
  const [isToggled, setToggle] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isCardActive, setIsCardActive] = useState(true)
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

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
    // initial={{ opacity: 0 }}
    // animate={{ opacity: [0, 1, 0, 1] }}
    // transition={{ duration: 5, times: [0, 0.2, 0.3, 1] }}
    >
      <Header>
        <Menu onClick={() => setIsNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <h1>Header</h1>
      </Header>
      <Container>
        <Slideshow />
        <Squares />
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
        <div>
          <h2>Super Cool</h2>
          <button onClick={() => setToggle(true)}>
            Toggle
          </button>
        </div>
        <input type="range" min="-100" max="100" value={value} onChange={e => setValue(e.target.value)} />

        <Accordion />
        <Modal isToggled={isToggled} setToggle={setToggle}>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <p style={{ fontSize: "36px" }}> I'm baby brooklyn tbh sartorial selvage pok pok poutine keytar hot chicken. Taxidermy humblebrag vaporware neutra viral air plant messenger bag. Thundercats kogi cronut, offal bitters keffiyeh brooklyn pickled skateboard next level ethical stumptown squid hot chicken. Master cleanse mixtape coloring book, cray ramps sriracha celiac butcher man braid kombucha. Woke hot chicken pour-over synth pitchfork scenester flexitarian 3 wolf moon lyft 90's XOXO sriracha tumblr. Distillery palo santo bushwick stumptown, sriracha unicorn locavore authentic flannel hexagon prism typewriter whatever chartreuse meh.</p>
          </Card>
        </Modal>

        <CardGrid>
          <Card
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              right: 100,
              bottom: 100
            }}
            // whileHover={{ scale: [1.01, 0.9, 1.01] }}
            // whileTap={{ scale: 0.9 }}
            style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} alt="purple" />
          </Card>
          <AnimatePresence>
            {isCardActive && (
              <motion.div exit={{ height: 0, overflow: "hidden", opacity: 0 }}
                transition={{
                  opacity: {
                    duration: 0
                  }
                }}
              >
                <Card
                  onDragEnd={(e, info) => {
                    if (Math.abs(info.point.x) > 200) {
                      setIsCardActive(false)
                    }
                  }}
                  drag="x"
                  dragConstraints={{
                    right: 0,
                    left: 0
                  }}
                  style={{ opacity, x, background: "var(--blue)" }}>
                  <h3>Some card</h3>
                  <img src={blue} alt="blue" />
                </Card>
              </motion.div>
            )}
            <Card style={{ background: "var(--black)" }}>
              <h3>Some card</h3>
              <img src={black} alt="black" />
            </Card>
            <Card style={{ background: "var(--green)" }}>
              <h3>Some card</h3>
              <img src={green} alt="green" />
            </Card>
          </AnimatePresence>
        </CardGrid>
      </Container>
    </motion.div >
  );
}

export default App;

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Accordion = ({ title, body }) => {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <article>
      <AnimatePresence>
        <h2 role="button" onClick={() => setIsToggled(prevState => !prevState)}>The Heading</h2>
        {isToggled && (
          <motion.div
            style={{ overflow: "hidden" }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p>I'm baby brooklyn tbh sartorial selvage pok pok poutine keytar hot chicken. Taxidermy humblebrag vaporware neutra viral air plant messenger bag. Thundercats kogi cronut, offal bitters keffiyeh brooklyn pickled skateboard next level ethical stumptown squid hot chicken. Master cleanse mixtape coloring book, cray ramps sriracha celiac butcher man braid kombucha. Woke hot chicken pour-over synth pitchfork scenester flexitarian 3 wolf moon lyft 90's XOXO sriracha tumblr. Distillery palo santo bushwick stumptown, sriracha unicorn locavore authentic flannel hexagon prism typewriter whatever chartreuse meh.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export default Accordion

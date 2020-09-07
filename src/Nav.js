import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const variants = {
  open: { x: 0 },
  closed: { x: '-100%' }
}

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2
    }
  },
  closed: { y: -20, opacity: 0 },
}

const links = [
  "one", "two", "three", "four"
]

const Nav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <MenuNav
      variants={variants}
      initial="closed"
      animate={isNavOpen ? 'open' : 'closed'}
      transition={{ damping: 300 }}
    >
      <button onClick={() => setIsNavOpen(false)}>Close</button>
      <ul>
        {links.map(link => (
          <motion.li variants={liVariants} key={link}>
            <a href="#">{link}</a>
          </motion.li>
        ))}
      </ul>
    </MenuNav >
  )
}

export default Nav


const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--black);
  padding: 40px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 0 0 1rem;
    padding: 0;
    font-size: 24px;
    a {
      text-decoration: none;
      color: white;
      border-bottom: 2px transparent solid;
      transition: 0.3s ease border;
      &:hover {
        border-bottom: 2px var(--blue) solid;
      }
    }
  }
`
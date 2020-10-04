import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const variants = {
  open: { x: 0 },
  closed: {
    x: '-100%',
    transition: {
      delay: 0.1
    }
  }
}

const buttonVariants = {
  open: {
    rotate: 180,
    x: 0,
    transition: {
      delay: 0.2
    }
  },
  closed: {
    rotate: -180,
    x: -20
  }
}

const ulVariants = {
  open: {
    // scales base size
    // scale: 1.05,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      // staggerDirection: 1, // 1 forwards, -1 backwards
      // when: "afterChildren" // afterChildren, beforeChildren
    }
  },
  closed: {
    // scale to start from
    // scale: 1
  },
}

const liVariants = {
  open: {
    y: 0,
    opacity: 1
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
      <Button
        role="button"
        variants={buttonVariants}
        onClick={() => setIsNavOpen(false)}>
        {'\u2715'}
      </Button>
      <motion.ul variants={ulVariants}>
        {links.map(link => (
          <motion.li variants={liVariants} key={link}>
            <a href="#">{link}</a>
          </motion.li>
        ))}
      </motion.ul>
    </MenuNav >
  )
}

export default Nav


const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 20vw;
  height: 100vh;
  background: var(--black);
  padding: 40px;
  ul {
    list-style: none;
    padding: 0;
    margin: 20px 0 0;
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

const Button = styled(motion.div)`
  outline: none;
  cursor: pointer;
  background: transparent;
  border: none;
  color: white;
  font-size: 36px;
  position: absolute;
  left: 10px;
  top: 10px;
  &:focus {
    box-shadow: 1px 0 0 0 white, 
                -1px 0 0 0 white,
                0 1px 0 0 white,
                0 -1px 0 0 white
                ;
  }
`
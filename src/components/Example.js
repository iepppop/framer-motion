import styled from "styled-components";
import { useMousePosition } from "../context/useMousePosition";
import { motion } from 'framer-motion';
import { useState } from "react";

const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };
  
  const letterAni = {
    initial: { y: 400 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

const AnimatedLetters = ({ title, disabled }) => (
    <motion.span
      className='row-title'
      variants={disabled ? null : banner}
      initial='initial'
      animate='animate'>
      {[...title].map((letter) => (
        <motion.span
          className='row-letter'
          variants={disabled ? null : letterAni}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
  

const BannerRowCenter = ({ title, playMarquee }) => {
    return (
      <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
        <motion.div
          initial={{ y: 310 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
          className='marquee__inner'>
          <AnimatedLetters title={title} disabled />
          <AnimatedLetters title={title} />
          <AnimatedLetters title={title} disabled />
          <AnimatedLetters title={title} disabled />
        </motion.div>
      </div>
    );
  };

const Example = () => {
    const [playMarquee, setPlayMarquee] = useState(false);
    const { textEnter, textLeave } = useMousePosition();
    return (
        <Contain>
            <motion.h1
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
            >I will be the </motion.h1>
            <motion.h1
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
            >king of </motion.h1>
            <p>
            <motion.h1
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
            >pirates.</motion.h1>
            </p>
        </Contain>
    )
}
export default Example;

const Contain = styled.div`
    height:100vh;
    max-width:1000px;
    margin:0 auto;
    padding:10px 0 0 0;
    color:black;

    h1{
        font-size:150px;
        font-weight:600;
        display:inline-block;
    }
`
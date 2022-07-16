import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import ScrollForMore from "../components/ScrollForMore";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
};

const lastName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
        },
    },
};

const letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition },
    },
};

const Model = ({ imageDetails }) => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    const [canScroll, setCanScroll] = useState(false);

    useEffect(() => {
        if (canScroll === false) {
            document.querySelector("body").classList.add("no-scroll");
        } else {
            document.querySelector("body").classList.remove("no-scroll");
        }
    }, [canScroll]);

    return (
        <Single
            onAnimationComplete={() => setCanScroll(true)}
            className='single'
            initial='initial'
            animate='animate'
            exit='exit'
        ><Container>
                <div className='row center top-row'>
                    <div className="top">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 1.2, ...transition },
                            }}
                            className='details'>
                            <div className='location'>
                                <span>28.538336</span>
                                <span>-81.379234</span>
                            </div>
                            <div className='mua'>MUA: @mylifeascrystall</div>
                        </motion.div>
                        <Models>
                            <motion.span className='first' variants={firstName}>
                                <motion.span variants={letter}>m</motion.span>
                                <motion.span variants={letter}>o</motion.span>
                                <motion.span variants={letter}>n</motion.span>
                                <motion.span variants={letter}>k</motion.span>
                                <motion.span variants={letter}>e</motion.span>
                                <motion.span variants={letter}>y</motion.span>
                                <motion.span variants={letter}>.d</motion.span>
                            </motion.span>
                            <motion.span className='last' variants={lastName}>
                                <motion.span variants={letter}>l</motion.span>
                                <motion.span variants={letter}>u</motion.span>
                                <motion.span variants={letter}>f</motion.span>
                                <motion.span variants={letter}>f</motion.span>
                                <motion.span variants={letter}>y</motion.span>
                            </motion.span>
                        </Models>
                    </div>
                </div>
                <Wrap>
                    <div className="bottom">
                        <ImageContainerSingle>
                            <ThumbNail
                            initial={{
                                y: "-50%",
                                width: imageDetails.width,
                                height: imageDetails.height,
                              }}
                              animate={{
                                y: 0,
                                width: "100%",
                                height: window.innerWidth > 1440 ? 800 : 400,
                                transition: { delay: 0.2, ...transition },
                              }}
                              >
                                <FrameSingle
                                 whileHover='hover'
                                 transition={transition}>
                                    <ImageWrap src="https://blog.kakaocdn.net/dn/b1uOov/btrHsDB40an/rk5mkFTIt5kQDct03ySdz1/img.jpg" 
                                      alt='an image'
                                      style={{ scale: scale }}
                                      initial={{ scale: 1.0 }}
                                      animate={{
                                        transition: { delay: 0.2, ...transition },
                                        y: window.innerWidth > 1440 ? -1200 : -600,
                                      }}/>

                                </FrameSingle>
                            </ThumbNail>
                        </ImageContainerSingle>
                    </div>
                {/* <ScrollForMore /> */}
                    
                </Wrap>
            </Container>
                <DetailedInformation>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              The insiration behind the artwork <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
                </DetailedInformation>
        </Single>
    )
}
export default Model;
const DetailedInformation = styled.div`
margin-top: 200px;
height: 600px;
`

const ImageWrap = styled(motion.img)`
display:flex;
align-items: center;
`

const FrameSingle = styled(motion.div)`
img {
    position: absolute;
    width: 100%;
  }
`

const ImageContainerSingle = styled(motion.div)`
width: 100%;
height: 800px;
margin: 0 auto;
overflow: hidden;
position: absolute;
left: 0;
right: 0;
`

const ThumbNail = styled(motion.div)`
overflow: hidden;
position: relative;
`

const Wrap = styled.div`
    height: 50vh;
    position: relative;
    display: flex;
    align-items: center;
    .bottom {
        height: 100%;
        width: 100%;
    }
`

const Single = styled(motion.div)`

`

const Container = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;
    width: 100%;
    max-width: 100%;
    padding: 0;

    
  .row {
    display: flex;
    align-items: center;
    &.space-between {
      justify-content: space-between;
    }
    &.center {
      justify-content: center;
    }
  }

  .top-row {
    height: 50vh;
    width: 100%;
    align-items: flex-end;
  }

  .top {
    padding-bottom: 40px;
}
.details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .location {
      span:nth-child(2) {
        margin-left: 16px;
      }
    }
    .mua {
      text-transform: uppercase;
    }
`

const Models = styled(motion.div)`
    overflow: hidden; 
    text-transform: uppercase;

    .first {
        margin-right: 72px;
      }
      span {
        display: inline-block;
        position: relative;
        font-weight: 400;
        font-size: 224px;
        font-family: "Maragsa";
        @media (max-width: 1440px) {
          font-size: 128px;
        }
      }
`

import styled from 'styled-components';
import { motion } from 'framer-motion';

const transition = {
  duration: 0.8,
  ease: [0.6, -0.05, 0.01, 0.9],
}

const textReveal = {
  initial: {
    x: "200%",
    opacity: 0,
  },
  animate: {
    x: "0%",
    opacity: 1,
  },
};

const emojiReveal = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
}

const ExampleText = () => {
  return (
    <Contain>
      <BackgroundImg 
        variants={emojiReveal}
        initial="initial"
        animate="animate"
        transition={{ ...transition, delay: 0.1 }}
        />
      <Wrap>
        <BigText
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={transition}>
          Front-End
        </BigText>
        <BigText
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.5 }}>
          Developer
        </BigText>
        <BigText
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 1.1 }}>
          velog.io
        </BigText>
        <Emoji
           variants={emojiReveal}
           initial="initial"
           animate="animate"
           transition={{ ...transition, delay: 1.6 }}>
          <img src="https://blog.kakaocdn.net/dn/cfuN7W/btrHiGTj6NU/zGEt6e3TmogNA0ExwpNTu1/img.png" alt="emoji" />
        </Emoji>
      </Wrap>
    </Contain>
  )
}
export default ExampleText;


const Contain = styled.div`
  height: 100vh;
  color:#202020;
  background-color: #fff;
  background-image:
  linear-gradient(90deg, transparent 789px, #abced4 89px, #abced4 81px, transparent 81px),
  linear-gradient(#eee .1em, transparent .1em);
  background-size: 100% 1.9em;
  line-height:920%;
  position:relative;
  z-index:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  overflow:hidden;
`

const BigText = styled(motion.div)`
  font-size:150px;
  :nth-child(1){
    margin-left: 0vw;
}
  :nth-child(2){
      margin-left: 5vw;
  }
  :nth-child(3){
      margin-left: 0vw;
  }

`

const Wrap = styled.div`
  margin-top:-70px;
  position:relative;
`

const BackgroundImg = styled(motion.div)`
  width:100%;
  height:100%;
  background-image:url('https://blog.kakaocdn.net/dn/bnBPpb/btrHhbGfyie/mnsIa7V5EfSGBIzNUxOS0k/img.png');
  background-size:cover;
  position:absolute;
`

const Emoji = styled(motion.div)`
  width:100px;
  height:100px;
  position:absolute;
  right:90px;
  bottom:2px;
  img{
    width:100%;
  }
`
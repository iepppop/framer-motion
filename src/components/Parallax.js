import styled from "styled-components";
import {motion, useViewportScroll, useTransform} from 'framer-motion';

const Box = ({speed}) => {
    const { scrollYProgress } = useViewportScroll();
    const yValue = useTransform(scrollYProgress,[0,1],[0, 100*speed]);
    return(
        <ImgWrap 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{duration:1}}
        style={{ y: yValue }}
        >
         <img src="https://blog.kakaocdn.net/dn/xkyeR/btrHnyaBXVv/y5kOkzCVYCmZEQoONKsmgk/img.jpg" />
        </ImgWrap>
    )
}

const Parallax = () => {
  return (
    <Home>
        <Section>
            <Box speed={2}/>
            <Box speed={0}/>
            <Box speed={-2}/>
        </Section>
        </Home>
  )
}
export default Parallax;

const Home = styled.div`
    width:100vw;
    height:200vh;
    background-color:light-gray;
`

const Section = styled.div`
    width:90%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 auto;
    

    img{
        width:100%;
    }
`

const ImgWrap = styled(motion.div)`
    width:33.33%;
`
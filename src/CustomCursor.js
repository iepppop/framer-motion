import styled from "styled-components";
import { motion } from 'framer-motion';
import { useMousePosition } from './context/useMousePosition'

const CustomCursor = () => {
    const {hoverNav, variants, invisibleCursor } = useMousePosition();

  return (
    <>
    <CursorContain 
    animate={hoverNav}
    transition={{ ease:"linear", duration: 0.15}}
    variants={variants}
    
    />
    {/* <PointerStyles 
    animate={hoverNav}
    variants={invisibleCursor}
    /> */}
    </>
  )
}
export default CustomCursor;

const PointerStyles = styled(motion.div)`
    position:absolute;
    left:0;
    top:0;
    width:30px;
    height:30px;
    border-radius:100%100%;
    background:blue;
    z-index:20;
    transform:translate(-50%,-50%);
    pointer-events:none;
`

const CursorContain =styled(motion.div)`
    position:absolute;  
    left:0;
    top:0;
    width:15px;  opacity:0.9;
    height:15px;
    padding: 1.5vw;
    border-radius:100%100%;
    background-color:blue;
    z-index:20;
    pointer-events:none;
    opacity:0.9;
`
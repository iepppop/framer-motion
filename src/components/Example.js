import styled from "styled-components";
import { useMousePosition } from "../context/useMousePosition";
import { motion } from 'framer-motion'

const Example = () => {
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
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Data } from './Data';
import { Link } from "react-router-dom";
import { gridAnimation, cardAnimation, h3Animation } from './Animations'

const Cars = () => {
    return (
        <CarsContainer>
            <motion.h3
                variants={h3Animation} animate='show' exit="hide">choose your
                <span style={{ marginLeft: "10px" }}>
                    ship
                    <BorderLine />
                </span>
                <h1>01</h1>
            </motion.h3>
            <CarsWrap
                variants={gridAnimation}
                animate="show"
                exit="hide"
            >
                {Data.map((item) => {
                    return (
                        <Link to={`/car/${item.id}`} key={item.id}>
                            <Card
                                variants={cardAnimation}>
                                <img src={item.img} />
                                <span>{item.car}</span>
                            </Card>
                        </Link>
                    )
                })}
            </CarsWrap>
        </CarsContainer>
    )
}

export default Cars;

const CarsContainer = styled.div`
    max-width:1000px;
    margin:0 auto;
    margin-top: 1px;
    display: block;
    z-index:9999;
    position:relative;
    h3 {
        font-family: "Poppins", sans-serif;
        font-size: 25px;
        color: #fff;
        opacity: 0;
        left:0;
        position:absolute;
        z-index:-1;
        padding:40px 0 0 0;
        
        h1{
            opacity:0.2;font-family: 'Playfair Display', serif;
            margin-top:-75px;
            margin-left:-3px;
            font-weight:900;
        }

      }

      span{
            position:relative;
            
      }
`

const CarsWrap = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 80px 0;
`


const Card = styled(motion.div)`
    // background: rgb(27, 27, 27,0.9);
    border-radius:50px;
    height: 250px;
    align-items: center;
    text-align: center;
    opacity:0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    position:relative;
    width: 90%;

    img {
        width: 90%;
        max-height: 75%;
        margin-top: 10%;
        transition:0.8s;
    }

    span{
        
        opacity:0;
        position:absolute;
        bottom:-100px;
        color:white;
        font-family: "Poppins", sans-serif;
    }

    :hover{
        background: linear-gradient( transparent 40%,rgb(28, 28, 28,0.2) 50%);

        span{
            bottom:50px;
            opacity:1;
            left:50%;
            transform:translate(-50%,0);
        }

        img {
            width: 90%;
            max-height: 75%;
            margin-top: -40%;
        }
    }
`

const BorderLine = styled.div`
    position:absolute;
    width:95%;
    height:5px;
    background:blue;
    left:0;
    bottom:2px;
    opacity:0.8;
    z-index:-2;
    left:50%;
    transform:translate(-50%,0);

`
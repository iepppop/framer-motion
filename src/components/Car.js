import styled from "styled-components";
import { MdKeyboardBackspace } from "react-icons/md";
import { Data } from "./Data";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { carAnimation,cardAnimation } from "./Animations";


const Car = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const single = Data.find((item) => item.id === parseInt(id));
    return (
        <CarContainer>
            <CarWrap>
                <NavigateBack onClick={() => navigate('/')}>
                    <MdKeyboardBackspace />
                </NavigateBack>
                <ImageAndText
                    variants={carAnimation}
                    animate="show"
                    exit="hide"
                >
                    <img src={`${single.img}`} alt="img" />
                </ImageAndText>
            </CarWrap>
        </CarContainer>
    )
}
export default Car;

const CarContainer = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    text-align: center;
    margin-top: 1px;
    display: block;
`

const CarWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 10px 120px;
`

const NavigateBack = styled.div`
    font-size: 50px;
    color: tomato;
    cursor: pointer;
    margin-left: 30px;
    width: 0;
`

const ImageAndText = styled(motion.div)`
    display: flex;
    margin-top: -10px;
    justify-content: space-between;
    

    img{
        width:100%;
    }
`
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => {
    return (
        <Container>
            <Contain>
                <ImgContain>
                    <div
                        className="thumbnail"
                        ref={image}
                        style={{
                            width: imageDetails.width,
                            height: imageDetails.height,
                        }}
                    >
                        <div className='frame'>
                            <Link to={`/model/yasmeen-tariq`}>
                                <motion.img
                                    src="https://blog.kakaocdn.net/dn/b1uOov/btrHsDB40an/rk5mkFTIt5kQDct03ySdz1/img.jpg"
                                    alt='Yasmeen Tariq'
                                    whileHover={{ scale: 1.1 }}
                                    transition={transition}
                                />
                            </Link>
                        </div>
                    </div>
                    <Information
                        exit={{ opacity: 0 }}
                        transition={transition}>
                        <div className='title'>Yasmeen Tariq</div>
                        <div className='location'>
                            <span>28.538336</span>
                            <span>-81.379234</span>
                        </div>
                    </Information>
                </ImgContain>
            </Contain>
        </Container>
    )
}
export default Home;

const Container = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;
`

const Contain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ImgContain = styled.div`
    position: relative;

    .thumbnail {
        overflow: hidden;
        position: relative;
        .frame {
          img {
            width: 100%;
          }
        }
`

const Information = styled(motion.div)`
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    text-transform: uppercase;
    .location {
    span:nth-child(2) {
        margin-left: 8px;
    }
    }
`
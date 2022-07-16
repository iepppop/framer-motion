import styled from 'styled-components'

const Logo = () => {
    return (
        <Contain>
            <Sea />
            pirate king
        </Contain>
    )
}
export default Logo;

const Contain = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight:800;
    max-width: 1000px;
    margin:0 auto;
    padding:20px 30px;
    display:flex;
    align-items:center;
    background:rgba(255,255,255,0.1);
    border:1px solid rgba(255,255,255,0.2);
    border-top:none;
    border-radius:0 0 10px 10px;
`

const Sea = styled.div`
    width:20px;
    height:20px;
    overflow:hidden;
    background:linear-gradient(skyblue, blue);
    border-radius:50%;
    margin:0 15px 0 0;

`
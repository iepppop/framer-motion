import logo from './logo.svg';
import './App.css';
import Example from './components/Example';
import Logo from './components/Logo';
import styled from 'styled-components';
import CustomCursor from './CustomCursor';
import { useMousePosition } from './context/useMousePosition';
// import ExampleText from './components/ExampleText';


function App() {
  const { textEnter, textLeave } = useMousePosition();
  return (
    <Contain>
      <CustomCursor />
      {/* <ExampleText /> */}
      <Image>
      <img src="https://blog.kakaocdn.net/dn/RJOv4/btrHkTSb1Qk/pqfWEPnH4PxmarUoOxOo00/img.jpg" alt="sea" />
      </Image>
      <Logo />
      <Example />
      <BorderWrap >
      <BorderBox />
      </BorderWrap>
    </Contain>
  );
}

export default App;

const Contain = styled.div`
  width:100vw;
  height:100vh;
  overflow:hidden;
  position:relative;
`

const Image = styled.div`
  position:absolute;
  z-index:-1;
  right:100px;
  width:500px;
  top:-100px;
  img{
    width:100%;
  }
`

const BorderBox = styled.div`
  width:11%;
  height:3px;
  background:blue;
`

const BorderWrap = styled.div`
  display:flex;
  width:60%;
  height:3px;
  background:#000;
  position:Absolute;
  right:0;
  bottom:80px;
  justify-content:end;
`
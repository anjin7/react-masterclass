import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Times New Roman', Times, serif;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${props => props.theme.textColor};
  font-weight: 700;
  font-size: 48px;
`;

const rotateAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 24px;
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: skyblue;
  margin: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 3s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 72px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>

      <Box>
        <Emoji as="p" >😀</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
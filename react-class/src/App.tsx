import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  width: 300px;
  height: 300px;
  text-align: center;
`;
const H1 = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 100px;
  color: ${props => props.theme.textColor};
`;

function App() {
  
  return (
    <Container>
      <H1>Hello</H1>
    </Container>  
  );
}

export default App;
import styled from 'styled-components'

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: #fff;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;


function App() {
  return (
    <Father>
      <Btn>Log In</Btn>
      <Btn as="a" href="/">Log In</Btn>
    </Father>
  );
}

export default App;

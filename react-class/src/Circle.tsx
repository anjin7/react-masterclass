import { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor?: string;
};
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border: 2px solid;
  border-color: ${props => props.borderColor};
  border-radius: 100px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;
  color: white;
  line-height: 100px;
`;
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}


function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [value, setValue] = useState<number|string>("");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} >
      {text}
    </Container>
  )
};
export default Circle;

// interface PlayerShape {
//   name: string;
//   age: number;
// }

// const sayHello = (playerObj: PlayerShape) =>
//   `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

// sayHello({ name: 'nico', age: 12 })
// sayHello({ name:'hi', age:12 })
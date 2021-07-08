import React, {FC} from 'react'
import styled from "styled-components";

const StyledConsole = styled.textarea`
  background: black;
  width: 100%;
  height: 70vh;
  border: none;
  resize: none;
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }

  color: ${({color}) => color || 'white'};
`

interface IConsoleProps {
    color?: string
}

export const Console: FC<IConsoleProps> = (props): JSX.Element => {
    return <StyledConsole {...props}/>
}
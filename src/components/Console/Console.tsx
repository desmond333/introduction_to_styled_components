import React, {FC, useState} from 'react'
import styled from "styled-components";
import {Flex} from '../common components/Flex/Flex'
import {Line} from './Line/Line'

const StyledConsole = styled.textarea`
  background: black;
  width: 80%;
  height: 70vh;
  border: none;
  resize: none;
  //как убрать подчеркивание красными волнистыми линиями? это не работает
  //spellcheck: false;
  //text-decoration: none;
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }

  color: ${({color}) => color || 'white'};
`

interface IConsoleProps {
    color?: string
}

type TLines = string[]

export const Console: FC<IConsoleProps> = ({color, ...props}): JSX.Element => {
    const [lines, setLines] = useState<TLines>(['C/users/desmond333>'])

    const onKeyPress: React.KeyboardEventHandler<HTMLTextAreaElement> = (e): void => {
        if (e.key === 'Enter') {
            setLines([...lines, 'C/users/desmond333>'])
        }
    }

    return (
        <Flex>
            <Flex direction={'column'} margin={'0 10px'}>
                {lines.map((line) => {
                    return <Line color={color}>{line}</Line>
                })}
            </Flex>
            {/*Как передать autofocus?*/}
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>
    )
}
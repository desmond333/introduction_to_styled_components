import React, {FC, useState} from 'react'
import styled from "styled-components";
import {Flex} from '../common components/Flex/Flex'
import {Line} from './Line/Line'

const StyledConsole = styled.textarea<{
    color?: string
}>`
  background: black;
  width: 80%;
  height: 70vh;
  border: none;
  resize: none;
  font-size: 1.5rem;

  color: ${props => props.color || props.theme.colors.primary};
  
  &:focus {
    outline: none;
  }
  
  @media ${props => props.theme.media.phone} {
      border: 1px solid ${props => props.theme.colors.primary};
  }
`

interface IConsoleProps {
    color?: string
}

export const Console: FC<IConsoleProps> = ({color, ...props}): JSX.Element => {
    const [lines, setLines] = useState<string[]>(['C/users/desmond333>'])

    const onKeyPress: React.KeyboardEventHandler<HTMLTextAreaElement> = (e): void => {
        if (e.key === 'Enter') {
            setLines([...lines, 'C/users/desmond333>'])
        }
    }

    return (
        <Flex>
            <Flex direction={'column'} margin={'0 10px'}>
                {lines.map((line) => {
                    return <Line color={''} key={Date.now()}>{line}</Line>
                })}
            </Flex>
            <StyledConsole spellCheck={false} autoFocus onKeyPress={onKeyPress} {...props}/>
        </Flex>
    )
}
import React, {FC} from 'react'
import styled from "styled-components"

interface ITitleProps {
    color: string
}

const StyledTitle = styled.h1`
  color: ${(props) => props.color ? props.color : '#ffffff'};
`

export const Title: FC<ITitleProps> = (props): JSX.Element => {
    return <StyledTitle {...props}/>
}
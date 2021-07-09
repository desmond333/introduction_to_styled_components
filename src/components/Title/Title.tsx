import React, {FC} from 'react'
import styled from "styled-components"

const StyledTitle = styled.h1<{
    color?: string
}>`
  color: ${props => props.color || props.theme.colors.primary};
`

interface ITitleProps {
    color?: string
}

export const Title: FC<ITitleProps> = (props): JSX.Element => {
    return <StyledTitle {...props}/>
}
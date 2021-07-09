import React, {FC} from 'react'
import styled from "styled-components"

const StyledFlex = styled.div<{
    direction?: string
    align?: string
    justify?: string
    margin?: string
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${props => props.margin || '0'};
`

interface IFlexProps {
    direction?: string
    align?: string
    justify?: string
    margin?: string
}

export const Flex: FC<IFlexProps> = (props): JSX.Element => {
    return <StyledFlex {...props}/>
}
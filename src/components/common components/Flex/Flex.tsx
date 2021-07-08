import React, {FC} from 'react'
import styled from "styled-components"

interface IFlexProps {
    direction?: string
    align?: string
    justify?: string
    margin?: string
    color?: string
}

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props: any) => props.direction || 'row'};
  align-items: ${(props: any) => props.align || 'stretch'};
  justify-content: ${(props: any) => props.justify || 'stretch'};
  margin: ${(props: any) => props.margin || '0'};
`

export const Flex: FC<IFlexProps> = (props): JSX.Element => {
    return <StyledFlex {...props}/>
}
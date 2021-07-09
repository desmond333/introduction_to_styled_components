import React, {FC} from 'react'
import styled from 'styled-components'

const StyledLine = styled.div<{
    color: string
}>`
  font-size: 1.5rem;
  color: ${(props)=> props.color || 'white'};
`

interface ILineProps {
    color: string
}

export const Line: FC<ILineProps> = (props): JSX.Element => {
    return <StyledLine {...props}/>
}
import React, {FC} from 'react'
import styled, {css, keyframes} from 'styled-components'

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`

const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 18px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  
  &:hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }

  align-self: ${(props: any) => props.align || 'stretch'};

  //группировка стилей на основании пропсов
  ${(props: any) => props.primary && css`
    color: ${(props: any) => props.color || 'black'};
    background: ${(props: any) => props.background || 'white'};
  `}

  ${(props: any) => props.outlined && css`
    color: ${(props: any) => props.color || 'white'};
    border: 1px solid ${(props: any) => props.color || 'white'};
    background: transparent;
  `}
`

interface IButtonProps {
    primary?: boolean
    outlined?: boolean
    align?: string
    color?: string
    background?: string
}

export const Button: FC<IButtonProps> = (props): JSX.Element => {
    return <StyledButton {...props}/>
}

//расширение стилей компонентов
const LargeStyledButton = styled(StyledButton)`
  font-size: 32px;
`

//чтобы задать дефолтные пропс
const defaultStyledButton = styled.button.attrs((props)=>({
    outlined: true,
}))
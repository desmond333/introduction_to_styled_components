import React, {FC} from 'react'
import styled from 'styled-components'

const SNavbar = styled.nav<{
    background?: string
}>`
  background: ${props => props.color || props.theme.colors.primary};
  padding: 1rem;
`

const SNavbarItem = styled.div`
  position: relative;
`

const Logo = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #3260A1;
`

export const Navbar: FC = (): JSX.Element => {
    return (
        <SNavbar>
            <div className="container">
                <SNavbarItem>
                    <Logo>NEXT | BLOG</Logo>
                </SNavbarItem>
            </div>
        </SNavbar>
    )
}
import React, {FC} from 'react';
import styled from "styled-components";
import {Title} from "./Title/Title";
import {Flex} from "./common components/Flex/Flex";
import {Console} from "./Console/Console";
import {Button} from "./common components/Button/Button";

const StyledAppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`

export const App: FC = (): JSX.Element => {
    return (
        <StyledAppWrapper>
            <Flex justify={'center'}>
                <Title>Console cmd 2021. frontend._.web</Title>
            </Flex>
            <Flex direction={'column'} margin={'10px 0'}>
                <Console/>
                <Button outlined align={'flex-end'}>Отправить</Button>
            </Flex>
        </StyledAppWrapper>
    );
}
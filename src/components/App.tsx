import React, {FC} from 'react';
import styled from "styled-components";
import {Title} from "./Flex/Title/Title";
import {Flex} from "./Flex/Flex";
import {Console} from "./Flex/Console/Console";
import {Button} from "./Flex/Button/Button";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
  color: white;
`

export const App: FC = (): JSX.Element => {
    return (
        <AppWrapper>
            <Flex justify={'center'}>
                <Title color={'green'}>Console cmd 2021. frontend._.web</Title>
            </Flex>
            <Flex direction={'column'}>
                <Console/>
                <Button outlined color={'green'} align={'flex-end'}>Отправить</Button>
            </Flex>
        </AppWrapper>
    );
}
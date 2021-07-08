import React, {FC} from 'react';
import styled from "styled-components";
import {Title} from "./Title/Title";
import {Flex} from "./common components/Flex/Flex";
import {Console} from "./Console/Console";
import {Button} from "./common components/Button/Button";

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
            <Flex direction={'column'} margin={'10px 0'}>
                <Console color={'green'}/>
                <Button outlined color={'green'} align={'flex-end'}>Отправить</Button>
            </Flex>
        </AppWrapper>
    );
}
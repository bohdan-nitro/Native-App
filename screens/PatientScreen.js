import * as React from 'react';
import {Text, Button} from "react-native";
import styled from "styled-components";

export const PatientScreen = ({route, navigation}) => {
    return (
        <Wrapper style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Title>Valera Valera...</Title>
        </Wrapper>
    )
}

const Title = styled.Text`
color: #fff;
font-weight: 700;
font-size: 32px
`
const Wrapper = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: #2b2727;

`

import * as React from 'react';
import {Text} from "react-native";
import styled from "styled-components";

export const ButtonNitro = ({children, color}) => {
    return (
        <Button color={color}>
            <ButtonText>{children}</ButtonText>
        </Button>
    )
}

ButtonNitro.defaultProps = {
    color: "#DE190BFF"
}

const Button = styled.TouchableOpacity`
    text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  height: 45px;
  background: ${props => props.color};
`
const ButtonText = styled.Text`
color: #fff;
  font-size: 16px;
  font-weight: 500;
`
import * as React from "react";
import styled from "styled-components";

const getColors = ({active, color}) => {
    const colors = {
        green: {
            background: "#28bf50",
            color: "#fff"
        },
        active: {
            background: "#de190b",
            color: "#fff"
        },
        default: {
            background: "#696969",
            color: "#fff"
        }
    }
    let result;
    if (active) {
        result = colors.active
    } else if (color && colors[color]) {
        result = colors[color]
    } else {
        result = colors.default
    }
    return result;
}

export default styled.Text`
background: ${props => getColors(props).background};
border-radius: 10px;
color: ${props => getColors(props).color};
font-weight: 700;
font-size: 14px;
width: 70px;
height: 30px;
text-align: center;
line-height: 28px;
border-bottom-width: 1px;
border-bottom-color: #696969;
`
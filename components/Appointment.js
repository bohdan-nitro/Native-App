import React from "react";
import {View, Text, StyleSheet} from "react-native";
import styled from "styled-components";

export const Appointment = ({user, diagnosis, active, time}) => {

    return (
             <GroupItem>
                <Avatar source={{
                    uri: user.avatar
                }}/>
                <View style={styles.container}>
                    <FullName>{user.fullName}</FullName>
                    <GrayText>{diagnosis}</GrayText>
                </View>
                <GroupTime active={active}>{time}</GroupTime>
            </GroupItem>
    );
}

Appointment.defaultProps = {
        title: "Untitled",
        items: []
    }

    const GroupBlock = styled.View`
    padding: 0 20px
    `



    const GroupItem = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
padding: 20px;
`
    const Avatar = styled.Image`
border-radius: 50px;
height: 40px;
width: 40px;
margin-right: 15px;
`

    const FullName = styled.Text`
    color: #fff
font-weight: 600;
font-size: 16px
font-weight: 700
`

    const GrayText = styled.Text`
font-size: 16px;
color: #adacac;
`

    const GroupTime = styled.Text`
background: ${props => props.active ? "#de190b" : "#696969"};
border-radius: 10px;
color: #fff;
font-weight: 700;
font-size: 14px;
width: 70px;
height: 30px
text-align: center;
line-height: 28px;
border-bottom-width: 1px;
border-bottom-color: #696969;
`

const styles = StyleSheet.create({
        container: {
            flex: 1
        }
    })

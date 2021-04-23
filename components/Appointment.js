import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import styled from "styled-components";
import Badge from "./Badge";

export const Appointment = ({ navigate, item}) => {
const {user, diagnosis, active, time,} = item;
    return (
             <GroupItem onPress={() => navigate("Details", item)}>
                <Avatar source={{
                    uri: user.avatar
                }}/>
                <View style={styles.container}>
                    <FullName>{user.fullName}</FullName>
                    <GrayText>{diagnosis}</GrayText>
                </View>
                <Badge active={active}>{time}</Badge>
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
    color: #fff;
font-weight: 700;
`

    const GrayText = styled.Text`
font-size: 16px;
color: #adacac;
`


const styles = StyleSheet.create({
        container: {
            flex: 1
        }
    })

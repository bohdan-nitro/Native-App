import * as React from 'react';
import styled from "styled-components";
import GrayTitle from "../components/GrayTitle";
import {ButtonNitro} from "../components/Button";
import {Foundation, Ionicons} from "@expo/vector-icons";
import {Text, View} from "react-native";
import Badge from "../components/Badge";

export const PatientScreen = ({route}) => {

    return (
        <Wrapper>
            <ClientDetails>
                <PatientFullName>{route.params.user.fullName}</PatientFullName>
                <GrayTitle>{route.params.user.phone}</GrayTitle>
                <ContentButtons>
                    <ButtonWrapper>
                        <ButtonNitro>
                            Functional Workout
                        </ButtonNitro>
                    </ButtonWrapper>
                    <ButtonPhoneWrapper>
                        <ButtonNitro color={"#28bf50"}>
                            <Foundation name="telephone" size={22} color="white"/>
                        </ButtonNitro>
                    </ButtonPhoneWrapper>
                </ContentButtons>
            </ClientDetails>
            <PersonalClients>
                <Container>
                    <PatientFullName>Цели</PatientFullName>
                    <PersonalCard>
                        <PersonalCardWrapper>
                            <Ionicons name="barbell" size={20} color="white"/>
                            <PersonalCardLabel>Увеличить силовые: <Text style={{fontWeight: "700"}}>+10кг</Text></PersonalCardLabel>
                        </PersonalCardWrapper>
                        <PersonalCardWrapper>
                            <Ionicons name="body" size={20} color="white"/>
                            <PersonalCardLabel>Назначить питание: <Text style={{fontWeight: "700"}}>Набор массы</Text></PersonalCardLabel>
                        </PersonalCardWrapper>
                        <PersonalButtonWrapper style={{justifyContent: "space-between"}}>
                            <Badge active style={{width: 155}}>22.07.12 15-30</Badge>
                            <Badge color={"green"}>1000грн</Badge>
                        </PersonalButtonWrapper>
                    </PersonalCard>
                </Container>
            </PersonalClients>
        </Wrapper>
    )
}
const Container = styled.View`
  flex: 1;
  padding: 25px
`

const PersonalCard = styled.View`
  margin-top: 20px;
  border-radius: 10px;
  background: #3e3d3d;
  padding: 15px 25px;
  shadow-color: #d2cfcf;
  elevation: 1;
  shadow-radius: 3.5px;
  display: flex;


`
const PersonalCardWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 5.5px;
  margin-bottom: 5.5px;
`


const PersonalCardLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`

const ClientDetails = styled(Container)`
  flex: 0.3;
`

const PersonalClients = styled.View`
  flex: 1;
  background: #2b2727;

`


const Wrapper = styled.View`
  flex: 1;
  background-color: #2b2727;

`
const PatientFullName = styled.Text`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 5px;
`


const ButtonWrapper = styled.View`
  flex: 1;
`
const ButtonPhoneWrapper = styled.View`
  margin-left: 10px;
  width: 45px;
`

const ContentButtons = styled.View`
  margin-top: 20px;
  flex: 1;
  flex-direction: row;
`

const PersonalButtonWrapper = styled.View`      
  align-items: center;                          
  flex-direction: row;                          
  margin-top: 12px;                             
  margin-bottom: 5.5px;                         
`
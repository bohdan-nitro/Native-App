import * as React from 'react';
import {Button, SafeAreaView, SectionList, View} from "react-native";
import {Appointment} from "../components/Appointment";
import {SectionTitle} from "../components";
import {Ionicons} from "@expo/vector-icons";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components";

const DATA = [
    {
        title: "14 сентября",
        data: [
            {
                time: "15:30",
                active: true,
                diagnosis: "Estoy Anassesito",
                user: {
                    fullName: "Bohdan Mogdan",
                    avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQHEYn1CrTtDjA/profile-displayphoto-shrink_200_200/0/1617989591450?e=1624492800&v=beta&t=4ZDbgchKLJZiOF8aP1QO69Fn3fMnWF9cDE4N_bm45Uk"
                },
            },
            {
                time: "13:30",
                diagnosis: "Estino Partino",
                user: {
                    fullName: "Nosit Trento",
                    avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGbJ5w4q0ZGqQ/profile-displayphoto-shrink_200_200/0/1617882629444?e=1624492800&v=beta&t=WfSvS1D_TkWdZumgyPQwNRtoCcPB07PpJey_jhSGf38"
                },
            }
        ],
    },
    {
        title: "18 сентября",
        data: [
            {
                time: "15:30",
                diagnosis: "Estoy Anassesito",
                user: {
                    fullName: "Sergio Barea",
                    avatar: "https://instagram.fiev13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/26864411_209228126302473_6776663476245889024_n.jpg?tp=1&_nc_ht=instagram.fiev13-1.fna.fbcdn.net&_nc_ohc=NW-BIhT2HVoAX8iOi7z&edm=ABfd0MgAAAAA&ccb=7-4&oh=f39afe408e423b93151ba001a43f0504&oe=60A4D12C&_nc_sid=7bff83"
                },
            },
            {
                time: "13:30",
                diagnosis: "Estino Partino",
                user: {
                    fullName: "Nosit Trento",
                    avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGbJ5w4q0ZGqQ/profile-displayphoto-shrink_200_200/0/1617882629444?e=1624492800&v=beta&t=WfSvS1D_TkWdZumgyPQwNRtoCcPB07PpJey_jhSGf38"
                },
            },
            {
                time: "10:30",
                diagnosis: "Estoy Anassesito",
                user: {
                    fullName: "Antonio McDays",
                    avatar: "https://instagram.fiev13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/22157944_877114922437466_93710018825682944_n.jpg?tp=1&_nc_ht=instagram.fiev13-1.fna.fbcdn.net&_nc_ohc=my1JO45vG6sAX8l_mMW&edm=ABfd0MgAAAAA&ccb=7-4&oh=dcfc3859168ae8ba09f157989ed7c604&oe=60A587E0&_nc_sid=7bff83"
                },
            },
            {
                time: "19:30",
                diagnosis: "Estino Partino",
                user: {
                    fullName: "Nosit Trento",
                    avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGbJ5w4q0ZGqQ/profile-displayphoto-shrink_200_200/0/1617882629444?e=1624492800&v=beta&t=WfSvS1D_TkWdZumgyPQwNRtoCcPB07PpJey_jhSGf38"
                },
            },
            {
                time: "10:30",
                diagnosis: "Estoy Anassesito",
                user: {
                    fullName: "Antonio McDays",
                    avatar: "https://instagram.fiev13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/22157944_877114922437466_93710018825682944_n.jpg?tp=1&_nc_ht=instagram.fiev13-1.fna.fbcdn.net&_nc_ohc=my1JO45vG6sAX8l_mMW&edm=ABfd0MgAAAAA&ccb=7-4&oh=dcfc3859168ae8ba09f157989ed7c604&oe=60A587E0&_nc_sid=7bff83"
                },
            },
            {
                time: "19:30",
                diagnosis: "Estino Partino",
                user: {
                    fullName: "Nosit Trento",
                    avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGbJ5w4q0ZGqQ/profile-displayphoto-shrink_200_200/0/1617882629444?e=1624492800&v=beta&t=WfSvS1D_TkWdZumgyPQwNRtoCcPB07PpJey_jhSGf38"
                },
            },
            {
                time: "10:30",
                diagnosis: "Estoy Anassesito",
                user: {
                    fullName: "Antonio McDays",
                    avatar: "https://instagram.fiev13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/22157944_877114922437466_93710018825682944_n.jpg?tp=1&_nc_ht=instagram.fiev13-1.fna.fbcdn.net&_nc_ohc=my1JO45vG6sAX8l_mMW&edm=ABfd0MgAAAAA&ccb=7-4&oh=dcfc3859168ae8ba09f157989ed7c604&oe=60A587E0&_nc_sid=7bff83"
                },
            },
            {
                time: "19:30",
                diagnosis: "Estino Partino",
                user: {
                    fullName: "Nosit Trento",
                    avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGbJ5w4q0ZGqQ/profile-displayphoto-shrink_200_200/0/1617882629444?e=1624492800&v=beta&t=WfSvS1D_TkWdZumgyPQwNRtoCcPB07PpJey_jhSGf38"
                },
            }
        ],
    },


]

export class HomeScreen extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
                <SafeAreaView style={{backgroundColor: "#2d2e2d"}}>
                    <SectionList
                        sections={DATA}
                        keyExtractor={(item, index) => index}
                        renderItem={({item}) => <Appointment navigate={navigation.navigate} {...item} />}
                        renderSectionHeader={({section: {title}}) => (
                            <SectionTitle>{title}</SectionTitle>
                        )}
                    />
                    <PlusButton>
                        <Ionicons name="ios-add" size={34} color="white"/>
                    </PlusButton>
                </SafeAreaView>
        )
    }

}

const Container = styled.View`
flex: 1;
margin-top: 30px;
background: #2b2727
`;

const PlusButton = styled.TouchableOpacity`
border-radius: 50px
width: 64px;
height: 64px;
background: #de190b;
align-items: center;
justify-content: center;
position: absolute;
bottom: 20px
right: 20px
shadow-color: #fff;                   
shadow-opacity: 0.7;
shadow-radius: 3.5;
elevation: 5;
`

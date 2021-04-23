import React, {useState, useEffect} from 'react';
import {Button, SafeAreaView, SectionList, View, StyleSheet} from "react-native";
import {Appointment} from "../components/Appointment";
import {SectionTitle} from "../components";
import {Ionicons} from "@expo/vector-icons";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components";
import axios from "axios";


export const HomeScreen = (props) => {
    const [data, setData] = useState(null);
    const DATA = [
        {
            title: "14 сентября",
            data: [
                {
                    time: "15:30",
                    active: true,
                    diagnosis: "Estoy Anassesito",
                    user: {
                        phone: "+380980069627",
                        fullName: "Bohdan Mogdan",
                        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQHEYn1CrTtDjA/profile-displayphoto-shrink_200_200/0/1617989591450?e=1624492800&v=beta&t=4ZDbgchKLJZiOF8aP1QO69Fn3fMnWF9cDE4N_bm45Uk"
                    },
                },
                {
                    time: "13:30",
                    diagnosis: "Estino Partino",

                    user: {
                        phone: "+3809800691111",
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
                        phone: "+3809800653321",
                        fullName: "Sergio Barea",
                        avatar: "https://instagram.fiev13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/26864411_209228126302473_6776663476245889024_n.jpg?tp=1&_nc_ht=instagram.fiev13-1.fna.fbcdn.net&_nc_ohc=NW-BIhT2HVoAX8iOi7z&edm=ABfd0MgAAAAA&ccb=7-4&oh=f39afe408e423b93151ba001a43f0504&oe=60A4D12C&_nc_sid=7bff83"
                    },
                },
                {
                    time: "13:30",
                    diagnosis: "Estino Partino",
                    phone: "+3809800330900",
                    user: {
                        fullName: "Nosit Trento",
                        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGbJ5w4q0ZGqQ/profile-displayphoto-shrink_200_200/0/1617882629444?e=1624492800&v=beta&t=WfSvS1D_TkWdZumgyPQwNRtoCcPB07PpJey_jhSGf38"
                    },
                },
                {
                    time: "10:30",
                    diagnosis: "Estoy Anassesito",

                    user: {
                        phone: "+380980069627",
                        fullName: "Antonio McDays",
                        avatar: "https://instagram.fiev13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/22157944_877114922437466_93710018825682944_n.jpg?tp=1&_nc_ht=instagram.fiev13-1.fna.fbcdn.net&_nc_ohc=my1JO45vG6sAX8l_mMW&edm=ABfd0MgAAAAA&ccb=7-4&oh=dcfc3859168ae8ba09f157989ed7c604&oe=60A587E0&_nc_sid=7bff83"
                    },
                },
                {
                    time: "19:30",
                    diagnosis: "Estino Partino",

                    user: {
                        phone: "+380980069627",
                        fullName: "Nosit Trento",
                        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGbJ5w4q0ZGqQ/profile-displayphoto-shrink_200_200/0/1617882629444?e=1624492800&v=beta&t=WfSvS1D_TkWdZumgyPQwNRtoCcPB07PpJey_jhSGf38"
                    },
                },
                {
                    time: "10:30",
                    diagnosis: "Estoy Anassesito",

                    user: {
                        phone: "+380980069627",
                        fullName: "Antonio McDays",
                        avatar: "https://instagram.fiev13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/22157944_877114922437466_93710018825682944_n.jpg?tp=1&_nc_ht=instagram.fiev13-1.fna.fbcdn.net&_nc_ohc=my1JO45vG6sAX8l_mMW&edm=ABfd0MgAAAAA&ccb=7-4&oh=dcfc3859168ae8ba09f157989ed7c604&oe=60A587E0&_nc_sid=7bff83"
                    },
                },
                {
                    time: "19:30",
                    diagnosis: "Estino Partino",
                    phone: "+380980069627",
                    user: {
                        fullName: "Nosit Trento",
                        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGbJ5w4q0ZGqQ/profile-displayphoto-shrink_200_200/0/1617882629444?e=1624492800&v=beta&t=WfSvS1D_TkWdZumgyPQwNRtoCcPB07PpJey_jhSGf38"
                    },
                },
                {
                    time: "10:30",
                    diagnosis: "Estoy Anassesito",

                    user: {
                        phone: "+380980069627",
                        fullName: "Antonio McDays",
                        avatar: "https://instagram.fiev13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/22157944_877114922437466_93710018825682944_n.jpg?tp=1&_nc_ht=instagram.fiev13-1.fna.fbcdn.net&_nc_ohc=my1JO45vG6sAX8l_mMW&edm=ABfd0MgAAAAA&ccb=7-4&oh=dcfc3859168ae8ba09f157989ed7c604&oe=60A587E0&_nc_sid=7bff83"
                    },
                },
                {
                    time: "19:30",
                    diagnosis: "Estino Partino",

                    user: {
                        phone: "+3809800634343",
                        fullName: "Nosit Trento",
                        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGbJ5w4q0ZGqQ/profile-displayphoto-shrink_200_200/0/1617882629444?e=1624492800&v=beta&t=WfSvS1D_TkWdZumgyPQwNRtoCcPB07PpJey_jhSGf38"
                    },
                }
            ],
        },


    ]

    // useEffect(() => {
    //     axios.get("https://trycode.pw/c/QD0LK.json").then(({data}) => {
    //         setData(data)
    //     });
    // }, []);


    const {navigation} = props;
    return (
        <Container>
                <SafeAreaView style={{backgroundColor: "#2d2e2d"}}>
                    <SectionList
                        sections={DATA}
                        keyExtractor={(item, index) => index}
                        renderItem={({item}) => <Appointment navigate={navigation.navigate} item={item}/>}
                        renderSectionHeader={({section: {title}}) => (
                            <SectionTitle>{title}</SectionTitle>
                        )}
                    />

                </SafeAreaView>
            <PlusButton>
                <Ionicons name="ios-add" size={34} color="white"/>
            </PlusButton>
        </Container>
    )
}

const Container = styled.View`
  flex: 1;
  background: #2b2727
`;

const PlusButton = styled.TouchableOpacity`
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #de190b;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  right: 20px;


`
import React from "react";
import { View , Text , FlatList, StyleSheet } from "react-native";
import MatchItem from "./MatchItem";

const matches = [
  {
    id:1,
    teamA: 'Ecuador',
    teamB: 'Qatar',
    teamAlogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/AKqvkBpIyr-iLOK7Ig7-yQ_96x96.png',
    teamBlogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/h0FNA5YxLzWChHS5K0o4gw_96x96.png',
    scoreA: 2,
    scoreB: 0,
    date: 'Sunday 20/11'
  },
  {
    id:2,
    teamA: 'Iran',
    teamB: 'England',
    teamAlogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/1oq8Fy7ETpBpZNaCA22ArQ_96x96.png',
    teamBlogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_96x96.png',
    scoreA: 2,
    scoreB: 6,
    date: 'Monday 21/11'
  },
  {
    id:3,
    teamA: 'Saudi Arabia',
    teamB: 'Argentina',
    teamAlogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/QoAJxO46fHid3_T-7nRZ0Q_96x96.png',
    teamBlogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/1xBWyjjkA6vEWopPK3lIPA_96x96.png',
    scoreA: 2,
    scoreB: 1,
    date: 'Tuesday 22/11'
  },
  {
    id:4,
    teamA: 'Australia',
    teamB: 'France',
    teamAlogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/jSgw5z0EPOLzdUi-Aomq7Q_96x96.png',
    teamBlogo: 'https://ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_96x96.png',
    scoreA: 1,
    scoreB: 4,
    date: 'Tuesday 22/11'
  },
]


const App = () =>{
  return(
    <View style = {styles.container}>
      <FlatList 
        data={matches}
        keyExtractor= {x => x.id}
        renderItem = {item => <MatchItem />}
      />
    </View>
  )
}
const styles = StyleSheet .create({
  container:{
    flex:1, padding:30 ,backgroundColor:"#880000"
  }
});

export default App;



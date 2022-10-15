import React from "react";
import { StyleSheet, View } from "react-native";
import FetchAPI from "../API/FetchAPI.js";
export default function Home({ navigation }) {
    
    return (
      <View style={styles.main}>
          <FetchAPI/>
      </View>
    );
}
const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: "#f8f8ff",
      alignItems:'center',
      justifyContent: "center",
    },
    img:{
        height:10,
        width:10,
    }
  });
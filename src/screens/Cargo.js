import React from "react";
import { StyleSheet, View, Text } from "react-native";
export default function Cargo({navigation}) {
    return (
      <View style={styles.main}>
          <Text>Pain Cart</Text>
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
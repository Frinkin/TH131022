import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";
import MainButton from "../components/MainButton";

export default function Info({ route }) {
    const url = "http://192.168.43.227:3000/products/" + route.params.paramKey;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    })
    const [data, setData] = useState([]);
    return (
        <SafeAreaView style={styles.main}>
            <Image style={styles.img} source={{ uri: data.pic }} />
            <Text>Tên Sản Phẩm: {data.name}</Text>
            <Text>Hãng: {data.brand}</Text>
            <Text>Màu: {data.color}</Text>
            <Text>Giá: {data.price} $</Text>
            <View style={styles.btn}>
                <MainButton
                    title="Đặt hàng"
                />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    main: {
        padding: 20,
        flex: 1,
        fontSize: 30,
        backgroundColor: "#f8f8ff",
        alignItems: 'flex-start',
        justifyContent: "center",
    },
    img: {
        alignSelf: "center",
        height: 450,
        width: 300
    },
    btn: {
        alignSelf: 'center'
    }
});
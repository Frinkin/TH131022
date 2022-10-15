import React, { useEffect, useState } from "react";
import { Text, View, FlatList, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FetchAPI() {
    const [brand, setBrand]=useState('All')
    const listTab = [
        {
            brand: 'All'
        },
        {
            brand: 'Apple'
        },
        {
            brand: 'Samsung'
        },
        {
            brand: 'LG'
        },
    ]
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    const url = "http://192.168.43.227:3000/products";
    const [data, setData] = useState([]);
    
    const [datalist,setDatalist] = useState(data)
    const renderItem = ({ item }) => (
        <Item title={item.name} />
    );
    const setBrandFilter = brand => {
        if(brand !=='All')
        {
            setDatalist([...data.filter(e=>e.brand === brand)])
        }else{
            setDatalist(data)
        }
        setBrand(brand)
    }
    useEffect(() => {
        fetch(url)
            .then((res)=>res.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            
    })
    return (
        <SafeAreaView>
            <View style={styles.listTab}>
                {
                    listTab.map(e => (
                        <TouchableOpacity 
                            style={[styles.btnTab, brand === e.brand&&styles.btnTabActive]}
                            onPress={()=> setBrandFilter(e.brand)}
                        >
                            <Text>{e.brand}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <FlatList
                style={styles.list}
                data={datalist}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: 'lightgray',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
    },
    listTab: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    btnTab: {
        width: Dimensions.get('window').width / 4.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#EBEBEB',
        padding: 10,
        justifyContent: 'center'
    },
    btnTabActive:{
        backgroundColor:'#E6838D'
    },
    list:{
        height: Dimensions.get('window').height / 1.25,
    }
});
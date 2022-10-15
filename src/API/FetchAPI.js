import React, { useEffect, useState } from "react";
import { Text, View, FlatList, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FetchAPI() {
    const [brand, setBrand]=useState('All')
    const [sorter, setSort] = useState([])
    const sortTab =[
        {
            sorter: 'price↑'
        },
        {
            sorter: 'price↓'
        }
    ]
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
    const Item = ({ title },{priced}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.prices}>{priced}</Text>
        </View>
    );
    const url = "http://192.168.43.227:3000/products";
    const [data, setData] = useState([]);
    const [datalist,setDatalist] = useState(data);
    const renderItem = ({item}) => (
        <View key={item.id}>
            <Item title={item.name} priced={item.price}/>
        </View>
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
            <View style={styles.listTab}>
                {
                    sortTab.map(e => (
                        <TouchableOpacity 
                            style={[styles.btnSortTab, sorter === e.sorter&&styles.btnTabActive]}
                            onPress={()=> setSort(e.sorter)}
                        >
                            <Text>{e.sorter}</Text>
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
    prices: {
        fontSize: 20,
    },
    listTab: {
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnSortTab: {
        width: Dimensions.get('window').width / 2.25,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#EBEBEB',
        padding: 10,
        justifyContent: 'center'
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
        height: Dimensions.get('window').height / 1.4,
    }
});
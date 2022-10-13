import React, { useEffect,useState } from "react";
import {Text,View } from "react-native";

export default function FetchAPI(){
    const url = "http://192.168.43.227:3000/products";
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then((Response)=>Response.json())
        .then((json)=>setData(json))
        .catch((error)=>console.error(error))
        .finally(()=>setLoading(false));
    })
    return(
        <View>
        {
        isLoading ? <Text>loading...</Text>:(
            data.map((post)=>(
                <View>
                    <Text>{post.id}</Text>
                    <Text>{post.name}</Text>
                    <Text>{post.color}</Text>
                    <Text>{post.price}</Text>
                    <Text></Text>
                </View>
            ))
        )}
    </View>
    )
}


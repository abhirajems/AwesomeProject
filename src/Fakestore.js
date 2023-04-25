import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Fakestore = () => {
    useEffect(()=>{

    },[])

    const getData = ()=> {
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
  return (
    <View>
      
    </View>
  )
}

export default Fakestore
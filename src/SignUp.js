import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './action/action'
const SignUp = () => {
  const dispatch = useDispatch()
  const [num, setNum] = useState(0)
  const myState = useSelector((state) => state.changeTheNumber)
  useEffect(() => {
    if (myState) {
      setNum(myState);
    }
  }, [myState])
console.log('check',num)
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 600 }}>
        <TouchableOpacity
          onPress={() => dispatch(increment())}
          style={{ height: 50, width: 50, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center' }}><Text>+</Text></TouchableOpacity>

        <Text style={{ width: 70, textAlign: 'center', fontSize: 50 }}>{num}</Text>

        <TouchableOpacity
          onPress={() => dispatch(decrement())}
          style={{ height: 50, width: 50, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center' }}><Text>-</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignUp
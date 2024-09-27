import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const screen1 = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingHorizontal:20}}>
                <View >
                <Image source={require('../assets/img/Container 17.png')} />
                </View>
                
                <View style={{justifyContent:'flex-start',alignItems:'flex-start'}}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Boost Productivity</Text>
                    <Text style={{color:'grey'}}>Simplify tasks, boost productivity</Text>
                </View>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderRadius:10,backgroundColor:'#248282',paddingVertical:10,marginTop:20}}
                    onPress={()=>{navigation.navigate("Screen2")}}
                >
                    <Text style={{color:'white'}}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingVertical:10}}
                onPress={()=>{navigation.navigate("Screen3")}}
                >
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default screen1
import { View, Text, ScrollView ,Image,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { CheckBox, TextInput } from 'react-native-web'

const users=[];
const screen2 = ({ navigation }) => {
    
    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');

    
    const handleSignUp=()=>{
        users.push({email,pwd});
        navigation.navigate("Screen3", { users });
        console.log(users)
    }
  return (
    <ScrollView>
        <View style={{flex:1}}>
            <View style={{paddingTop:100,paddingLeft:150,}}> 
                <Image source={require('../assets/img/Image 19.png')}/>
            </View>
        </View>
        <View style={{alignContent:'center',justifyContent:'center',paddingLeft:100,paddingTop:10}}>
            <Text style={{fontSize:25,fontWeight:'bold'}}>Nice to see you!</Text>
            <Text style={{paddingLeft:25}}>Create your account</Text>
        </View>
        <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,marginTop:15,marginHorizontal:20,paddingVertical:5}}>
            <Image source={require('../assets/img/codicon_account.png')} style={{height:25,width:25}}/>
            <TextInput style={{paddingLeft:5,flex:1}} placeholder='Enter your user name'
                
            />
        </View>
        <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,marginTop:15,marginHorizontal:20,paddingVertical:5}}>
            <Image source={require('../assets/img/Vector.png')} style={{height:25,width:25}}/>
            <TextInput style={{paddingLeft:5,flex:1}} placeholder='Enter your email address'
                value={email} onChangeText={setEmail}
            />
        </View>
        <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,marginTop:15,marginHorizontal:20,paddingVertical:5}}>
            <Image source={require('../assets/img/lock.png')} style={{height:25,width:25}}/>
            <TextInput style={{paddingLeft:5}} placeholder='Enter your password'
                secureTextEntry={true} value={pwd} onChangeText={setPwd}
            
            />
            <Image source={require('../assets/img/eye.png')} style={{height:25,width:25,marginLeft:120}}/>
        </View>
        <View style={{flexDirection:'row',marginLeft:20,marginTop:20}}>
            <CheckBox/>
            <Text style={{marginLeft:5}}>I agree with </Text>
            <Text style={{color:'#248282'}}>Tems & Conditions</Text>
        </View>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderRadius:10,color:'white',backgroundColor:'#248282',paddingVertical:10,marginTop:20,marginHorizontal:20}}
        onPress={handleSignUp}
        >
                    <Text style={{color:'white'}}>Contiunue</Text>
                </TouchableOpacity>
    </ScrollView>
  )
}

export default screen2
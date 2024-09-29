import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Toast from 'react-native-toast-message';
const sampleUsers = [
    { email: 'user1', pwd: '123' },
    { email: 'user2', pwd: '123' },
]
const screen3 = ({ route, navigation }) => {
    const { users = sampleUsers } = route.params || {};
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPwd, setLoginPwd] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleLogin = () => {

        const check = users && users.some(user => user.email === loginEmail && user.pwd === loginPwd);
        if (check) {
            navigation.navigate("Screen4");
        }
        else {
            Toast.show({
                type: 'error',
                text1: 'Thông báo',
                text2: 'Sai email hoặc mật khẩu',
            });
        }

    }
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View >
                    <Image style={{ width: '100%' }} source={require('../assets/img/Image 20.png')} />
                </View>
                <View style={{ paddingLeft: 20, paddingTop: 10 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome!</Text>
                </View>
                <Text style={{ marginLeft: 20, marginTop: 40, fontWeight: 'bold' }}>Email</Text>
                <View style={{ flexDirection: 'row', borderRadius: 10, marginTop: 5, marginHorizontal: 20, paddingVertical: 5, backgroundColor: '#C0C0C0' }}>
                    <Image source={require('../assets/img/Vector.png')} style={{ height: 23, width: 26, marginLeft: 5 }} />
                    <TextInput style={{ paddingLeft: 5, flex: 1 }} placeholder='Enter your email address'
                        value={loginEmail} onChangeText={setLoginEmail}
                    />
                </View>
                <Text style={{ marginLeft: 20, marginTop: 15, fontWeight: 'bold' }}>Password</Text>
                <View style={{ flexDirection: 'row', borderRadius: 10, marginTop: 5, marginHorizontal: 20, paddingVertical: 5, backgroundColor: '#C0C0C0' }}>
                    <Image source={require('../assets/img/lock.png')} style={{ height: 25, width: 25, marginLeft: 5 }} />
                    <TextInput secureTextEntry={!isPasswordVisible} style={{ paddingLeft: 5 }} placeholder='Enter your password'
                        value={loginPwd} onChangeText={setLoginPwd}
                    />
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Image source={require('../assets/img/eye.png')} style={{ height: 25, width: 25, marginLeft: 120 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 10, color: 'white', backgroundColor: '#248282', paddingVertical: 10, marginTop: 60, marginHorizontal: 20 }}
                    onPress={handleLogin}
                >
                    <Text style={{ color: 'white' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default screen3
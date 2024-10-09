
import { StyleSheet,TouchableOpacity,Text } from 'react-native';
import Screen1 from './component/screen1'
import Screen2 from './component/screen2'
import Screen3 from './component/screen3'
import Screen4 from './component/screen4'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen1' >
        <Stack.Screen name='Screen1' component={Screen1} options={{ headerShown: false }}/>
        <Stack.Screen name='Screen2' component={Screen2} options={{ headerTitle: ''}} />
        <Stack.Screen name='Screen3' component={Screen3} options={{ headerTitle: ''}} />
        <Stack.Screen name='Screen4'
          component={Screen4}
          options={{ headerTitle: 'Product Name'}}
           />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/pages/LoginPage';
import RegistroPage from './src/pages/Registro';
import SenhaPage from './src/pages/Senha';
import Telainicial from './src/pages/telainicial';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginPage}/>
        <Stack.Screen name='RegistroPage' component={RegistroPage}/>
        <Stack.Screen name='SenhaPage' component={SenhaPage}/>
        <Stack.Screen name='Telainicial' component={Telainicial}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
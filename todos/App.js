import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/home';
import Todos from './pages/todos';
import Notes from './pages/notes';

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: '#B52',  //orange
    background: '#975',
    card: '#753A',
    text: '#000',
    border: '#000',
    notification: '#000'
  }
}

const App = () => {
  return(
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home} 
          options={{
            title: "Welcome!", 
            headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Todos" component={Todos} />
        <Stack.Screen name="Notes" component={Notes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
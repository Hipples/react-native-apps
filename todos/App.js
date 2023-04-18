import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TodosScreen from './pages/todos';

const Stack = createNativeStackNavigator();

const App = () => {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="todos" component={TodosScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default App;
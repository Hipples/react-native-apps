import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home</Text>
    <Button onPress={() => navigation.navigate('Todos')} title="Todos"/>
  </View>
);

export default Home;
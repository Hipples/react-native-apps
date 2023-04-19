import { View, Button } from 'react-native';

import Heading from '../components/home/heading'

const Home = ({ navigation }) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Heading />
    <Button onPress={() => navigation.navigate('Todos')} title="Todos"/>
    <Button onPress={() => navigation.navigate('Notes')} title="Notes" />
  </View>
);

export default Home;
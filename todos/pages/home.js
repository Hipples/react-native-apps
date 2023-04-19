import { View, StyleSheet } from 'react-native';

import Heading from '../components/home/heading';
import MenuButton from '../components/home/menu-button';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Heading />
    <MenuButton navigation={navigation} Page='Todos' />
    <MenuButton navigation={navigation} Page="Notes" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
  }
})

export default Home;
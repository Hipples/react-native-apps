import { View, StyleSheet } from 'react-native';

import Heading from '../components/home/heading';
import NavButton from '../components/common/nav-button';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Heading />
    <NavButton navigation={navigation} Page='Todos' />
    <NavButton navigation={navigation} Page="Notes" />
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
import { View, ImageBackground, StyleSheet } from 'react-native';

import Heading from '../components/home/heading';
import MenuButton from '../components/home/menu-button';

const background = require('../assets/background-home.jpg')

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground source={background} resizeMode='cover' style={styles.image} >
      <Heading />
      <MenuButton navigation={navigation} Page='Todos' />
      <MenuButton navigation={navigation} Page="Notes" />
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    height: "100%",
    width: "100%"

  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: 'center',
  }
})

export default Home;
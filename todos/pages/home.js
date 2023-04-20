import { View, ImageBackground, StyleSheet } from 'react-native';

import Heading from '../components/home/heading';
import MenuButton from '../components/home/menu-button';

const image = { uri: require('../assets/background-home.jpg')}

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode='cover' style={styles.image} >
      <Heading />
      <MenuButton navigation={navigation} Page='Todos' />
      <MenuButton navigation={navigation} Page="Notes" />
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home;
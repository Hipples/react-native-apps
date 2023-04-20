import { View, ImageBackground, StyleSheet } from 'react-native';

import images from '../constants/images';
import Heading from '../components/home/heading';
import MenuButton from '../components/home/menu-button';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground source={images.homeBackground} resizeMode='cover' style={styles.image} >
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
    alignSelf: 'center'

  },
  image: {
    flex: 1,
    height: 700,
    width: 800,
    alignItems: 'center',
  }
})

export default Home;
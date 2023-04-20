import { View, ImageBackground, StyleSheet } from 'react-native';

import Heading from '../components/home/heading';
import MainMenu from '../components/home/main-menu';

const background = require('../assets/background-home.jpg');
const Home = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground source={background} resizeMode='cover' style={styles.image} >
      <Heading />
      <MainMenu navigation={navigation}/>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: "100%",
  },
  image: {
    height: "100%",
    alignItems: 'center',
  }
})

export default Home;
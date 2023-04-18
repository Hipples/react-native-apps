import { ScrollView, View, Text, Button } from 'react-native';

import { noteColors, sizes } from '.././constants/theme';
import Heading from '../components/notes/heading';

const Notes = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.content}>
      <Heading />
      <Button onPress={() => navigation.navigate('Home')} title="Home"/>
    </View>
  </ScrollView>
);

const styles = {
  container: {
    flex: 1,
    backgroundColor: noteColors.primary
  },
  content: {
    flex: 1,
    paddingTop: sizes.xxlarge
  },

}

export default Notes;
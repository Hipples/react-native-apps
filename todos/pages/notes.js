import { ScrollView, View } from 'react-native';

import Heading from '../components/notes/heading';

const Notes = ({ }) => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.content}>
      <Heading />
    </View>
  </ScrollView>
);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7'
  },
  content: {
    flex: 1,
    paddingTop: 50
  }
}

export default Notes;
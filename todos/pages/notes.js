import { View, Text, Button } from 'react-native';

const Notes = ({ navigation }) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Notes</Text>
    <Button onPress={() => navigation.navigate('Home')} title="Home"/>
  </View>
);

export default Notes;
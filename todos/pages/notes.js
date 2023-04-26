import { useState } from 'react';
import { ScrollView, View } from 'react-native';

import Heading from '../components/notes/heading';
import Input from '../components/notes/input';

let noteIndex = 1;

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const submitNote = (text) => {
    const note = {id: noteIndex++, message: text}
    setNotes([...notes, note]);
    console.log(notes);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Heading />
        <Input 
          onSubmit={submitNote} />
      </View>
    </ScrollView>
  );
}

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
import { useReducer } from 'react';
import { ScrollView, View } from 'react-native';

import { 
  notesReducer, 
  actionCreators, 
  initialState } from '../constants/notes/notes-reducer';

import Heading from '../components/notes/heading';
import Input from '../components/notes/input';
import NoteList from '../components/notes/note-list';

const Notes = () => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Heading />
        <Input 
          placeholder={"Type a note, the press submit or hit enter!"}
          onSubmit={(title) => dispatch(actionCreators.add(title))} />
        <NoteList notes={state.notes} />
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
import { useState, useReducer } from 'react';
import { View, Text, TextInput, FlatList,
  TouchableOpacity, StyleSheet } from 'react-native'

const randomId = () => Math.random().toString()
const createItem = (title) => ({ id: randomId(), title })

const types = {
  ADD: 'add',
  REMOVE: 'remove'
}

const actionCreators = {
  add: (title) => ({ type: types.ADD, payload: createItem(title) }),
  remove: (id) => ({ type: types.REMOVE, payload: id })
}

const initialState = {
  items: [
    createItem('')
]}

function reducer(state, action) {
  switch (action.type) {
    case types.ADD:
      return { ...state, items: [...state.items, action.payload] }
    case types.REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      }
  }
}

//title component
const Title = ({ children }) => {
  return (
    <View style={styles.titleHeader}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  )
}

//input component
const Input = ({ placeholder, onSubmitEditing }) => {
  const [text, setText] = useState('')

  return (
    <TextInput
      style={styles.input}
      value={text}
      placeholder={placeholder}
      onChangeText={(value) => setText(value)}
      onSubmitEditing={() => {
        if (!text) return // Don't submit if empty
        onSubmitEditing(text)
        setText('')
      }}
    />
  )
}

//list component
const List = ({ items, onPressItem }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[styles.item, { backgroundColor: itemColor(index) }]}
          onPress={() => onPressItem(item.id)}
        >
          <Text style={styles.itemTitle}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

function itemColor(index) {
  return `rgba(59, 108, 212, ${Math.max(1 - index / 10, 0.4)})`
}


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <View>
      <Title>To-Do List</Title>
      <Input
        placeholder={'Type a todo, then hit enter!'}
        onSubmitEditing={(title) => dispatch(actionCreators.add(title))}
      />
      <List
        items={state.items}
        onPressItem={(id) => dispatch(actionCreators.remove(id))}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
  item: {
    marginBottom: 1,
    padding: 15,
  },
  itemTitle: {
    color: 'white',
  },
  titleHeader: {
    backgroundColor: 'rgb(59, 108, 212)',
    padding: 15,
  },
  titleText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
})

export default App;
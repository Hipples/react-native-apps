//set random id for each created note
const randomId = () => Math.random().toString()
const createNote = (note) => ({ id: randomId(), note })
const actions = {
  ADD: 'add',
  REMOVE: 'remove'
}

// arrow functions as methods of actionCreators object
export const actionCreators = {
  add: (note) => ({ type: actions.ADD, payload: createNote(note) }),
  remove: (id) => ({ type: actions.REMOVE, payload: id })
}

// provides initial state of notes list (empty array)
export const initialState = {
  notes: []
}

// reducer function to control adding and removing notes from list
export function NotesReducer(state, action) {
  switch (action.type) {
    case actions.ADD:
      return { ...state, notes: [...state.notes, action.payload] }
    case actions.REMOVE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload)
      }
    default:
        return state;
  }
}
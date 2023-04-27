import { View, Text, FlatList, StyleSheet } from "react-native";

const NoteList = ({ notes }) => (
    <FlatList
        data={notes}
        keyExtractor={(note) => note.id}
        renderItem={({note}) => (
            <View style={styles.noteCard}>
                <Text style={styles.noteText}>{note.title}</Text>
            </View>
        )}
    />
);

const styles = StyleSheet.create({
    noteCard: {
        justifyContent: 'flex-start',
        borderWidth: 1
    },
    noteText: {
        fontSize: 18
    }
});

export default NoteList;
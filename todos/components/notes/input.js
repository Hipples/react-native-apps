import { View, TextInput, StyleSheet } from 'react-native';

import SubmitButton from '../common/submit-button';

const Input = ({ note, setNote }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    value={note}
                    style={styles.input}
                    placeholder="Want to leave a sticky note?"
                    placeholderTextColor="#666"
                    selectionColor="#CACACA"
                    onChangeText={setNote} />       
            </View>
            <View style={styles.submitButton}><SubmitButton submit={note} /></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
    inputContainer: {
        height: 325,
        borderWidth: 2.5,
        borderColor: 'gray',
        margin:30,
        backgroundColor: 'yellow',
        elevation: 25,
        borderBottomRightRadius: 150
    },
    input: {
        padding: 10
    },
    submitButton: {
        alignSelf: 'flex-end'
    }
});

export default Input;
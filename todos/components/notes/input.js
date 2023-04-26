import { View, TextInput, StyleSheet } from 'react-native';

import SubmitButton from '../common/submit-button';

const Input = ( onSubmit ) => {
    const [ text, setText ] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    value={text}
                    style={styles.input}
                    placeholder="Want to leave a sticky note?"
                    placeholderTextColor="#666"
                    selectionColor="#CACACA"
                    onChangeText={setText} />       
            </View>
            <SubmitButton submit={onSubmit} />
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
    }
});

export default Input;
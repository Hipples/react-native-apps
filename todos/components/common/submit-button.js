import { View, Text, Pressable, StyleSheet } from 'react-native';

const SubmitButton = ({ submit }) => (
    <View style={styles.container}>
        <Pressable 
            onPress={submit} 
            style={({pressed}) => [
                styles.button,
                pressed ? styles.pressed : styles.default]} >
            <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        margin: 10,       
    },
    button: {
        borderWidth: 4,
        padding: 20,
        borderRadius: 360
    },
    default: {
        backgroundColor: '#00FF00'
    },
    pressed: {
        backgroundColor: '#666'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default SubmitButton;
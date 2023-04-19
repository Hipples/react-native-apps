import { View, Text, Pressable, StyleSheet } from 'react-native';

const SubmitButton = ({ submit }) => (
    <View style={styles.container}>
        <Pressable onPress={submit} style={({pressed}) => [
            styles.button,
            pressed ? styles.pressed : styles.default
        ]}>
            <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    container: {},
    button: {},
    default: {},
    pressed: {},
    buttonText: {}
});

export default SubmitButton;
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors, sizes } from '../../constants/theme';

const Button = ({ submitTodo }) => (
    <View style={styles.buttonContainer}>
        <Pressable
            onPress={submitTodo}
            style={({pressed}) => [
                styles.button, 
                pressed ? styles.pressed : styles.default]}              
        >
                <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        marginVertical: sizes.small,
        width: "55%",
        marginRight: sizes.medium,
        alignSelf: 'flex-end'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: sizes.xxlarge,
        elevation: 3
    },
    pressed: {
        backgroundColor: colors.lightGray
    },
    default: {
        backgroundColor: colors.white
    },
    buttonText: {
        fontWeight: 600,
        color: colors.gray
    }
})

export default Button;
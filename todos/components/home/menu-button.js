import { View, Text, Pressable, StyleSheet } from 'react-native';

//click to change screens
const MenuButton = ({ navigation, Page }) => (
    <View style={styles.container}>
        <Pressable
        onPress={() => navigation.navigate(Page)} 
        style={({pressed}) => [
            styles.button, 
            pressed ? styles.pressed : styles.default]}              
    >
            <Text style={styles.buttonText}>{"my"}{ Page }</Text>
        </Pressable>
    </View> 
);

//menu button styles 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        width: "75%",
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "50%",
        borderWidth: 1.5,
        borderRadius: 10,
        elevation: 10
    },
    pressed: {
        backgroundColor: 'gray'
    },
    default: {
        backgroundColor: 'white'
    },
    buttonText: {
        fontSize: 20,
    }
})

export default MenuButton;
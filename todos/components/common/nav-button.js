import { View, Text, Pressable, StyleSheet } from 'react-native';



const NavButton = ({ navigation, Page }) => (
    <View style={styles.container}>
        <Pressable
        onPress={() => navigation.navigate(Page)} 
        style={({pressed}) => [
            styles.button, 
            pressed ? styles.pressed : styles.default]}              
    >
            <Text style={styles.buttonText}>{ Page }</Text>
        </Pressable>
    </View> 
);

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
        height: 50,
        borderColor: 'black',
        borderWidth: 3
    },
    pressed: {
        backgroundColor: 'gray'
    },
    default: {
        backgroundColor: 'white'
    },
    buttonText: {
        fontWeight: 600,
        color: "#787878",
        fontSize: 30,
    }
})

export default NavButton;
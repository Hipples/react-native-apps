import { View, Text, Pressable, StyleSheet } from 'react-native';

//requires navigation function, what page we are going to, and a button title
const NavButton = ({ navigation, Page, Title }) => (
    <Pressable 
        style={styles.container}
        onPress={() => navigation.navigate({Page})} >
        <View style={styles.button}>
            <Text style={styles.buttonText}>
                { Title }
            </Text>
        </View>
    </Pressable>
);

const styles = StyleSheet.create({
    container: {},
    button: {},
    buttonText: {}
});

export default NavButton;
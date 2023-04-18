import { View, Text, Pressable, StyleSheet } from 'react-native';

const NavButton = ( {Title} ) => (
    <Pressable style={styles.container}>
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
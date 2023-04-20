import { View, StyleSheet } from 'react-native';

import MenuButton from './menu-button';

const MainMenu = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <MenuButton navigation={navigation} Page='Todos' />
            <MenuButton navigation={navigation} Page='Notes' />
            <MenuButton navigation={navigation} Page='Journal' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: "80%",
        marginBottom: 200,
        // borderWidth: 3, 
        // borderColor: 'white'
    }
});

export default MainMenu;
import { View, Text, StyleSheet } from 'react-native';

const Heading = () => (
    <View style={styles.header} >
        <Text style={styles.heading} adjustsFontSizeToFit={true} >
            todos++
        </Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        marginTop: 150
    },
    heading: {
        textAlign: 'center',
        fontSize: 75,
        fontWeight: "100",
        color: '#000',
        fontStyle: 'italic'
    }
});

export default Heading;
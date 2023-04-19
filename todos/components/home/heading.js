import { View, Text, StyleSheet } from 'react-native';

const Heading = () => (
    <View style={styles.header}>
        <Text style={styles.heading}>Todos {"\<"}<Text style={{fontStyle: 'italic'}}>Expanded</Text></Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        marginTop: 50
    },
    heading: {
        textAlign: 'center',
        fontSize: 80,
        fontWeight: "bold",
        color: '#69c'
    }
});

export default Heading;
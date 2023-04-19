import { View, Text, StyleSheet } from 'react-native';

const Heading = () => (
    <View style={styles.header}>
        <Text style={styles.heading}>TodosExpanded</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        marginTop: 80
    },
    heading: {
        textAlign: 'center',
        fontSize: 72,
        fontWeight: 100,
        color: '#A7B3C8'
    }
});

export default Heading;
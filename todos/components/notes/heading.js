import { View, Text, StyleSheet } from 'react-native';

import { noteColors, sizes } from '../../constants/theme';

const Heading = () => (
    <View style={styles.header}>
        <Text style={styles.heading}>Notes</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        marginTop: sizes.header
    },
    heading: {
        textAlign: 'center',
        fontSize: sizes.heading,
        color: noteColors.tertiary
    }
});

export default Heading;
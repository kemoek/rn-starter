import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
const greeting = 'v2 Hello there!';
const byeBye = <Text> 'Goodbye!' </Text>;

    return (
    <View>
        <Text style={styles.textStyle}> This is the components screen with style.</Text>
        <Text>Hello there!</Text>
        <Text>{greeting}</Text>
        {byeBye} 
        <Text style={styles.subHeaderStyle}>Subheader text.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;
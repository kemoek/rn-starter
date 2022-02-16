import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.parentStyle}>
            <Text style={styles.viewOneStyle}></Text>
            <Text style={styles.viewTwoStyle}></Text>
            <Text style={styles.viewThreeStyle}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        borderColor: 'black',
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    /*
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red'
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: 'stretch',
        //left: 10
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red'
    } */
    viewTwoStyle: {
        borderColor: 'black',
        height: 100,
        width: 100,
        backgroundColor: 'green',
        marginTop: 50
    },
    viewThreeStyle: {
        borderColor: 'black',
        height: 100,
        width: 100,
        backgroundColor: 'blue'
    },
});

export default BoxScreen;
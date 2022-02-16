import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {

    const friends = [
        {name: "Friend #1", age: 20},
        {name: "Friend #2", age: 30},
        {name: "Friend #3", age: 40},
        {name: "Friend #4", age: 15},
        {name: "Friend #5", age: 50},
        {name: "Friend #6", age: 40},
        {name: "Friend #7", age: 30}
    ];

    return (<FlatList
        //horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;

    }}
    />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    }
});

export default ListScreen;
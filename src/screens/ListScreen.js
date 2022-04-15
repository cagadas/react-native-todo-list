import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import ListContext from "../context/ListContext"

const ListScreen = ({ navigation }) => {
    const { data, getItemList } = useContext(ListContext)
    useEffect(() => {
        getItemList();
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                <FlatList data={data} keyExtras={(data) => data.id} renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text>{index + 1}</Text>
                                <Text> {item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Add')}>
                <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    addButton: {
        height: 50,
        width: 50,
        borderRadius: 50,
        bottom: 10,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#2e86de',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ListScreen
import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import ListContext from "../context/ListContext"

const ListScreen = ({ navigation }) => {
    const { data, getItemList, deleteItem } = useContext(ListContext)
    useEffect(() => {
        getItemList();
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <FlatList data={data} keyExtras={(data) => data.id} renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
                        <View style={[styles.main, styles.row]}>
                            <View style={styles.row}>
                                <Text >{index + 1}</Text>
                                <Image
                                    style={styles.image}
                                    source={{ uri: item.avatar }}
                                />
                                <Text style={{ marginLeft: 10 }}> {item.name}</Text>
                            </View>
                            <View style={styles.row}>
                                <TouchableOpacity style={[styles.arrowButtons, styles.upButton]}>
                                    <AntDesign name="up" size={20} color="green" />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.arrowButtons, styles.downButton]}>
                                    <AntDesign name="down" size={20} color="red" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deleteItem(item.id)}>
                                    <AntDesign name="delete" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }} />
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Add')}>
                <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5',
        backgroundColor: "white",
        justifyContent: 'space-between',
        padding: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 40,
        width: 15,
        marginHorizontal: 15
    },
    arrowButtons: {
        borderRadius: 50,
        borderWidth: 1,
        marginRight: 5,
    },
    upButton: {
        borderColor: 'green'
    },
    downButton: {
        borderColor: 'red'
    },
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
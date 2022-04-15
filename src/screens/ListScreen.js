import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const ListScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                <Text>List</Text>
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
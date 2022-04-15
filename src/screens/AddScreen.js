import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import ListContext from "../context/ListContext"

const AddScreen = () => {

    const { addItem } = useContext(ListContext)
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const [description, setDescription] = useState("")
    const [avatar, setAvatar] = useState("")
    let formObj = {
        name: name,
        job: job,
        description: description,
        avatar: avatar
    }
    return (
        <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
            <Text>Name Surname : </Text>
            <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} />
            <Text>Job Title : </Text>
            <TextInput style={styles.input} value={job} onChangeText={(text) => setJob(text)}/>
            <Text>About Him/Her : </Text>
            <TextInput style={styles.input} value={description} onChangeText={(text) => setDescription(text)}/>
            <Text>Image Link : </Text>
            <TextInput style={styles.input} value={avatar} onChangeText={(text) => setAvatar(text)}/>
            <Button title="Add Character" onPress={() => addItem(formObj)} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 5,
        height: 40,
        borderWidth: 1,
        borderColor: '#868686',
        borderRadius: 5,
        backgroundColor: 'white',
    }
})

export default AddScreen
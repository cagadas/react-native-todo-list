import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import ListContext from "../context/ListContext"

const AddScreen = ({ navigation }) => {

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
            <TextInput testID={"name"} style={[styles.input, styles.inputText]} value={name} onChangeText={(text) => setName(text)} />
            <Text>Job Title : </Text>
            <TextInput testID={"job"} style={[styles.input, styles.inputText]} value={job} onChangeText={(text) => setJob(text)} />
            <Text>About Him/Her : </Text>
            <TextInput testID={"description"} style={[styles.input, styles.inputArea]} value={description} onChangeText={(text) => setDescription(text)} />
            <Text>Image Link : </Text>
            <TextInput testID={"avatar"} style={[styles.input, styles.inputText]} value={avatar} onChangeText={(text) => setAvatar(text)} />
            <Button title="Add Character" onPress={() => { addItem(formObj); navigation.navigate('List') }} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: '#868686',
        borderRadius: 5,
        backgroundColor: 'white',
    },
    inputText: {
        height: 40,
    },
    inputArea: {
        height: 80
    }
})

export default AddScreen
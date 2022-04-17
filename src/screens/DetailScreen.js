import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import ListContext from "../context/ListContext"

const DetailScreen = ({ navigation }) => {
    const { data } = useContext(ListContext)
    const detail = data.find((t) => t.id === navigation.getParam('id'))
    return (
        <View style={styles.main}>
            <Image
                testID={"avatar"}
                style={styles.image}
                source={{ uri: detail.avatar }}
            />
            <Text style={[styles.text, styles.header]}>{detail.name}</Text>
            <Text style={[styles.text, styles.subHeader]}>{detail.job}</Text>
            <Text style={[styles.text, styles.paragraph]}>{detail.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 15
    },
    image: {
        height: 300,
        resizeMode: "contain",
        marginVertical: 20
    },
    text: {
        alignSelf: "center",
    },
    header: {
        fontWeight: "bold",
        fontSize: 28
    },
    subHeader: {
        fontWeight: "bold",
        fontSize: 18,
        color: '#888888'
    },
    paragraph: {
        marginTop: 15,
        color: '#868686'
    }
})

export default DetailScreen
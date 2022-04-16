import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from '../util/axios';

const ListContext = React.createContext();

export const ListProvider = ({ children }) => {

    const [itemList, setItemList] = useState([])

    const checkStore = () => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem('list').then(res => {
                if (res) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            }).catch(err => {
                reject(err)
            })
        })

    }

    const getItemList = async () => {
        let res = []
        try {
            if (await checkStore()) {
                res = await AsyncStorage.getItem('list')
                res = JSON.parse(res)
            } else {
                await axios.get("/simpsons").then(response => {
                    res = response.data
                })
                await AsyncStorage.setItem('list', JSON.stringify(res))
            }
        } catch (err) {
            console.log(err)
        }
        setItemList(res)
    }

    const addItem = async (item) => {
        const maxID = itemList.reduce((a, b) => {
            return (a.id > b.id) ? a.id : b.id
        })
        const newList = [...itemList, { ...item, id: `${parseInt(maxID) + 1}` }]
        setItemList(newList);
        await AsyncStorage.setItem('list', JSON.stringify(newList))
    }

    const changeItemPosition = async (index, d) => {
        const order = d === "up" && index !== 0 ? index - 1 :
            d === "down" && itemList.length > index ? index + 1 : index
        const item = itemList.splice(index, 1)[0];
        itemList.splice(order, 0, item)
        const changedList = itemList
        await AsyncStorage.setItem('list', JSON.stringify(changedList))
        setItemList([...changedList])
    }

    const deleteItem = async (id) => {
        const filterList = itemList.filter(t => t.id !== id)
        await AsyncStorage.setItem('list', JSON.stringify(filterList))
        setItemList([...filterList])
    }

    return <ListContext.Provider value={{
        data: itemList,
        getItemList,
        addItem,
        deleteItem,
        changeItemPosition
    }}>
        {children}
    </ListContext.Provider>
}


export default ListContext;

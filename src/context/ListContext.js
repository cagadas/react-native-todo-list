import React, { useState } from 'react';
import axios from '../util/axios';

const ListContext = React.createContext();

export const ListProvider = ({ children }) => {

    const [itemList, setItemList] = useState([])

    const getItemList = async () => {
        const res = await axios.get("/simpsons");
        setItemList(res.data)
    }

    const addItem = (item) => {
        const maxID = itemList.reduce((a, b) => {
            return (a.id > b.id) ? a.id : b.id
        })
        setItemList([...itemList, { ...item, id: `${parseInt(maxID) + 1}` }]);
    }

    const deleteItem = (id) => {
        const filterList = itemList.filter(t => t.id !== id)
        setItemList([...filterList])
    }

    return <ListContext.Provider value={{ data: itemList, getItemList, addItem, deleteItem }}>
        {children}
    </ListContext.Provider>
}


export default ListContext;

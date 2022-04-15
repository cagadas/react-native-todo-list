import React, { useState } from 'react';
import axios from '../util/axios';

const ListContext = React.createContext();

export const ListProvider = ({ children }) => {

    const [itemList, setItemList] = useState([])
    const getItemList = async () => {
        const res = await axios.get("/simpsons");
        setItemList(res.data)
        console.log(res.data)
    }

    return <ListContext.Provider value={{ data: itemList, getItemList }}>
        {children}
    </ListContext.Provider>
}


export default ListContext;

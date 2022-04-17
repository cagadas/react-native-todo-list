import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Add from '../src/screens/AddScreen';
import { ListProvider, addItem } from "../src/context/ListContext"

const navigation = {
    navigate: jest.fn()
}

describe("Adding item", () => {

    const screen = render(<ListProvider value={{ addItem }}>
        <Add navigation={navigation} />
    </ListProvider>)

    test('Add item to list', () => {
        fireEvent.changeText(screen.getByTestId("name"), "Homer");
        fireEvent.changeText(screen.getByTestId("job"), "Nuclear Safety Inspector");
        fireEvent.changeText(screen.getByTestId("description"), "Homer Jay Simpson");
        fireEvent.changeText(screen.getByTestId("avatar"), "url");
        fireEvent.press(screen.getByText("Add Character"));
    });
    
    test('Navigate to listscreen', () => {
        expect(navigation.navigate).toHaveBeenCalledTimes(1)
    });
})
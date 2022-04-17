import React from 'react';
import { render } from '@testing-library/react-native';

import Detail from '../src/screens/DetailScreen';
import ListContext from "../src/context/ListContext"

const navigation = {
  getParam: () => {
    return id = "1"
  },
}

it("Detail page filled", () => {

  const data = [{
    id: "1",
    avatar: "url",
    name: "Homer Simpson",
    job: "Nuclear Safety Inspector",
    description: "Homer Jay Simpson"
  }];

  const screen = render(<ListContext.Provider value={{ data: data }}>
    <Detail navigation={navigation} />
  </ListContext.Provider>)

  const image = screen.getByTestId('avatar')
  expect(image.props.source.uri).toBe("url")

  screen.getByText("Homer Simpson")
  screen.getByText("Nuclear Safety Inspector")
  screen.getByText("Homer Jay Simpson")
  
})
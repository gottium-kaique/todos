import React from "react"
import { Wrapper } from "./src/styles"
import TodoPage from "./src/TodoPage"
import { StatusBar } from "react-native"

export default () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#00ccaa" translucent />
    <Wrapper>
      <TodoPage/>
    </Wrapper>
  </>
)
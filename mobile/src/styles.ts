import styled from "styled-components/native"
import { Platform, StatusBar } from "react-native"

const { currentHeight } = StatusBar

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === "android" ? currentHeight : 0}px;
`
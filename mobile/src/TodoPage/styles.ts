import styled from "styled-components/native"
import { TouchableRipple } from "react-native-paper"

export const Header = styled.View`
  background: #00ccaa;
  justify-content: center;
  height: 50px;
  padding: 0 20px;
  elevation: 5;
`

export const HeaderTitle = styled.Text`
  font-size: 20px;
`

export const Title = styled.Text`
  font-size: 23px;
  margin-bottom: 10px;
`

export const Content = styled.View`
  padding: 20px 30px;
`

export const TodoItem = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TodoName = styled.Text`
  margin-right: 10px;
  font-size: 20px;
`

export const RemoveTodo = styled.TouchableWithoutFeedback``

export const PopUp = styled.View`
  background: #00ccaa;
  elevation: 5;
  padding: 20px 35px 20px 35px;
  border-radius: 12px;
  max-width: 235px;
`

export const PopUpTitle = styled.Text`
  font-size: 22px;
  margin-top: 15px;
`

export const BoxPopUp = styled.Modal`
  justify-content: center;
  align-items: center;
`

export const PopUpBody = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#fff",
})`
  padding: 12px 20px;
  border-bottom-width: 1px;
  border-color: #fff;
  margin-bottom: 10px;
  color: #fff;
  font-size: 15px;
`

export const Button = styled(TouchableRipple)`
  padding: 12px 20px;
  background: #00ccaa;
`

export const OpenPopUp = styled.TouchableOpacity`
`

export const ClosePopUp = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const Wrapper = styled.ScrollView`
  flex: 1;
`
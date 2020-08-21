import React, { useState, useEffect } from "react"

import { 
  Header, 
  HeaderTitle, 
  Title,
  Content,
  RemoveTodo,
  TodoItem,
  TodoName,
  PopUp,
  BoxPopUp,
  PopUpTitle,
  PopUpBody,
  Input,
  Button,
  OpenPopUp,
  ClosePopUp,
  Wrapper,
} from "./styles"

import { MaterialIcons as Icon } from "@expo/vector-icons"
import { AsyncStorage, Text, useColorScheme } from "react-native"

const TodoPage = () => {
  const [todos, setTodos] = useState<any[]>([])
  const [input, setInput] = useState<string>("")
  const [visible, setVisible] = useState(false)

  const Theme = useColorScheme() === "dark" ? "#334" : "#fff"
  const ThemeText = Theme === "#334" ? "#fff" : "#000"

  useEffect(() => {
    (async() => {
      let data = await AsyncStorage.getItem("todos")

      if (data !== null) {
        setTodos(JSON.parse(data))
      }
      
    })()
  }, [])

  useEffect(() => {
    saveTodos()
  }, [todos])

  async function saveTodos() {
    await AsyncStorage.setItem("todos", JSON.stringify(todos)) 
  }

  function addTodo() {
    setTodos(todo => [...todo, input.trim()])
  }

  function removeTodo(id: number) {
    setTodos(todos.filter((item, index) => index !== id))
  }

  return (
    <Wrapper stickyHeaderIndices={[0]}
      style={{backgroundColor: Theme}}
    >
      <Header>
        <HeaderTitle>
          Tarefas
        </HeaderTitle>
        <OpenPopUp 
          style={{position: "absolute", right: 20}} 
          onPress={ () => setVisible(true) }
        >
          <Icon 
            name="add" 
            size={25} 
          />
        </OpenPopUp>
      </Header>
      <Content>
        <Title style={{color: ThemeText}}>Liste suas Tarefas</Title>
        {
          todos.map((item, index) => (
            <TodoItem key={index}>
              <TodoName key={index} style={{color: ThemeText}}>
                {item}
              </TodoName>
              <RemoveTodo 
                onPress={() => removeTodo(index)}
              >
                <Icon color={ ThemeText } name="close" size={16} />
              </RemoveTodo>
            </TodoItem>
          ))
        }
      </Content>
      <BoxPopUp
        transparent={true}
        visible={visible}
      >
        <PopUpBody>
          <PopUp>
            <ClosePopUp onPress={() => setVisible(false)}>
              <Icon 
                name="close" 
                size={25} 
                color="#000"
              />
            </ClosePopUp>
            <PopUpTitle>
              Adicione Tarefas
            </PopUpTitle>            
            <Input
              placeholder="Sua tarefa"
              onChangeText={ setInput }
            />
            <Button 
              onPress={ addTodo } 
            >
              <Text>
                ADICIONAR TODO
              </Text>
            </Button>
          </PopUp>
        </PopUpBody>
      </BoxPopUp>
    </Wrapper>
  )
}

export default TodoPage
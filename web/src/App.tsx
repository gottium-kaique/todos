import React, { useState, ChangeEvent, useEffect } from "react"
import "./css/styles.css"

const App = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [input, setInput] = useState<string>("")

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }

  useEffect(() => {
    const todosData = localStorage.getItem("todos")
    if (todosData !== null) {
      setTodos(JSON.parse(todosData))
    }
  }, [])

  useEffect(() => {
    saveAtLocalStorage()
  }, [todos])

  function saveAtLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  function addTodo() {
    setTodos(todo => [...todo, input])
  }

  function removeTodo(id: number) {
    setTodos(todos.filter((todo, index) => index !== id))
  }

  return (
    <div className="app">
      <h1>Todos</h1>
      <h3>Adicione Todos a sua lista.</h3>
      <strong>Todo: </strong>
      <input 
        type="text" 
        placeholder="Digite seu todo" 
        onChange={ handleChange }
        onKeyPress={ event => event.which === 13 && addTodo() }
        style={{marginBottom: todos.length && 12,}}
      />
      <ul>
        {
          todos.map((item, index) => (
            <li key={index}>
              {item}
              <a 
                onClick={ () => removeTodo(index) }
              >
                  x
              </a>
            </li>
          ))
        }
      </ul>
      <br/>
      <button 
        type="submit" 
        onClick={ addTodo } 
        style={{marginTop: todos.length && 12,}}
      >
        ADICIONAR TODO
      </button>
    </div>
  )
}

export default App
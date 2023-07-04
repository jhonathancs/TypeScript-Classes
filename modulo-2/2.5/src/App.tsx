import {useState} from 'react'

import './App.css'
import Button from './components/button'
import Input from './components/input'

function App() {
  const [count, setcount] = useState(1)

  function handleClick1() {
    setcount(count+1)
  }

  function handleClick2() {
    setcount(count-1)
  }

  return (
    <>
      <div>
      <Button oneClick={() => handleClick1(setcount)}>
      button Somar
      </Button>
      <Button oneClick={() => handleClick2(setcount)}>
      button Subtrair
      </Button><br /><br />
      TOTAL = {count}
      </div>
      <Input />
    </>
  )
}

export default App

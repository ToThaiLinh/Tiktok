import {useState} from 'react'

function App() {

  const [counter, setCounter] = useState(1);
  const handleIncrease = () => {
    setCounter(counter + 1);
  }
  const handleDecrease = () => {
    setCounter(counter - 1);
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increate</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
  
}

export default App;

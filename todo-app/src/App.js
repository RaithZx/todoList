import React, {useState, useCallback} from 'react';

const App = () => {
  const [name , setName] = useState('Yuri');
  const onNameChange = useCallback((event) => {
    console.log(event.target.value)
    setName(event.target.value)
  },[])
  return (
    <div>
      <form>
        <label>Enter your name:</label>
        <input value={name} onChange={onNameChange}/>
      </form>
      <div>
        <h1>Hello {name}</h1>
      </div>
    </div>
  );
}

export default App;

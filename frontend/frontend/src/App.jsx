import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// add the beginning of your app entry
import 'vite/modulepreload-polyfill'

function App() {
  const [count, setCount] = useState(0);
  const reactLogo ="/static/react.svg"
  const viteLogo ="/static/vite.svg"

  return (
    <>
      <div>
        <a  target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a  target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Django</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App

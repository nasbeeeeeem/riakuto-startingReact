import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Patty"
  const greet = (name: string) => <p>Hello, {name || "Guest"}!</p>
  const n = Math.floor(Math.random() * 10); //0~9のランダムな値を生成
  const threshold = 5;
  const list = ['Patty', 'Rolley', 'Bobby'];
  const [count, setCount] = useState(0)

  return (
    <>
      <div>{greet(name)}</div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {n > threshold && (<p>{n}は{threshold}よりも大きい値です</p>)}
      {n > threshold || (<p>{n}は{threshold}以下の値です</p>)}
      <p>{n}は{n % 2 === 0 ? '偶数' : '奇数'}です</p>
      <ul>
        {list.map((name) => (
          <li>Hello, {name}!</li>
        ))}
      </ul>
      {/* 
        複数行に
        渡るコメント
      */}
    </>
  )
}

export default App

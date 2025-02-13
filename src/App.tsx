import { ReactNode } from 'react'
import './App.css'

interface AppProp {
  children? : ReactNode
}

function App(prop: AppProp) {
  return (
    <>
      { prop.children }
    </>
  )
}

export default App

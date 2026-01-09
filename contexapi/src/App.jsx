import UserContextProvider from './context/UserContexProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

function App() {

  return (
    <>
     <UserContextProvider>
      <h1>React with Chai || context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App

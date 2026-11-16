import './App.css'
import ProfileCard from './components/ProfileCard'
import ListRender from './components/ListRender'
import DayTwo from './components/DayTwo'
import LikeButton from './components/LikeButton'
import Login from './daythree/Login'
import Map from './daythree/Map'
import LiveName from './datfour/LiveName'
import RegForm from './datfour/RegForm'
import Eatly from './datfour/Eatly'
import User from './dayfive/User'
import ShopingCart from './dayfive/ShopingCart'
import Timer from "./daysix/Sec"
import LiveClock from './daysix/LiveClock'
import PersistentCount from './daysix/PersistentCount'
import DataAPI from './daysix/DataAPI'
import Api from './dayseven/Api'
import UserDirectory from './dayseven/UserDiscription'
import EatlyProducts from './dayseven/EatlyProducts'
import SearcchabaleProduct from './dayEight/SearcchabaleProduct'


function App() {

  return (
    <>
    {/* <h1>Aman Dagar</h1>
    <h2>Full-stack developer</h2>
    {15*4+10}
    <p>I am rebuilding my React skills!</p>

    <ProfileCard name='Aman Dagar' role='React Developer' experience='4 months of React experience'/> 
    <ProfileCard name='Rahul' role='Frontend Developer' experience='1 year of React experience'/> 
    <ListRender/> */}


     
    {/* <DayTwo/>

    <LikeButton/> */}

    {/* //day 3
    <Login/>
    <Map/> */}

    {/* //day 4
    <LiveName/>
    <RegForm/>
    <Eatly/> */}

    {/* {/* //day 5
    <User/> */}
    {/* <ShopingCart/> */}

      {/* //day 6
      <Timer/>
      <LiveClock/>
      <PersistentCount/>
      <DataAPI/> */}

      //day 7
      {/* <Api/> */}
      {/* <UserDirectory/>
      <EatlyProducts/> */}

      // day 8
      <SearcchabaleProduct/>

    </>
  )
}

export default App




// Challenge 1 — JSX basics
// Create an App component that displays:
// - Your name as an h1.
// - Your target role as an h2.
// - A calculation showing what 15 * 4 + 10 equals.
// - A paragraph displaying I am rebuilding my React skills!.
// Don't hardcode the result of the calculation. Let JavaScript calculate it.
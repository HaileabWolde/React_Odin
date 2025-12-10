import './App.css'
import Form from './components/Form'
import CV from './components/Cv'
import Display from './components/Display'
import { useState } from 'react'
function App() {
 const [personalInfo, setPersonalInfo] = useState({
  fullName: "",
  Email: "",
  PhoneNumber: "",
  Address: "",
 })
  return (
   <>
   <CV/>
  <Form
  personalInfo= {personalInfo}
  setPersonalInfo={setPersonalInfo}
  />
  <Display
  personalInfo={personalInfo}
  />
   </>
  )
}

export default App

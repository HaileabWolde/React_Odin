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
  const [educationexp, setEducationexp] = useState([]);
  const [personalexp, setPersonalexp] = useState([]);
   const [photoPreview, setPhotoPreview] = useState(null);
  return (
   <>
   <CV/>
  <Form
  personalInfo= {personalInfo}
  setPersonalInfo={setPersonalInfo}
  educationexp= {educationexp}
  setEducationexp = {setEducationexp}
  personalexp = {personalexp}
  setPersonalexp = {setPersonalexp}
  setPhotoPreview = {setPhotoPreview}
  />
  <Display
  personalInfo={personalInfo}
  educationexp= {educationexp}
  setEducationexp = {setEducationexp}
  personalexp= {personalexp}
  photoPreview = {photoPreview}
  setPhotoPreview = {setPhotoPreview}
  />
   </>
  )
}

export default App

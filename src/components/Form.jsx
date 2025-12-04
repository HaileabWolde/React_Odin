import { useState } from 'react';
import '../styles/Form.css'
import { FaGraduationCap, FaChevronDown, FaChevronUp,  FaSuitcase, FaTrash, FaPlus} from 'react-icons/fa';

import EducationForm from './Form/EducationForm';
import PersonalForm from './Form/PersonalForm.JSX';
function Form () {
    const [education, setEducation] = useState(true);
    const [experience, setExperience] = useState(true);
    const [educationexp, setEducationexp] = useState([]);
    const [personalexp, setPersonalexp] = useState([]);
    const handleEducation = ()=>{
        setEducation((prev)=> !prev)
    }
    const handleExerience = ()=>{
        setExperience((prev)=> !prev)
    }

    const addEducation = (event)=>{
        event.preventDefault();
        setEducationexp(prev=> [
            ...prev, {
                School: "",
                Degree: "",
                startDate: "",
                endDate: "",
                id: crypto.randomUUID()
            }
        ])
    }
    const addExperience = (event)=> {
         event.preventDefault();
         console.log(personalexp)
         setPersonalexp(prev=> [
            ...prev,{
                Company: "",
                Position: "",
                startDate: "",
                endDate: "",
                Description: "",
                id: crypto.randomUUID()
            }

         ])
    }
    return (
        <div className="Form">
            <div className='clearResume'>
                    <span>
                    <FaTrash color='red' fontSize={20}/>
                    Clear Resume
                    </span>
                    <p>Load an Example</p>
            </div>
            <form className='personalDetails'>
                   <h1>Personal Details</h1>
                   <label for="fullName">
                    FullName
                   </label>
                   <input type='text' placeholder='Enter Your Full Name'>
                   </input>
                   <label for="Email">
                    Email
                   </label>
                   <input type='email' placeholder='you@example.com'>
                   </input>
                   <label for="PhoneNumber">
                    Phone Number
                   </label>
                   <input type='tel' placeholder='Enter Your Phone Number'>
                   </input>
                   <label for="Address">
                    Address
                   </label>
                   <input type='text' placeholder='City, Country'>
                   </input>
                   
            </form>
            <form className='educationDetails'>
                    <div className='sectionNav' onClick={handleEducation}>
                             <span> <FaGraduationCap size={24} fontWeight={900}  /> Education</span>
                            {education ? <FaChevronUp /> : <FaChevronDown />} 
                    </div>
                    {
                        educationexp.length > 0  && 
                       educationexp.map((item)=> {
                        return (
                            <EducationForm
                            key={item.id}
                             id={item.id}             // <-- important
                            setEducationexp= {setEducationexp}
                            School= {item.School}
                            Degree = {item.Degree}
                            startDate = {item.startDate}
                            endDate = {item.endDate}

                            />
                        )
                       })
                    }
                    {
                       education &&
                       <button onClick={addEducation}>
                        <FaPlus size={24}/>
                        <p>Add Education</p>
                       </button> 
                       
                    }
                    
                 
            </form>
            <form className='expreienceDetails'>
                   <div className='sectionNav' onClick={handleExerience}>
                           <span> <FaSuitcase size={20} fontWeight={900} /> Expreience</span>
                             {experience ? <FaChevronUp /> : <FaChevronDown />} 
                   </div>
                   {
                    personalexp.length > 0 && 
                    personalexp.map((item)=> {
                        return (
                            <PersonalForm
                              key={item.id}
                             id={item.id}     
                             setPersonalexp= {setPersonalexp}
                             Company = {item.Company}
                             Position = {item.Position}
                             startDate = {item.startDate}
                             endDate = {item.endDate}
                             Description = {item.Description}
                            />
                        )
                    })
                   }
                   {
                    experience && 
                       <button onClick={addExperience}>
                        <FaPlus size={24}/>
                        <p>Add Experience</p>
                       </button>
                   }
                    
                  
            </form>
        </div>
    )
   
}
export default Form;
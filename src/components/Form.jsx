import { useState } from 'react';
import '../styles/Form.css'
import { FaGraduationCap, FaChevronDown, FaChevronUp,  
    FaSuitcase, FaTrash, FaPlus, 
    FaEdit, FaDownload} from 'react-icons/fa';

import EducationForm from './Form/EducationForm';
import PersonalForm from './Form/PersonalForm.JSX';

function Form ({ personalInfo, setPersonalInfo, educationexp,  
    setEducationexp, personalexp,  setPersonalexp,
    setPhotoPreview
}) {
    const [education, setEducation] = useState(true);
    const [experience, setExperience] = useState(true);
    const [editEduc, seteditEduc] = useState(null);
    const [editExp, seteditExp] = useState(null);
    
    const handlChange = (e)=> {
        const {name, value} = e.target;
        const newInfo = {...personalInfo, [name]: value}
        setPersonalInfo(newInfo)
    }
    const handleEducation = ()=>{
        setEducation((prev)=> !prev)
    }

    const handleExerience = ()=>{
        setExperience((prev)=> !prev)
    }

    const clearResume = ()=> {
        setPersonalInfo({
           fullName: "",
          Email: "",
        PhoneNumber: "",
       Address: "",  
        })
        setPhotoPreview(null)
        setEducationexp([])
        setPersonalexp([])
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
    const onUpdate = (id)=>{
      seteditEduc(id);
    }
    const onUpdateExp = (id)=> {
       seteditExp(id);
    }
   const styleeducSection = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    

   }
    return (
        <div className="Form">
            <div className='clearResume'>
                    <span onClick={clearResume}>
                    <FaTrash color='red' fontSize={20} />
                    Clear Resume
                    </span>
                   <button className='downloadButton'>
                    <FaDownload /> <p> Download </p>
                   </button>
            </div>
            <form className='personalDetails'>
                   <h1>Personal Details</h1>
                   <label for="fullName">
                    FullName
                   </label>
                   <input 
                   type='text' 
                   name='fullName'
                   value={personalInfo.fullName}
                   placeholder='Enter Your Full Name'
                   onChange={handlChange}
                   >
                   </input>
                   <label for="Email">
                    Email
                   </label>
                   <input 
                   type='email'
                   name='Email' 
                   value={personalInfo.Email}
                   placeholder='you@example.com'
                     onChange={handlChange}
                   >
                   </input>
                   <label for="PhoneNumber">
                    Phone Number
                   </label>
                   <input 
                   type='tel'
                   name='PhoneNumber' 
                   placeholder='Enter Your Phone Number'
                   value={personalInfo.PhoneNumber}
                     onChange={handlChange}
                   >
                   </input>
                   <label for="Address">
                    Address
                   </label>
                   <input 
                   type='text'
                   name='Address' 
                   placeholder='City, Country'
                   value={personalInfo.Address}
                     onChange={handlChange}
                   >
                   </input>
                   
            </form>
            <form className='educationDetails'>
                    <div className='sectionNav' onClick={handleEducation}>
                             <span> <FaGraduationCap size={24} fontWeight={900}  /> Education</span>
                            {education ? <FaChevronUp /> : <FaChevronDown />} 
                    </div>
                    {
                        !education &&  
                        educationexp.length > 0 &&
                        educationexp.map((item)=> item.id != editEduc ? 
                         (  <div style={ styleeducSection }>
                                <h1>{item.School}</h1>
                                <FaEdit size={24} onClick={()=> onUpdate(item.id)}/>
                                </div>): (
                                  
                                     <EducationForm
                            key={item.id}
                             id={item.id}             // <-- important
                            setEducationexp= {setEducationexp}
                            School= {item.School}
                            Degree = {item.Degree}
                            startDate = {item.startDate}
                            endDate = {item.endDate}
                            setEducation= {setEducation}
                            seteditEduc={seteditEduc}
                            />
                                ))
                    }
                    {
                        education && 
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
                            setEducation= {setEducation}
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
                        !experience &&  
                       personalexp.length > 0 &&
                        personalexp.map((item)=> item.id != editExp ? 
                         (  <div style={ styleeducSection }>
                                <h1>{item.Company}</h1>
                                <FaEdit size={24} onClick={()=> onUpdateExp(item.id)}/>
                                </div>): (
                                  
                                     <PersonalForm
                             key={item.id}
                             id={item.id}     
                             setPersonalexp= {setPersonalexp}
                             Company = {item.Company}
                             Position = {item.Position}
                             startDate = {item.startDate}
                             endDate = {item.endDate}
                             Description = {item.Description}
                             setExperience = {setExperience}
                             seteditExp = {seteditExp}
                            />
                                ))
                    }
                   {
                    personalexp.length > 0 && 
                    experience && 
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
                             setExperience = {setExperience}
                             seteditExp = {seteditExp}
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
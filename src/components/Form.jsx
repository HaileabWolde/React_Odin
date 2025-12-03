import '../styles/Form.css'
import { FaGraduationCap, FaChevronDown, FaSuitcase, FaTrash   } from 'react-icons/fa';

function Form () {
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
                    <div className='sectionNav'>
                             <span> <FaGraduationCap size={24} fontWeight={900} /> Graduation</span>
                             <FaChevronDown/>

                    </div>
                     <label for="School">
                    School
                   </label>
                   <input type='text' placeholder='Enter School/University'>
                   </input>
                   <label for="Degree">
                    Enter Degree/Field of Study
                   </label>
                   <input type='text' placeholder='Enter Your Degree'>
                   </input>
                   <label for="startDate">
                    Start Date
                   </label>
                   <input type="date" placeholder="startDate"></input>
                    <label for="endDate">
                    End Date
                   </label>
                   <input type="date" placeholder="endDate"></input>
                  
            
            </form>
            <form className='expreienceDetails'>
                   <div className='sectionNav'>
                           <span> <FaSuitcase size={20} fontWeight={900} /> Expreience</span>
                             <FaChevronDown/>
                   </div>
                    <label for="Company">
                    Company Name
                   </label>
                   <input type='text' placeholder='Enter Company Name'>
                   </input>
                   <label for="Position">
                    Enter Position 
                   </label>
                   <input type='text' placeholder='Enter Your Role'>
                   </input>
                   <label for="startDate">
                    Start Date
                   </label>
                   <input type="date" placeholder="startDate"></input>
                    <label for="endDate">
                    End Date
                   </label>
                   <input type="date" placeholder="endDate"></input>
                   <label for="Description">
                        Description
                   </label>
                  < textarea  rows="5" cols="50"></textarea>
                  
            </form>
        </div>
    )
   
}
export default Form;
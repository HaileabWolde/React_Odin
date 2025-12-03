import '../styles/Form.css'
import { FaGraduationCap, FaChevronDown  } from 'react-icons/fa';

function Form () {
    return (
        <div className="Form">
            <div className='clearResume'>
                    
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
                    <div className='educationNav'>
                             <FaGraduationCap size={24} fontWeight={900} />
                             <span>Graduation</span>
                             <FaChevronDown/>

                    </div>
            
            </form>
            <form className='expreienceDetails'>
                   
            </form>
        </div>
    )
   
}
export default Form;
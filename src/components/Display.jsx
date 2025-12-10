import '../styles/Display.css'
 import { FaEnvelope, FaPhone} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6'; // Or 'fa' for older Font Awesome versions
 
function Display ({personalInfo, educationexp, setEducationexp}){
    const {fullName, Email, PhoneNumber, Address} = personalInfo;
    return(
        <div className="Display">
            <div className='persoanlinfo'>
                <h1>
                    {fullName}
                </h1>
                <div className='contactinfo'>
                    {Email &&
                    <button>
                          <FaEnvelope  fontSize={20}/>
                          <h2>{Email}</h2>
                    </button> 
                    }
                        {PhoneNumber &&
                        <button>
                        <FaPhone fontSize={20}/>
                        <h2>{PhoneNumber}</h2> 
                        </button>
                        }
                  
                        {Address && 
                        <button>
                            <FaLocationDot fontSize={20}/>
                            <h2>{Address}</h2>
                        </button>
                        }
                        
                   
                </div>          
            </div>
            <div className='educinfo'>
                        {
                            educationexp.length > 0  && 
                            <div className='educSection'>
                                <h1>Education</h1>
                            </div>
                        }
            </div>
         </div>

    )

}
export default Display;
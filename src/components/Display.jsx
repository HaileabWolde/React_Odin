import '../styles/Display.css'
 import { FaEnvelope, FaPhone} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6'; // Or 'fa' for older Font Awesome versions
 
function Display ({personalInfo}){
    const {fullName, Email, PhoneNumber, Address} = personalInfo;
    return(
        <div className="Display">
            <div className='persoanlinfo'>
                <h1>
                    {fullName}
                </h1>
                <div className='contactinfo'>
                    <button>
                          <FaEnvelope  />
                          <h2>{Email}</h2>
                    </button>
                    <button>
                          <FaPhone/>
                          <h2>{PhoneNumber}</h2>
                    </button>
                    <button>
                        <FaLocationDot />
                        <span>{Address}</span>
                    </button>
                </div>
              
              
                
            </div>
         </div>

    )

}
export default Display;
import '../styles/Display.css';
import { useRef } from 'react';
import { FaEnvelope, FaPhone, FaUserCircle } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

function Display({ personalInfo, educationexp, personalexp,  photoPreview ,  setPhotoPreview}) {
  const { fullName, Email, PhoneNumber, Address } = personalInfo;

  

  // Hidden file input ref
  const fileInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('Image must be smaller than 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="Display">
      <div className="persoanlinfo">
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          style={{ display: 'none' }} // completely hidden
        />

        {/* Clickable Photo / Avatar */}
        <div
          onClick={triggerFileInput}
          style={{
            cursor: 'pointer',
            display: 'inline-block',
            marginBottom: '20px',
          }}
          title="Click to upload photo"
        >
          {photoPreview ? (
            <img
              src={photoPreview}
              alt="Profile"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '5px solid #fff',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              }}
            />
          ) : (
            <FaUserCircle
              size={34}
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
              }}
            />
          )}
        </div>

        <h1>{fullName}</h1>

        <div className="contactinfo">
          {Email && (
            <button>
              <FaEnvelope size={20} />
              <h2>{Email}</h2>
            </button>
          )}
          {PhoneNumber && (
            <button>
              <FaPhone size={20} />
              <h2>{PhoneNumber}</h2>
            </button>
          )}
          {Address && (
            <button>
              <FaLocationDot size={20} />
              <h2>{Address}</h2>
            </button>
          )}
        </div>
      </div>

      {/* Education & Experience sections (unchanged) */}
      <div className="educinfo">
        {educationexp.length > 0 &&
            <div className='educSection'>
                    <h1>Education</h1>
            </div> 
        }
        {educationexp.map((item, index) => (
          <div key={index} className="eachEduc">
            <div className="detailEdu">
              <p>{item.School}</p>
              <p>{item.Degree}</p>
            </div>
            <div className="dateSection">
              <p>{item.startDate} – {item.endDate}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="experienceInfo">
        {personalexp.length > 0 &&
             <div className='experienceSection'>
                    <h1>Experience</h1>
            </div> 
        }
        {personalexp.map((item, index) => (
          <div key={index} className="eachExp">
            <div className="detailExp">
              <p>{item.Company}</p>
              <p>{item.Position}</p>
              <p>{item.Description}</p>
            </div>
            <div className="dateSection">
              <p>{item.startDate} – {item.endDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Display;
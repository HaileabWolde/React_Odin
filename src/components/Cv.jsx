import '../styles/Cv.css'
import myIcon from '../../public/assets/CV.png'
function CV () {
    return (
        <div className="Cv">
            <img 
        src={myIcon} 
        alt="CV Icon" 
        className="cv-icon" 
      />
          <p>CV <br></br>GENERATOR</p>
     </div>
    )
    
    
}
export default CV;
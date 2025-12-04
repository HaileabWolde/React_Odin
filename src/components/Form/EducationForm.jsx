function EducationForm ({id, setEducationexp, School,  Degree, startDate, endDate}){
     const handleChange = (e)=> {
          const {name, value} = e.target;
          setEducationexp(prev=> prev.map(
               (item) => item.id === id ? {...item, [name]: value} : item
          ))
     }
return (
     <>
                            <label>
                        School
                       </label>
                       <input 
                       type='text' 
                       name="School"
                       value={School}
                       placeholder='Enter School/University'
                       onChange={handleChange}
                       >
                       </input>
                       <label >
                        Enter Degree/Field of Study
                       </label>
                       <input 
                       type='text' 
                       placeholder='Enter Your Degree'
                       name="Degree"
                       value={Degree}
                       onChange={handleChange}
                       >
                       </input>
                       <label>
                        Start Date
                       </label>
                       <input 
                       type="date" 
                       placeholder="startDate"
                       name="startDate"
                       value={startDate}
                       onChange={handleChange}
                       ></input>
                        <label>
                        End Date
                       </label>
                       <input 
                       type="date" 
                       placeholder="endDate"
                       name="endDate"
                       value={endDate}
                       onChange={handleChange}
                       ></input>
                      
                
                            </>
)
}
export default EducationForm;
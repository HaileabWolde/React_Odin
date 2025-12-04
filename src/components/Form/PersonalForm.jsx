function PersonalForm ({id, setPersonalexp, Company, Position, startDate, endDate, Description}){

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setPersonalexp(prev=> prev.map((item)=> item.id === id ? {
            ...item, 
            [name]: value
        }: item))
    }
    return (
         <>
                        <label for="Company">
                    Company Name
                   </label>
                   <input 
                   type='text'
                   name="Company"
                   value={Company}
                   placeholder='Enter Company Name'
                   onChange={handleChange}
                   >
                   </input>
                   <label for="Position">
                    Enter Position 
                   </label>
                   <input 
                   type='text' 
                   placeholder='Enter Your Role'
                   name="Position"
                   value={Position}
                   onChange={handleChange}
                   >
                   </input>
                   <label for="startDate">
                    Start Date
                   </label>
                   <input 
                   type="date" 
                   name="startDate"
                   value={startDate}
                   onChange={handleChange}
                   placeholder="startDate"></input>
                    <label for="endDate">
                    End Date
                   </label>
                   <input 
                   type="date" 
                   name="endDate"
                   value={endDate}
                   onChange={handleChange}
                   placeholder="endDate"></input>
                   <label for="Description">
                        Description
                   </label>
                  < textarea
                  name="Description"
                  value={Description}
                  onChange={handleChange}  
                  rows="5" cols="50"></textarea>
                    </>
    )
}
export default PersonalForm;
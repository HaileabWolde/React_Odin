function PersonalForm (){
    return (
         <>
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
                    </>
    )
}
export default PersonalForm;
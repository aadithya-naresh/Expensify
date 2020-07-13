import React from 'react'

const EditExpensepage = (props) =>{
    console.log(props)
    return(
    <div>
       Editing {props.match.params.id}
    </div>
    )
}
export default EditExpensepage
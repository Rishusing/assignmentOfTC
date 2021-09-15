import React,{useState} from 'react'

const InputText = (val) => {
    const[name,setName] = useState('')
    return (
        <div className="InputText">
            <label htmlFor="name">{val.props.fieldlabel} : </label>
            <input
                type={val.props.fieldtype} 
                name={val.props.fieldname}
                placeholder={val.props.fieldplaceholder} 
                required={val.props.fieldrules[0].required} 
                onChange={e=>setName(e.target.value)}
                />
        </div>
    )
}


export default InputText

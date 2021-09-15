import React, { useState } from 'react'

const Select = (val) => {
    const[op,setOp] = useState('')
    return (
        <div className="Select">
            <label>{val.props.fieldlabel} : </label>
            <select name={val.props.fieldname} placeholder={val.props.fieldplaceholder}
            onChange={e=>setOp(e.target.value)}
            >
                <option>select one</option>
                {
                    val.props.options.map((ele,i=0) => {
                        return <option key={i++} value={ele}>{ele}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Select

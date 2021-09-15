import React from 'react'
import InputText from './InputText';
import Select from './Select'

const Element = (props) => {

    switch(props.props.fieldtype){

        case 'text':
        return(
            <InputText props={props.props}/>
        )

        case 'select':
        return(
            <Select props={props.props}/>
        )

    }
}

export default Element

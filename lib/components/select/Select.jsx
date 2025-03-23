import { useState } from 'react'
import './select.css'

const Select = ({options, onChange, selected}) => {
    const [isOpen, setIsOpen] = useState(false)

    const onOpen = (e) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    const onClick = (option) => {
        setIsOpen(false)
        onChange(option)
    }

    return <div className="select-container">
        <button onClick={onOpen}>{selected.label}</button>        
        <ul className={`select-options ${isOpen ? 'show' : ''}`}>
            {options.map((option) => <li 
                key={option.value} 
                className={`${option.value === selected.value ? 'selected' : ''}`}
                onClick={() => onClick(option)}>{option.label}
            </li>)}
        </ul>
    </div>
}

export default Select
import {validateEmail, validateIDCard, validatePhone} from '@libs/helpers/utils/validator-regex'
import {PRIMARY_RED} from '@libs/shares/constants/colors'
import {Validator} from '@libs/shares/enums/validator'
import React, {useState, useEffect} from 'react'

interface ValidatorProps {
    defaultValue?: string
}

export const withValidator = (type: Validator) => {
    return (Component) => {
        return ({defaultValue, ...props}: ValidatorProps | any) => {
            const [valid, setValid] = useState(false)
            const [text, setText] = useState('')

            useEffect(() => {
                if (props.default) {
                    setText(props.default)
                    setValid(true)
                }
            }, [])

            const onTargetBlur = event => {
                switch (type) {
                    case Validator.email:
                        setValid(validateEmail(event.target.value))
                        break
                    case Validator.idCard:
                        if (props.foreigner) setValid(true)
                        else setValid(validateIDCard(event.target.value))
                        break
                    case Validator.notEmpty:
                        if (event.target.value === '') setValid(false)
                        else setValid(true)
                        break
                    case Validator.phone:
                        setValid(validatePhone(event.target.value))
                        break
                }
            }

            const handleTextChanged = event => {
                setText(event.target.value)
                if (props.onTextChange)
                    props.onTextChange(event)
            }

            useEffect(() => {
                if (props.isValid)
                    props.isValid(valid)
            }, [valid])

            return (
                <Component {...props}
                           value={text}
                           onChange={handleTextChanged}
                           onBlur={onTargetBlur}
                           style={{border: valid ? 'none' : `1px solid ${PRIMARY_RED}`, ...props.style}}/>
            )
        }
    }
}

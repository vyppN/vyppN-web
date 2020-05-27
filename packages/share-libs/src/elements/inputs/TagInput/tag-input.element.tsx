import {PRIMARY_GREEN, WHITE, Greys} from '@libs/constants/colors'
import {White} from '@libs/elements/colors/Color/colors.element'
import {InputContainer, Input} from '@libs/elements/inputs/InputWithIcon/input-with-icon.style'
import {Small} from '@libs/elements/paragraphs/body/small.element'
import HorizontalSpace from '@libs/elements/spacing/Spacer/horizontal/horizontal'
import moment from 'moment'
import React, {useState} from 'react'
import styled from 'styled-components'

const TagLabelStyled = styled.div`
background-color: ${PRIMARY_GREEN};
padding: 1px 6px;
border-radius: 2px;
margin:3px;
box-sizing: border-box;
height: 18px;
width: auto;
display: flex;
overflow: visible;
align-items: center;
font-size: 12px;
color:${WHITE};
white-space: nowrap;
`
const TagLabel = ({tag, onClose}) => {
    return (
        <TagLabelStyled>
            {tag.title}
            <HorizontalSpace width={4}/>
            <Small onClick={() => onClose(tag)}><White>x</White></Small>
        </TagLabelStyled>
    )
}
const TagInput = ({tags, setTags}) => {

    const [text, setText] = useState('')

    const handleClose = tag => {
        setTags(tags.filter(_tag => _tag.id !== tag.id))
    }

    const onTextChange = event => {
        setText(event.target.value)
    }

    // useEffect(() => {
    //     _setTags(_tags.map(tag => tag.title))
    // }, [_tags])

    const onKeyDowned = event => {
        if (event.keyCode === 13) {
            if (text === '') return
            const tag = {
                id: moment().unix(),
                title: text
            }
            setTags([...tags, tag])
            setText('')
        }

        if (event.keyCode === 8 && text.length === 0) {
            setTags(tags.slice(0, tags.length - 1))
        }
    }

    return (
        <InputContainer borderRadius={4} style={{border: `1px solid ${Greys.GREY03}`, minWidth: 320}}>
            <div style={{display: 'flex'}}>
                {
                    tags.map(tag => <TagLabel key={`tag_${tag.id}`} tag={tag} onClose={handleClose}/>)
                }
            </div>
            <Input right onChange={onTextChange} value={text} onKeyDown={onKeyDowned}/>
        </InputContainer>

    )
}

export default TagInput

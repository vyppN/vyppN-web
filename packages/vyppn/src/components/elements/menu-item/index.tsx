import {Grey04} from '@libs/elements/colors/Color/colors.element'
import Hover from '@libs/elements/hover/hover.element'
import {Light} from '@libs/elements/styles/font-weight/light.element'
import React from 'react'
import {Path} from '~/enums/path'

const MenuItem = ({title,path,onClick}:{title:string,path:Path,onClick:(path:Path)=>void}) => {
    return (
        <Hover scale={1.1} brightness={120} pointer onClick={()=>onClick(path)}><Light><Grey04>{title}</Grey04></Light></Hover>
    )
}

export default MenuItem

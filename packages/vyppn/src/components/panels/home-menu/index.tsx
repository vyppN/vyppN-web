import Row from '@libs/elements/containers/Row/row.element'
import React from 'react'
import MenuItem from '~/components/elements/menu-item'
import {Path} from '~/enums/path'
import usePage from '~/modules/page/usePage'

const HomeMenu = () => {
    const page = usePage()

    return (
        <Row justifyContent={'space-evenly'} style={{overflow:'visible'}}>
            <MenuItem title={'ABOUT ME'} path={Path.aboutMe} onClick={page.setPage}/>
            <MenuItem title={'EDUCATION'} path={Path.education} onClick={page.setPage}/>
            <MenuItem title={'PORTFOLIO'} path={Path.portfolio} onClick={page.setPage}/>
            <MenuItem title={'WORKS'} path={Path.works} onClick={page.setPage}/>
        </Row>
    )
}

export default HomeMenu

import {useSelector, useDispatch} from 'react-redux'
import {Path} from '~/enums/path'
import {setPage} from '~/modules/page/actions'
import {pageStateSelector, pageSelector} from '~/modules/page/selectors'

export default () => {
    const pageState = useSelector(pageStateSelector)
    const dispatch = useDispatch()
    return {
        ...pageState,
        page:useSelector(pageSelector) as Path,
        setPage:(path:Path)=>dispatch(setPage(path))
    }
}

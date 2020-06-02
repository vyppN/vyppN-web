import { createAction } from "@reduxjs/toolkit";
import {Path} from '~/enums/path'
import {SET_PAGE} from '~/modules/page/constants'

export const setPage = createAction<Path>(SET_PAGE)

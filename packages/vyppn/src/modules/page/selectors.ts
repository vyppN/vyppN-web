import {Path} from '~/enums/path'
import {PAGE_MODULE} from '~/modules/page/constants'
import {PageState} from '~/modules/page/state'
import { createSelector } from '@reduxjs/toolkit'

export const pageStateSelector = state => state[PAGE_MODULE] as PageState

export const pageSelector = createSelector(pageStateSelector,state=>state.page as Path)

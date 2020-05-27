// Primaries
import {
    PRIMARY_BLUE,
    FALSE_COLOR,
    LABEL_GREEN_TEXT,
    Greys,
    PRIMARY_GREEN,
    LIGHT_GRAY,
    WHITE,
    PRIMARY_RED,
    NORMAL_COLOR,
    LINK_COLOR,
    DARK_GRAY,
    ORANGE,
    PACKAGE_GREEN,
    YELLOW
} from '@libs/constants/colors'
import React from 'react'
import Color from './color.element'

export const Red = ({children}) => <Color color={PRIMARY_RED}>{children}</Color>
export const Green = ({children}) => <Color color={PRIMARY_GREEN}>{children}</Color>
export const Blue = ({children}) => <Color color={PRIMARY_BLUE}>{children}</Color>
export const Orange = ({children}) => <Color color={ORANGE}>{children}</Color>
export const Yellow = ({children}) => <Color color={YELLOW}>{children}</Color>

// Greys
export const DarkGrey = ({children}) => <Color color={DARK_GRAY}>{children}</Color>
export const LightGrey = ({children}) => <Color color={LIGHT_GRAY}>{children}</Color>
export const Grey01 = ({children}) => <Color color={Greys.GREY01}>{children}</Color>
export const Grey02 = ({children}) => <Color color={Greys.GREY02}>{children}</Color>
export const Grey03 = ({children}) => <Color color={Greys.GREY03}>{children}</Color>
export const Grey04 = ({children}) => <Color color={Greys.GREY04}>{children}</Color>
export const Grey05 = ({children}) => <Color color={Greys.GREY05}>{children}</Color>
export const Grey06 = ({children}) => <Color color={Greys.GREY06}>{children}</Color>
export const Grey07 = ({children}) => <Color color={Greys.GREY07}>{children}</Color>
export const Grey08 = ({children}) => <Color color={Greys.GREY08}>{children}</Color>
export const Grey09 = ({children}) => <Color color={Greys.GREY09}>{children}</Color>
export const Grey10 = ({children}) => <Color color={Greys.GREY10}>{children}</Color>
export const Grey11 = ({children}) => <Color color={Greys.GREY11}>{children}</Color>
export const White = ({children}) => <Color color={WHITE}>{children}</Color>
export const LinkColor = ({children}) => <Color color={LINK_COLOR}>{children}</Color>
// Label
export const Normal = ({children}) => <Color color={NORMAL_COLOR}>{children}</Color>
export const False = ({children}) => <Color color={FALSE_COLOR}>{children}</Color>
export const Green02 = ({children}) => <Color color={LABEL_GREEN_TEXT}>{children}</Color>
export const Green03 = ({children}) => <Color color={PACKAGE_GREEN}>{children}</Color>

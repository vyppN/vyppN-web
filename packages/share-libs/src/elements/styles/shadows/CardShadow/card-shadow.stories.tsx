import {storiesOf} from '@storybook/react'
import logo from 'public/static/images/all-package.png'
import React from 'react'
import AllPackageCard from '~/components/compounds/Cards/AllPackageCard/checkup-landing-card.compound'
import AppBackground from '~/components/elements/MockElement/app-background.element'
import CardShadow from '~/components/elements/Styles/Shadows/CardShadow/card-shadow.element'
import {cardShadowMD} from '~/components/elements/Styles/Shadows/CardShadow/card-shadow.md'

storiesOf('Elements/Styles/CardShadows', module)
    .add('CardShadow', () => (
            <AppBackground height={200}>
                <AllPackageCard image={logo}/>
            </AppBackground>
        ), {
            info: {
                inline: true,
                source: false,
                propTables: null,
                text: cardShadowMD
            }
        }
    )


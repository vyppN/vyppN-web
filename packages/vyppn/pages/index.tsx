import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'
import ElementsView from '~/components/layouts/elements-view'
import HomeLayout from '~/components/layouts/home'
import {Path} from '~/enums/path'
import usePage from '~/modules/page/usePage'


const SetLayout = () => {
    const page = usePage().page
    return (
        <AnimatePresence exitBeforeEnter>
            {page === Path.home &&
            <motion.div key={page}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
            >
                <HomeLayout/>
            </motion.div>
            }
            {page === Path.aboutMe &&
            <motion.div key={page}
                        initial={{opacity: 0, x: -600}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -600}}
            >
                <ElementsView/>
            </motion.div>
            }
            {page === Path.education &&
            <motion.div key={page}
                        initial={{opacity: 0, y: -600}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -600}}
            >
                <ElementsView/>
            </motion.div>

            }
            {page === Path.portfolio &&
            <motion.div key={page}
                        initial={{opacity: 0, x: 600}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: 600}}
            >
                <ElementsView/>
            </motion.div>

            }

            {page === Path.works &&
            <motion.div key={page}
                        initial={{opacity: 0, y: 600}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 600}}
            >
                <ElementsView/>
            </motion.div>

            }

        </AnimatePresence>
    )
}

export default SetLayout

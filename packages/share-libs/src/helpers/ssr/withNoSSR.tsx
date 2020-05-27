import NoSSR from './NoSSR'

export default (Component: any) => {
    return () => {
        return (
            <NoSSR>
                <Component/>
            </NoSSR>
        )
    }
}

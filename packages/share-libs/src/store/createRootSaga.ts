import { all, call, spawn } from '@redux-saga/core/effects'

export default (sagas: any[]) => {
    return function* rootSaga () {
        yield all(sagas.map(saga =>
            spawn(function* () {
                while (true) {
                    try {
                        yield call(saga)
                        break
                    } catch (e) {
                        console.log(e)
                    }
                }
            }))
        );
    }
}

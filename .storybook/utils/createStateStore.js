// @flow
import { withStateHandlers } from 'recompose'
import applyHOC from './applyHOC'

type InitialState = Object | ((props: Object) => any)
type StateUpdaters = {
  [key: string]: (
    state: Object,
    props: Object
  ) => (...payload: any[]) => Object,
}

export default (initialState: InitialState, stateUpdaters: StateUpdaters) =>
  applyHOC(withStateHandlers, initialState, stateUpdaters)

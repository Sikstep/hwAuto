import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let stateCopy = state.map(user => ({...user}))
            if (action.payload == 'up') {
                stateCopy = stateCopy.sort((a, b) => a.age - b.age)
            } else {
                stateCopy = stateCopy.sort((a, b) => b.age - a.age)
            }

            return stateCopy // need to fix
        }
        case 'check': {

            return state // need to fix
        }
        default:
            return state
    }
}

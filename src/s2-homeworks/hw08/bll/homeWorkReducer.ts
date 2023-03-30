import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let stateCopy:UserType[] = state.map(user => ({...user}))
            if (action.payload == 'up') {
                stateCopy.sort((a, b) => a.name.localeCompare(b.name))
            } else {
                stateCopy.sort((a, b) => b.name.localeCompare(a.name))
            }

            return stateCopy // need to fix
        }
        case 'check': {

            return state.filter(el => el.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}

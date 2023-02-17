import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (str: 'Ошибка! Введите имя!' | '') => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    if (name.trim()) {
        addUserCallback(name.trim());
        setError('');
        setName('');

    } else {
        setError('Ошибка! Введите имя!')
    }


    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}
type ErrorType = 'Ошибка! Введите имя!' | ''
export const pureOnBlur = (name: string, setError: (str: ErrorType) => void) => {
    if (name.trim() === '') {
        return setError('Ошибка! Введите имя!')
    }  // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
    if (e.key === 'Enter') {
        addUser();
    } // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<ErrorType>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    let totalUsers = users.length; // need to fix

const lastUserName =  users[users.length - 1]?.name;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer

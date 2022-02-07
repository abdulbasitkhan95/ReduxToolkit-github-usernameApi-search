import { toast } from 'react-toastify';

export const showMessage = (error) => {
    toast(error)
}

export const inputErrorClass = (error) => {
    return error ? 'border-danger' : " "
}
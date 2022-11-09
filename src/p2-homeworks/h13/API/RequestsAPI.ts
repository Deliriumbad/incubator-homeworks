import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const RequestAPI = {
    sendRequest(success: boolean){
        return instance.post<ResponseType>('auth/test', {success})
            .then(res => res.data)
            .catch(err => err.response.data)
    }
}

export type ResponseType = {
    errorText: string
    info: string
    yourBody: {success: boolean}
    yourQuery: {}
}
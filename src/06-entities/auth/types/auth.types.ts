export interface User {
    id: string
    login: string
    email: string
    confirmed: boolean
    roles: number[]
    userLink: string
}

export interface AuthState {
    user: User | null
}

export interface LoginParams {
    login: string
    password: string
}

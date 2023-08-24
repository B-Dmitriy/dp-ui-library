export interface Todo {
    id: number
    user_id: number
    title: string
    description: string | null
    is_done: boolean
    deadline: string | null
    created_at: string
    updated_at: string | null
}

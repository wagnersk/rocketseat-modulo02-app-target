import { useSQLiteContext } from "expo-sqlite";

export type TransactionsCreate = {
    target_id:number
    amount:number
    observation?:string
}

export type TransactionResponse = {
    id:number
    target_id:number
    amount:number
    observation:string
    created_at:Date
    updated_at:Date
}

export function useTransactionsDatabase() {
    const database = useSQLiteContext()

    async function create(data:TransactionsCreate) {
        const statement = await database.prepareAsync(`
            INSERT INTO  transactions
                (target_id, amount, observation)
            VALUES
                ($target_id, $amount, $observation)
            `
        )

        statement.executeAsync({
            $target_id:data.target_id,
            $amount:data.amount,
            $observation:data.observation,
        })
    }

    function listByTargetId(id:number) {
        return database.getAllAsync<TransactionResponse>(`
            SELECT id, target_id, amount, observation, created_at, updated_at
            FROM transactions
            WHERE target_id = ${id}
            ORDER BY created_at DESC
            `)
    }

    return {
        create,
        listByTargetId,

    }

}
import { encryption } from "../helper/encryption.helper";

// const result = async (status: number, message: string, data?: any | undefined) => {
//     const newData = await encryption({
//         status,
//         message,
//         data
//     });
//     return newData
// }

const result = async (status: number, message: string, data?: any | undefined) => {
    return {
        status,
        message,
        data
    }
}

export default class resultSend {
    static async success(message: string, data?: any | undefined, status: number = 200) {
        return await result(status, message, data)
    }

    static async severErrors(message: string, status: number = 500) {
        return await result(status, message)
    }

    static async clientErrors(message: string, status: number = 400) {
        return await result(status, message)
    }
}
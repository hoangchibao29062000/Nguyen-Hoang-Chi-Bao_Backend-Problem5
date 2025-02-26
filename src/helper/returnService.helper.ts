const result = (status: number, message: string, data?: any | undefined) => {
    return {
        status,
        message,
        data
    }
}

export default class returnService {
    static success200(message: string, data?: any | undefined) {
        return result(200, message, data)
    }

    static success(message: string, data?: any | undefined, status: number = 200) {
        return result(status, message, data)
    }

    static clientErrors(message: string, status: number = 400) {
        return result(status, message)
    }

    static severErrors(message: string, status: number = 500) {
        return result(status, message)
    }

    static forbidden(message: string, status: number = 403) {
        return result(status, message)
    }

    static unauthorized(message: string, status: number = 401) {
        return result(status, message)
    }
}
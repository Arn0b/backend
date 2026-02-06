class Apierror extends Error{
    constructor(
        statuscode,
        message = "Something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.message = message
        this.data = null
        this.statuscode = statuscode
        this.success = false
        this.errors = errors

        this.stack = statck
    }
}

export {Apierror}
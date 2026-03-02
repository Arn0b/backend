class Apierror extends Error{
    constructor(
        statuscode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.message = message
        this.data = null
        this.statuscode = statuscode
        this.success = false
        this.errors = errors

        this.stack = stack
    }
}

export {Apierror}
function apiError(msg, code) {
    throw { message: msg, apiCode: code };
}
console.log(apiError("Server side error", 500));

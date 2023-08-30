function apiError(msg, code):never
{
  throw { message: msg, apiCode: code };
}

console.log(apiError("Server side error", 500));

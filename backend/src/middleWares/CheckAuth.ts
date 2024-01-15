import jwt from "jsonwebtoken";

const checkAuth = (request: any, response: any, next: any) => {
  const token = (request.headers.authorization || "").replace(/Bearer\s?/, "")

  if (token){
    try{
      const decoded = jwt.verify(token, process.env.SECRET_KEY_FOR_TOKEN!)
      console.log(decoded)
      request.userId = decoded
      next()
    } catch (error){
      return response.status(403).json({
        message: "Нет доступа"
      })
    }
  }else {
    return response.status(403).json({
      message: "Нет доступа"
    })
  }
}

export default checkAuth
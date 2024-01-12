import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/User";

export const registration = async (request: any, response: any) => {
  try {
    const salt = await bcrypt.genSalt(10),
      hash = await bcrypt.hash(request.body.password, salt)

    const doc = new UserModel({
      userName: request.body.userName,
      passwordHash: hash,
      modules: []
    })

    const user = await doc.save()

    const token = jwt.sign({
        _id: user._id
      },
      process.env.SECRET_KEY_FOR_TOKEN!,
      {
        expiresIn: "30d" // время действия ключа для расшифровки
      })

    const userData = {
      userName: user.userName
    }

    response.json({
      ...user,
      token
    })
  }catch (error){
    console.log(error)
    response.status(500).json({
      message: "Не удалось зарегистрироваться"
    })
  }
}
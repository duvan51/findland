import { sign } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import { createUser, getUser } from '../services/user.service'
import { compareSync } from 'bcryptjs'

const SECRET = process.env.SECRET as string

export async function signupHandler(req: Request, res: Response, next: NextFunction) {
  const { data } = req.body;
  try {
    const newUser = await createUser(data);
    const token = sign(
      { id: newUser.id, email: newUser.email },
      SECRET,
      { expiresIn: '1h' }
    )
    return res.status(200).json({ user: newUser, token })
  } catch (error) {
    return next(error)
  }
}

export async function signinHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { data } = req.body
    const userFound = await getUser(data)
    // if (!userFound) return res.status(400).json({ message: "User Not Found" });
    // const matchPassword = compareSync(data.password, userFound.password)

    // if (!matchPassword)
    //   return res.status(401).json({
    //     token: null,
    //     message: "Invalid Password",
    //   });
    // const token = sign(
    //   { id: userFound.id, email: userFound.email },
    //   SECRET,
    //   { expiresIn: '1h' }
    // )
    return res.status(200).json({ user: userFound })
  } catch (error) {
    return next(error)
  }
}
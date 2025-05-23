import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import usersService from '~/services/users.services'
import { RegisterReqbody } from '~/models/requests/User.requests'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'test@gmail.com' && password === '123456') {
    return res.json({
      message: 'Login successful'
    })
  }
  return res.status(401).json({
    error: 'Invalid email or password'
  })
}

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqbody>, res: Response) => {
  const result = await usersService.register(req.body)
  return res.json({
    message: 'Register successful',
    result
  })
}

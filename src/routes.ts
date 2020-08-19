import { Request, Response } from 'express'

import createUser from './services/CreateUser'

export function Hello( request: Request, response: Response){
  const user = createUser({
      email: 'iagogholanda@gmail.com',
      password: '123456',
      techs: [
        'Node', 
        'React',
        {
          title: 'Javascript',
          experience: 100
        }
      ]
    })

  return response.json({ message: "Hello World" })
}
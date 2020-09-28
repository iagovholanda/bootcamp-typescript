/* 
  Usuário:
    Nome
    Email
    Senha
*/

/* 
  Interface para o objeto dentro de Techs. 
  Para cada object construindo, uma nova interface deve ser criada. 
  Notion: https://www.notion.so/Typescript-5712aeab312d44fcba0aa88895caad36
*/
interface TechObject {
  title: string,
  experience: number
}

interface CreateUserData {
  name?: string
  email: string
  password: string
  /* Tipo variavel em recebimento de objeto. */
  techs: Array<string | TechObject>
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password
  }

  return user
}
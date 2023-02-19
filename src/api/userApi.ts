import { account } from './client'
import { v4 as uuidv4 } from 'uuid'

export class UserApi {
  create = async (email: string, password: string) => {
    try {
      return await account.create(uuidv4(), email, password)
    } catch (e) {
      console.log(e)
    }
  }
}

import { Context } from 'koa'
import { getManager } from 'typeorm'

import { User } from '../entity'
import { encrypt, comparePassword } from '../utils/bcrypt'
import { createToken } from '../utils/token'
import { getOrderByStatus } from '../utils/getOrderByStatus'

const UserController = {

}

export default UserController
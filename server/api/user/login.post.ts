import jwt from 'jsonwebtoken'
import { users } from '~/server/models';
import bcrypt from 'bcrypt';

interface IRequestBody {
  email: string;
  password: string;
}

const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody<IRequestBody>(event);

  const user = await users.findOne({ email });
  const passwordVerification = await bcrypt.compare(password, user?.password);

  if (!user || !passwordVerification) {
    event.res.statusCode = 401;
    return {
      code: 'USER_NOT_EXISTS',
      message: 'User with provided email and password does not exists',
    };
  }

  return jwt.sign({ email }, config.jwtSecret);
})

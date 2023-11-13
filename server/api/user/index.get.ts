import jwt from 'jsonwebtoken'
import { users } from '~/server/models';

const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const token = getRequestHeader(event, 'Authorization');

  if (!token) {
    event.res.statusCode = 401;
    return;
  }

  const verifiedToken = jwt.verify(token, config.jwtSecret);
  
  if (typeof verifiedToken !== "object" || !verifiedToken.email) {
    event.res.statusCode = 401;
    return;
  }

  const user = await users.findOne({ email: verifiedToken.email });

  if (!user) {
    event.res.statusCode = 401;
    return;
  }

  const premium = new Date() < user.premium;

  return {
    email: user.email,
    name: user.name,
    avatar: '',
    premium: {
      active: premium,
      till: user.premium,
    },
    settings: user.settings
  };
})

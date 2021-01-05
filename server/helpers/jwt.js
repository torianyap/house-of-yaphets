const jwt = require('jsonwebtoken')

function signToken (payload) {
  const token = jwt.sign(payload, process.env.SECRET)
  return token
}

function verifyToken (token) {
  const res = jwt.verify(token, process.env.SECRET)
  return res
}

module.exports = {
  signToken,
  verifyToken
}
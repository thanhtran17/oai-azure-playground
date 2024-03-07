require('dotenv').config()

const OPENAI_API_URL = process.env.OPENAI_API_URL
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

module.exports = { OPENAI_API_URL, OPENAI_API_KEY }

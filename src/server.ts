import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server started on port 3333')
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })

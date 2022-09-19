import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import files_routes from './routes/files_routes.js'

const app = express()

// APP USES
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.text())

const corsOptions = {
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization','api-signature'],
    origin: '*',
}

app.use(cors(corsOptions))

// APP SETS
app.set('trust proxy', true)

// Getting routes from separate files.
// static files route
app.use(files_routes)


export default app

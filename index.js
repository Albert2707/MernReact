import express from 'express'
import {PORT} from './config.js';
import path from'path'
import {fileURLToPath} from 'url';
import taskRoutes  from './routes/task.js'
import cors from 'cors'

const App = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// cuando enviemos datos en formato json
App.use(cors())
App.use(express.json())


// cuando utilicemos form-encoded
//App.use(express.urlencoded({ extended: false }));
App.use(taskRoutes)
App.listen(PORT)
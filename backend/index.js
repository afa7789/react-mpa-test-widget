import app from './library/app.js';
import 'dotenv/config'

const PORT = process.env.PORT || 3000 
console.log('http://localhost:' + PORT);
app.listen(PORT)


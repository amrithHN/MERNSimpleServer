import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './routes/posts.js'


const app = express();



app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use('/posts', router);


const CONNECTION_URL = 'mongodb+srv://amrith:egzzCLNxLWJGSqbB@cluster0.sp1hr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 7000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
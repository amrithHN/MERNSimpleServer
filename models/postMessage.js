import mongoose from 'mongoose'
import moment from 'moment'



const post = mongoose.Schema({

    title: String,
    message: String,
    img_url: String,
    date: String,

});

const memory = mongoose.model('memories', post);
export default memory;
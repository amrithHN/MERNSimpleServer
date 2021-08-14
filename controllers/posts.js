import memory from '../models/postMessage.js'
import moment from 'moment';

export const getposts = async (req, res) => {
    try {
        const postMessages = await memory.find();

        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });

    }

}


export const createpost = async (req, res) => {
    const post = req.body;
    console.log(req.body);
    const newMemory = new memory(post);
    newMemory.date = moment().toString();
    try {
        await newMemory.save();
        res.status(201).json(newMemory);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const getpost = async (req, res) => {

    console.log(req.params.id);

    try {
        let data = await memory.findById(req.params.id)
        console.log(`findOne success--> ${data}`);
        if (!data) {
            throw new Error('no document found');
        }
        return res.status(200).json(data);;
    } catch (error) {
        console.log(`findOne error--> ${error}`);
        return (res.status(404).json({ error: "not found" }));
    }



}


export const delpost = async (req, res) => {
    console.log(req.params.id);

    try {

        let data = await memory.findByIdAndDelete(req.params.id)
        console.log(` success--> ${data}`);
        if (!data) {
            throw new Error('no document found');
        }
        return res.status(201).json(data);
    } catch (error) {
        console.log(`findOne error--> ${error}`);
        return (res.status(409).json({ error: "not found" }));
    }
}

export const updatepost = async (req, res) => {
    console.log(req.params.id);
    const post = req.body;
    console.log(req.body);

    try {
        let data = await memory.findByIdAndUpdate(req.params.id, req.body)
        console.log(` success--> ${data}`);
        if (!data) {
            throw new Error('no document found');
        }
        return res.status(201).json(data);;
    } catch (error) {
        console.log(`findOne error--> ${error}`);
        return (res.status(409).json({ error: "not found" }));
    }
}
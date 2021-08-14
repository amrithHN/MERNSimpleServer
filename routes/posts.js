import express from 'express'
import { createpost, getposts, getpost, delpost, updatepost } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getposts);
router.post('/', createpost);
router.post('/delete/:id', delpost);//needs to be implemented
router.post('/update/:id', updatepost);//needs to be implemented
router.get('/:id', getpost);//needs to be implemented
export default router;
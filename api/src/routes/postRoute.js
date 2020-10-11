import { Router } from 'express'
import { deletePost, editPost, newPost, postAll, postById } from '../controllers/postController'

const router = Router()
router.get('/', postAll)
router.get('/:id', postById)
router.post('/', newPost)
router.put('/:id', editPost)
router.delete('/:id', deletePost)
export default router
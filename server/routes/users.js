import express from 'express'
import {
  getUser,
  getUsersFriends,
  addRemoveFriend,
} from '../controllers/users.js'
import { verifyToken } from '../middlewares/auth.js'

const router = express.Router()

/* READ */
router.get('/:id', verifyToken, getUser)
router.get('/:id/friends', verifyToken, getUsersFriends)

/* UPDATE */
router.patch('/:id/:friendId', verifyToken, addRemoveFriend)

export default router

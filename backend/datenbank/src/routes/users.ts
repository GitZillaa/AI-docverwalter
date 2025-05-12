import express from 'express';
import { createAdmin, createUser } from '../controllers/usercontroller';

const router = express.Router();

router.post('/create-admin', createAdmin);
router.post('/create-user', createUser);

export default router;

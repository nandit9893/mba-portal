import express from 'express';
import { loginAdmin, registerAdmin, logoutAdmin,getAdminList} from '../controllers/adminController.js';

const router = express.Router();

// Admin Authentication Routes
router.post('/login', loginAdmin);
router.post('/register', registerAdmin);
// router.post("/register", upload.single("profilePic"), registerAdmin);
router.post('/logout', logoutAdmin);
router.get('/getAdminList', getAdminList);

export default router;

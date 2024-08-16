const express = require('express');
const { login } = require('../controllers/authController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints for admin authentication.
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Login a user
 *     description: Authenticates a user and returns a JWT token if successful.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user trying to log in.
 *                 example: felipebpassos
 *               password:
 *                 type: string
 *                 description: The password of the user trying to log in.
 *                 example: admin123
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier of the user.
 *                   example: 60d0fe4f5311236168a109c8
 *                 username:
 *                   type: string
 *                   description: The username of the logged-in user.
 *                   example: felipebpassos
 *                 token:
 *                   type: string
 *                   description: The JWT token issued upon successful login.
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating invalid login credentials.
 *                   example: Invalid credentials
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message for unexpected server issues.
 *                   example: An unexpected error occurred
 */

router.post('/login', login);

module.exports = router;

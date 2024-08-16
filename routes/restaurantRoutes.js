const express = require('express');
const {
  getRestaurants,
  searchRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require('../controllers/restaurantController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: API endpoints for managing restaurants.
 */

/**
 * @swagger
 * /api/restaurants/search:
 *   get:
 *     summary: Search restaurants by category and/or neighborhood.
 *     tags: [Restaurants]
 *     parameters:
 *       - in: query
 *         name: categoria
 *         schema:
 *           type: string
 *         description: The category of the restaurant.
 *       - in: query
 *         name: bairro
 *         schema:
 *           type: string
 *         description: The neighborhood of the restaurant.
 *     responses:
 *       200:
 *         description: List of restaurants matching the search criteria.
 *       500:
 *         description: Internal server error.
 */
router.get('/search', searchRestaurants);

/**
 * @swagger
 * /api/restaurants/:
 *   get:
 *     summary: Get a list of all restaurants.
 *     tags: [Restaurants]
 *     responses:
 *       200:
 *         description: A list of restaurants.
 *       500:
 *         description: Internal server error.
 */
router.get('/', getRestaurants);

/**
 * @swagger
 * /api/restaurants/:
 *   post:
 *     summary: Create a new restaurant.
 *     tags: [Restaurants]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: The name of the restaurant.
 *                 example: "Restaurant A"
 *               categoria:
 *                 type: string
 *                 description: The category of the restaurant.
 *                 example: "Italian"
 *               preco:
 *                 type: string
 *                 description: The price range of the restaurant.
 *                 example: "médio"
 *               bairro:
 *                 type: string
 *                 description: The neighborhood of the restaurant.
 *                 example: "Downtown"
 *               endereco:
 *                 type: string
 *                 description: The address of the restaurant.
 *                 example: "123 Main St"
 *     responses:
 *       201:
 *         description: The created restaurant.
 *       400:
 *         description: Bad request.
 *       401:
 *         description: Unauthorized. Token is missing or invalid.
 *       500:
 *         description: Internal server error.
 */
router.post('/', protect, createRestaurant);

/**
 * @swagger
 * /api/restaurants/{id}:
 *   put:
 *     summary: Update an existing restaurant.
 *     tags: [Restaurants]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the restaurant to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: The name of the restaurant.
 *                 example: "Restaurant A"
 *               categoria:
 *                 type: string
 *                 description: The category of the restaurant.
 *                 example: "Italian"
 *               preco:
 *                 type: string
 *                 description: The price range of the restaurant.
 *                 example: "médio"
 *               bairro:
 *                 type: string
 *                 description: The neighborhood of the restaurant.
 *                 example: "Downtown"
 *               endereco:
 *                 type: string
 *                 description: The address of the restaurant.
 *                 example: "123 Main St"
 *     responses:
 *       200:
 *         description: The updated restaurant.
 *       400:
 *         description: Bad request.
 *       401:
 *         description: Unauthorized. Token is missing or invalid.
 *       404:
 *         description: Restaurant not found.
 *       500:
 *         description: Internal server error.
 */
router.put('/:id', protect, updateRestaurant);

/**
 * @swagger
 * /api/restaurants/{id}:
 *   delete:
 *     summary: Delete a restaurant by ID.
 *     tags: [Restaurants]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the restaurant to delete.
 *     responses:
 *       200:
 *         description: The restaurant was deleted successfully.
 *       401:
 *         description: Unauthorized. Token is missing or invalid.
 *       404:
 *         description: Restaurant not found.
 *       500:
 *         description: Internal server error.
 */
router.delete('/:id', protect, deleteRestaurant);

module.exports = router;

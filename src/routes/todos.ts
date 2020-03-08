/**
 * @author Ana Bjelica
 */
import express from 'express';

import ToDoItemController from '../controllers/ToDoItemController';

const router = express.Router({});

// Create
router.post('/todos', ToDoItemController.create);

//Read
router.get('/todos/today', ToDoItemController.getTodaysItems);

// Update
router.patch('/todos/:id', ToDoItemController.update);

export default router;

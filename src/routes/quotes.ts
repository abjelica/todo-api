/**
 * @author Ana Bjelica
 */
import express from 'express';

import QuoteController from '../controllers/QuoteController';

const router = express.Router({});

// Read
router.get('/quotes/random', QuoteController.getRandomQuote);

export default router;

/**
 * @author Ana Bjelica
 */
import { Request, Response } from "express";

import quoteService from '../services/QuoteService';

class ToDoItemController {

	async getRandomQuote (request: Request, response: Response): Promise<void> {
		try {
			response.send(await quoteService.getRandomQuote());
		} catch (error) {
			// TODO: Handle error.
			response.send({ success: false });
		}
	}
}

export default new ToDoItemController();

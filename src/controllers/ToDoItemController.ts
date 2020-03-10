/**
 * @author Ana Bjelica
 */
import { Request, Response } from "express";

import toDoItemService from '../services/ToDoItemService';
import ToDoItem from "../models/ToDoItem";

class ToDoItemController {
	async create (request: Request, response: Response): Promise<void> {
		try {
			const todoItem = new ToDoItem();

			todoItem.content = request.body.content;
			todoItem.isChecked = request.body.isChecked;

			await toDoItemService.create(todoItem);

			response.send({
				success: true
			});
		} catch (error) {
			// TODO: Handle error.
			response.send({ success: false });
		}
	}

	async getTodaysItems (request: Request, response: Response): Promise<void> {
		try {
			response.send(await toDoItemService.getTodaysItems());
		} catch (error) {
			// TODO: Handle error.
			response.send({ success: false });
		}
	}

	async update (request: Request, response: Response): Promise<void> {
		try {
			const todoItem = new ToDoItem();

			todoItem.id = request.params.id;
			todoItem.content = request.body.content;
			todoItem.isChecked = request.body.isChecked;

			await toDoItemService.update(todoItem);

			response.send({
				success: true
			});
		} catch (error) {
			// TODO: Handle error.
			response.send({ success: false });
		}
	}
}

export default new ToDoItemController();

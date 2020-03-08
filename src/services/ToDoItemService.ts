/**
 * @author Ana Bjelica
 */
import ToDoItem from '../models/ToDoItem';
import ToDoItemRepository from '../repository/ToDoItemRepository';

class ToDoItemService {
	/**
	 * Inserts a new to do item into repository.
	 * @param toDoItem Item that needs to be inserted.
	 */
	async create (toDoItem: ToDoItem): Promise<void> {
		// TODO: Check all fields.
		await ToDoItemRepository.create(toDoItem);
	}

	/**
	 * Returns today's todo items.
	 */
	async getTodaysItems (): Promise<Array<ToDoItem>> {
		const allToDoItems = await ToDoItemRepository.getAll();

		return allToDoItems.filter((toDoItem: any) => {
			const itemDateCreated = toDoItem.createdAt;
			itemDateCreated.setHours(0, 0, 0, 0);

			const currentDate = new Date();
			currentDate.setHours(0, 0, 0, 0);

			return itemDateCreated.getDate() == currentDate.getDate();
		});
	}

	/**
	 * Updates all the fields of the provided todo item.
	 * @param toDoItem Todo item that needs to be updated.
	 */
	async update (toDoItem: ToDoItem): Promise<void> {
		// TODO: Check all fields.
		return await ToDoItemRepository.update(toDoItem);
	}
}

export default new ToDoItemService();

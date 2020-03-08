/**
 * @author Ana Bjelica
 */
import ToDoItem from '../models/ToDoItem';
import ToDoItemDB from '../models/mongo/ToDoItem';

class ToDoItemRepository {
	async create (toDoItem: ToDoItem): Promise<void> {
		await ToDoItemDB.create(toDoItem);
	}

	async getAll (): Promise<Array<ToDoItem>> {
		return await ToDoItemDB.find();
	}

	async update (toDoItem: ToDoItem): Promise<void> {
		await ToDoItemDB.updateOne(
			{ _id: toDoItem.id },
			{ $set: toDoItem },
			{ multi: true }
		);
	}
}

export default new ToDoItemRepository();

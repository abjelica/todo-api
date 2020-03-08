/**
 * @author Ana Bjelica
 */
import { Document } from 'mongoose';

export default class ToDoItem extends Document {
	id: string;
	isChecked: boolean;
	content: string;
}

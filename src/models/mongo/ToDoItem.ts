/**
 * @author Ana Bjelica
 */
import mongoose from 'mongoose';

import { transform } from '../../utils/transform';
import ToDoItem from '../ToDoItem';

export default mongoose.model<ToDoItem>('toDoItem', new mongoose.Schema({
	isChecked: Boolean,
	content: String
}, {
	timestamps: true,
	toJSON: { transform },
}));

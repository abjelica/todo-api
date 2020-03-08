/**
 * @author Ana Bjelica
 */
import { Document } from 'mongoose';

export default class Quote extends Document {
	id: string;
	content: string;
	author: string;
}

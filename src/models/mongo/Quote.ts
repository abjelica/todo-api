/**
 * @author Ana Bjelica
 */
import mongoose from 'mongoose';

import { transform } from '../../utils/transform';
import Quote from '../Quote';

export default mongoose.model<Quote>('quote', new mongoose.Schema({
	content: String,
	author: String
}, {
	timestamps: true,
	toJSON: { transform },
}));

/**
 * @author Ana Bjelica
 */
import QuoteDB from '../models/mongoose/Quote';
import Quote from '../models/Quote';

class QuoteRepository {

	async getAll (): Promise<Array<Quote>>  {
		return await QuoteDB.find();
	}
}

export default new QuoteRepository();

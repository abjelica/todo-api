/**
 * @author Ana Bjelica
 */
import QuoteDB from '../models/mongo/Quote';
import Quote from '../models/Quote';

class QuoteRepository {

	async getAll (): Promise<Array<Quote>>  {
		return await QuoteDB.find();
	}
}

export default new QuoteRepository();

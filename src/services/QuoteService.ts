/**
 * @author Ana Bjelica
 */
import QuoteRepository from '../repository/QuoteRepository';
import Quote from '../models/Quote';

class QuoteService {
	/**
	 * Returns a random quote from the database.
	 */
	async getRandomQuote (): Promise<Quote> {
		const allQuotes = await QuoteRepository.getAll();

		return allQuotes[Math.floor(Math.random() * allQuotes.length)];
	}
}

export default new QuoteService();

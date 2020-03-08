/**
 * @author Ana Bjelica
 */
export function transform(doc: any, ret: any) {
	ret.id = ret._id;
	delete ret.__v;
	delete ret._id;
	delete ret.createdAt;
	delete ret.updatedAt;
}

export class inVCSocketTimeoutError extends Error {
	constructor(message: string) {
		super(message);

		this.name = 'inVCSocketTimeoutError';
		this.stack = (new Error(message)).stack;
	}
}
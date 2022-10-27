export default class ValidationError {
    public data: any;
    public code: number;
    public message: string;

    constructor(data: any, code?: number) {
        this.message = 'Validation Error';
        this.data = data;
        this.code = code ?? 400;
    }
}
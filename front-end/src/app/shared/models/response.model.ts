export class ResponseModel<T> {
    success: boolean;
    data: T;
    error: any;
}

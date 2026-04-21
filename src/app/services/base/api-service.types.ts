export interface ApiErrorResponse {
	isSuccess: false;
	error: {
		message: string;
		statusCode: number;
	};
}

export interface ApiSuccessResponse<T> {
	isSuccess: true;
	data: T;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
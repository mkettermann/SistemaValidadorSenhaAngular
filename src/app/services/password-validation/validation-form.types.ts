export interface ValidationFormData {
	name: string,
	email: string,
	password: string
}

export interface ValidationFormResponse {
	requestId: string, // uuid (Ex: 9a6168fd-abb3-4a22-aa0d-9a5037b035c8)
}
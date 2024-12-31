export interface ProductDetails {
	productName: string,
	quantity: number,
	size: 'Small' | 'Medium' | 'Large' | 'So large you can\'t eat it' | 'Too much for you to handle'
}

export interface DeliveryDetails {
	country: string,
	firstName: string
	lastName: string
	address: string
	apartment: string
	postalCode: string
	city: string
}
export interface  PaymentDetails {
	cardNumber: string,
	expirationDay: string
	securityCode: string
	nameOnCard: string
}

export interface TestEnviroment {
	productsP: ProductDetails[]
	productsN: ProductDetails[]
	contact: string
	delivery: DeliveryDetails
	payment: PaymentDetails
	totalAmountForPay: string

}
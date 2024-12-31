import { TestEnviroment } from '../setup/types'

export const WRONG_EMAIL_ERROR_MSG = "Enter a valid email";
export const WRONG_CARD_NUMBER_ERROR_MSG = "Enter a valid card number";

export const DEV: TestEnviroment = <TestEnviroment>{
	productsP: [
		{ productName: "Dropit Hamburger (QA Automation)", quantity: 2, size: "Medium" },
		{ productName: "Dropit Hamburger (QA Automation)", quantity: 1, size: "So large you can\'t eat it"},
		{ productName: "Dropit Chips (QA Automation)", quantity: 1, size: "Large" },
		{ productName: "Dropit Chips (QA Automation)", quantity: 1, size:"Too much for you to handle"},
	],
	productsN: [
		{ productName: "Hamburger", quantity: 1, size: "Medium" },
		{ productName: "Dropit Chips (QA Automation)", quantity: 1, size: "Medium" },
	],
	contact: '0533872453',
	delivery: {
		country: "Israel",
		firstName: "Nehama",
		lastName: "Stefanski",
		address: "Harav Kook 28",
		apartment: "6",
		postalCode: "1111111",
		city: "BneyBrak"
	},
	payment: {
		cardNumber: "1",
		expirationDay:"12/26",
		securityCode: "777",
		nameOnCard: "Bogus Gateway"
	},
	totalAmountForPay: '53.99'
}

export const STAGING: TestEnviroment = <TestEnviroment>{
	productsP: [
		{ productName: "Dropit Hamburger (QA Automation)", quantity: 2, size: "Medium" },
		{ productName: "Dropit Hamburger (QA Automation)", quantity: 1, size: "So large you can\'t eat it" },
		{ productName: "Dropit Chips (QA Automation)", quantity: 1, size: "Large" },
		{ productName: "Dropit Chips (QA Automation)", quantity: 1, size: "Too much for you to handle" },
	],
	productsN: [
		{ productName: "Hamburger", quantity: 1, size: "Medium" },
		{ productName: "Dropit Chips (QA Automation)", quantity: 1, size: "Medium" },
	],
	delivery: {
		country: "Israel",
		firstName: "Nehama",
		lastName: "Stefanski",
		address: "Harav Kook 28",
		apartment: "6",
		postalCode: "1111111",
		city: "BneyBrak"
	},
	payment: {
		cardNumber: "1",
		expirationDay: "12/26",
		securityCode: "777",
		nameOnCard: "Bogus Gateway"
	}
}; 

export const MAIN: TestEnviroment = <TestEnviroment>{
	productsP: [
		{ productName: "Dropit Hamburger (QA Automation)", quantity: 2, size: "Medium" },
		{ productName: "Dropit Hamburger (QA Automation)", quantity: 1, size: "So large you can\'t eat it" },
		{ productName: "Dropit Chips (QA Automation)", quantity: 1, size: "Large" },
		{ productName: "Dropit Chips (QA Automation)", quantity: 1, size: "Too much for you to handle" },
	],
	productsN: [
		{ productName: "Hamburger", quantity: 1, size: "Medium" },
		{ productName: "Dropit Chips (QA Automation)", quantity: 1, size: "Medium" },
	],
	delivery: {
		country: "Israel",
		firstName: "Nehama",
		lastName: "Stefanski",
		address: "Harav Kook 28",
		apartment: "6",
		postalCode: "1111111",
		city: "BneyBrak"
	},
	payment: {
		cardNumber: "1",
		expirationDay: "12/26",
		securityCode: "777",
		nameOnCard: "Bogus Gateway"
	}
}; 

export const ENVIRONMENTS_INPUTS = {
	DEV:DEV,
	STAGING:STAGING,
	MAIN:MAIN
}
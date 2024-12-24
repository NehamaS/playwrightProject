interface TableRow {
	title: string;
	work: string;
	salary: string;
}

interface TestEnviroment {
	emailAndPassword: {
		email: string
		wrongPassword:string
	}
	tableData:TableRow[]
}

export const DEV: TestEnviroment = <TestEnviroment>{
	emailAndPassword: {
		email: "nehama.dev@gmail.com",
		wrongPassword: "Shuki12st"
	},
	tableData: [{
		title: 'Software Development Engineer in Test',
		work: 'Automation',
		salary: '$150,000+'
	},
	{
		title: 'Automation Testing Architect',
		work: 'Automation',
		salary: '$120,000+'
	},
	{
		title: 'Quality Assurance Engineer',
		work: 'Manual',
		salary: '$50,000+'
	}]
}

export const STAGING: TestEnviroment = <TestEnviroment>{
	emailAndPassword: {
		email: "nehama.staging@gmail.com",
		wrongPassword: "Shuki12st"
	},
	tableData: [{
		title: 'Software Development Engineer in Test',
		work: 'Automation',
		salary: '$150,000+'
	},
	{
		title: 'Automation Testing Architect',
		work: 'Automation',
		salary: '$120,000+'
	},
	{
		title: 'Quality Assurance Engineer',
		work: 'Manual',
		salary: '$50,000+'
	}]
}; 

export const MAIN: TestEnviroment = <TestEnviroment>{
	emailAndPassword: {
		email: "nehama.main@gmail.com",
		wrongPassword: "Shuki12st"
	},
	tableData: [{
		title: 'Software Development Engineer in Test',
		work: 'Automation',
		salary: '$150,000+'
	},
	{
		title: 'Automation Testing Architect',
		work: 'Automation',
		salary: '$120,000+'
	},
	{
		title: 'Quality Assurance Engineer',
		work: 'Manual',
		salary: '$50,000+'
	}]
}; 


export const ENVIRONMENTS_INPUTS = {
	DEV:DEV,
	STAGING:STAGING,
	MAIN:MAIN
}
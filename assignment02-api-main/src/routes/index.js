import { Router } from "express"
const router = Router()

router.get('/', (request, response) => {
	//JSON = JavaScript Object Notation
	let person = {
		name: "Abby", 
		age: 24, 
	}
response.json(person)
})

export default router
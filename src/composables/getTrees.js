import { ref } from "vue"
import axios from "axios"   


const getTrees = () => {
		

    const load = async () => {
			let data = await axios
				.get("http://127.0.0.1:8000/api/v1/trees")
				.then(response => {
						trees.value = response.data
				})
				.catch(error => {
						error.value = error
						console.log(error)
				})
		}
		load()
		
		return { trees, error }
}

export default getTrees
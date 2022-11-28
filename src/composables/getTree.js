import { ref } from "vue"
import axios from "axios"   


const getTree = (id) => {
    const tree = ref(null)
    const error = ref(null)


    const load = async () => {
			let data = await axios
				.get("http://127.0.0.1:8000/api/v1/tree/" + id)
				.then(response => {
						tree.value = response.data
				})
				.catch(error => {
						error.value = error
						console.log(error)
				})
		}
		load()
		
		return { tree, error }
}

export default getTree
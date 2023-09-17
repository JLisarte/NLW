// conecta back-end com front-end
import axios from "axios"

export const server = axios.create({
  baseURL: "http://localhost:3333/",
})

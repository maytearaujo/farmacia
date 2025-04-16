import axios from "axios";

// Criando conexão com o backend
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}
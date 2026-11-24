import type { Categoria } from "../types/Categorias"
import { api } from "./api"

const categoriasService = {
    async listar (){
        const resposta = await api.get<Categoria[]>('categorias')
    }
}
export default categoriasService
import type { Produto } from "../types/Produto"
import { api } from "./api"

const produoService = {
    async listar (){ 
        const resposta = await api.get <Produto[]>('produtos');
        return resposta.data;
    }
}
export default produoService
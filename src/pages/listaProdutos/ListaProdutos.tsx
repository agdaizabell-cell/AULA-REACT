import './ListaProdutos.css'
import imgProduto from '../../assets/img/produtos/le_grand_chocolat.png'
import Card from '../../components/card/Card';
import { useEffect, useState } from 'react';
import type { Produto } from '../../types/Produto';
import produtosService from '../../services/produtosService';
import { useSearchParams } from 'react-router-dom';

function ListaProdutos() {
    const[produtos,setprodutos] = useState<Produto[]>([]);
    const [erro,setErro] = useState ('');
    const [carregando, setCarregando]= useState(true);
    const[parametros] = useSearchParams();
    const busca = (parametros.get('q')?? '').toLocaleLowerCase('pt-br')
    const categoria = Number(parametros.get('categoria'))
    
    useEffect (() => {
        Promise.call
        produtosService.listar()
        .then(lista => {setprodutos(lista), console.log (lista)})
        .catch(() => setErro ("Não foi possivel carregar os produtos!"))
        .finally(()=> setCarregando(false))


    }, [])

    const visiveis = produtos.filter(produtos =>
        produtos.ativo &&
        (! categoria || produtos.categoriaIds.includes(categoria)) && 
        (! busca|| `${produtos.nome}${produtos.descricaoCurta}`.toLocaleLowerCase ('pt-br').includes(busca))
    )




    return (
        <>
            <main>
                <section className="prod_banner" />
                <section className="container prod_container">
                    <div className="box_h2">
                        <h1>Nossos Bolos</h1>
                        <span>Nos Gâteaux</span>
                        <hr />
                    </div>
                    {carregando && <p> carregando produtos... </p>}
                    {!carregando && !erro && produtos.length === 0 &&
                    
                    <p>Nenhum produto encontrado</p>
                    }
                    <div className="prod_cards">
                        {visiveis.map
                        (produtos => {return <Card 
                            id={produtos.id}
                             key={produtos.id}
                            imgProduto={`http://localhost:3000${produtos.imagem}`}
                            nome={produtos.nome}
                             descricao={produtos.descricaoCurta} 
                             valor={produtos.precoPorKg} 
                             quantidadeAvaliacoes={10}
                              nota={9.5}/>})} 
                       
                    </div>
                </section>
            </main>
        </>

    )
}

export default ListaProdutos;
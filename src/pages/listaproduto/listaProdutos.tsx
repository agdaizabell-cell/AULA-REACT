
import './listaProdutos.css'
import img1 from '../../assets/img/produtos/le_grand_chocolat.png'
import icones1 from '../../assets/icones/user.svg'
import icones2 from '../../assets/icones/star.svg'

function listaProduto(){
    return(
        <>
       
        <main>
        <section className="prod_banner" />
  <section className="container prod_container">
    <div className="box_h2">
      <h1>Nossos Bolos</h1>
      <span>Nos Gâteaux</span>
      <hr />
    </div>
    <div className="prod_cards">
      <article className="prod_card">
        <figure>
          <img
            src={img1}
            alt="foto do produto"
            />
        </figure>
        <h2>
          <a href="../detProduto/index.html">Le Grand Chocolat</a>
        </h2>
        <p className="card_desc">
          Mousse de chocolate belga 70%, praliné de avelãs e biscuit de cacau.
        </p>
        <p className="card_rodape">
          <data value={185.0}>R$ 185,00 / kg</data>
          <span className="card_av">
            <img src= {icones1} alt="icone de usuarios" />
            <data value={10}>10</data>
            <img src={icones2} alt="icone de estrela" />
            <data value="9.5">9,5</data>
          </span>
        </p>
      </article>
    </div>
  </section>
</main>


</>
    )
}
export default listaProduto;
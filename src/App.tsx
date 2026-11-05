import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import ListaProdutos from "./pages/listaproduto/listaProdutos"
import DetProduto from "./pages/detalheProduto/DetProduto";
import Login from "./pages/login/Login";
import AdmProdutos from "./pages/AdmProdutos/AdmProdutos";

export default function App (){
    return(
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/produtos" element={<ListaProdutos/>}/>
            <Route path="/detalheProduto" element={<DetProduto/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/AdmProdutos" element={<AdmProdutos/>}/>
            <Route path="*" element={<img className="container" src="https://cdn.svgator.com/images/2024/04/animated-cockatoo-error-page.gif" alt="Imagem não encontrado"/>}/>
        </Routes>
        <Footer />
        </>
    )
}
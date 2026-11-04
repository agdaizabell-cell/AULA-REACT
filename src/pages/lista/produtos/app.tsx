import { Route, Routes } from "react-router-dom";
import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";
import Home from "../../home/home";
import ListaProdutos from "./listaProdutos";

export default function App (){
    return(
        <>
        <Header />

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/produtos" element={<ListaProdutos/>}/>
        </Routes>
        <Footer />
        </>
    )
}
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage';
import Blog3Cards from './pages/Blog3Cards/Blog_3_cards';
import PostPage from './pages/PostPage/PostPage';
import OrderMessage from './pages/OrderMessage/OrderMessage';
import TextPage from './pages/TextPage/TextPage';
import ProductPage from './pages/ProductPage/ProductPage';
import Catalog from "./pages/Catalog/Catalog";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contacts from './pages/Contacts/Contacts';
import Error from './pages/Error/Error';
import MainRules from "./components/MainRules/MainRules";
import Desclaimer from "./components/Desclaimer/Desclaimer";
import ContactInformation from "./components/ContactInformation/ContactInformation";


function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="blog_3_cards" element={<Blog3Cards/>}/>
                    <Route path="post_page" element={<PostPage/>}/>
                    <Route path="order_message" element={<OrderMessage/>}/>
                    <Route path="text_page" element={<TextPage/>}>
                        <Route path="main_rules" element={<MainRules/>}/>
                        <Route path="desclaimer" element={<Desclaimer/>}/>
                        <Route path="contact_information" element={<ContactInformation/>}/>
                    </Route>
                    <Route path="productPage" element={<ProductPage/>}/>
                    <Route path="catalog" element={<Catalog/>}/>
                    <Route path="about_us" element={<AboutUs/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="error" element={<Error/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;

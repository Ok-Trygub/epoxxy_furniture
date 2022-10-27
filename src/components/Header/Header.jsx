import {React, useState} from 'react';
import {useNavigate} from "react-router-dom";
import UnaLogo from '../../assets/images/logo_una.png';
import SearchBtn from '../../assets/images/header/search_btn.jpg';
import LoginBtn from '../../assets/images/header/login_btn.jpg';
import BasketBtn from '../../assets/images/header/basket_btn.jpg';
import './Header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DropdownNewIn from './HeaderDropdownItems/DropdownNewIn';
import DropdownSofas from './HeaderDropdownItems/DropdownSofas';
import DropdownTables from './HeaderDropdownItems/DropdownTables';
import DropdownBeds from './HeaderDropdownItems/DropdownBeds';
import SearchIcon from '../../assets/images/header/searchBtnActive.jpg';
import CloseSearch from '../../assets/images/header/mobMenuClose.png';

const Header = () => {
    const [isSearch, setIsSearch] = useState(false);
    const navigate = useNavigate();

    const searchHandler = () => {
        setIsSearch(!isSearch);
    }

    const renderHeaderIcons = () => (
        <div className='d-none d-lg-flex align-items-center'>
            <span className='header__phone'>(704) 555-0127</span>
            <img src={SearchBtn} alt="search_btn" className='navIcon'
                 onClick={searchHandler}/>
            <img src={LoginBtn} alt="login_btn" className='mx-2 navIcon'/>
            <img src={BasketBtn} alt="basket_btn" className='navIcon'/>
        </div>
    )

    const renderSearch = () => (
        <div className='d-flex align-items-center'>
            <img src={SearchIcon} alt="SearchIcon" className='searchIcon'/>
            <label htmlFor="search"></label>
            <input type="text" id='search' placeholder='Search request...'
                   className='header__search'
            />
            <img src={CloseSearch} alt="SearchIcon" className='searchIcon'
                 onClick={searchHandler}/>
        </div>
    )

    return (
        <header className='header'>
            <Navbar expand="lg" className='bg__white'>
                <Container>
                    <div className='header__mobMenuWrapper'>
                        <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Brand>
                            <img src={UnaLogo} alt='una_logo' onClick={() => navigate('/')}/>
                        </Navbar.Brand>
                    </div>

                    <div className='d-lg-none'>
                        <span className='header__phone'>(704) 555-0127</span>
                    </div>

                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-0"
                            navbarScroll
                        >
                            <DropdownNewIn/>
                            <DropdownSofas/>
                            <DropdownTables/>
                            <DropdownBeds/>
                        </Nav>

                        {isSearch ? renderSearch() : renderHeaderIcons()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;

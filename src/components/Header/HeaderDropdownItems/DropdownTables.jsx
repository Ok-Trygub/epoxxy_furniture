import React from 'react';
import './Dropdown.scss';
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

const DropdownTables = () => {
    return (
        <NavDropdown title='tables' id="navbarScrollingDropdown"
                     className='headerDropdown headerDropdownTitle text-uppercase fw-medium'>
            <Container className='p-0'>
                <div className='d-lg-none'>
                    <div className='d-flex headerDropdown__blocksWrapper'>
                        <div className='d-flex flex-column d-lg-block headerDropdown__columnWrapper'>
                            <NavDropdown.Item
                                className='headerDropdown__item fw-bold test'>drinkWare</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Glassware</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Barware</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Mugs</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Wine
                                Racks</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Water
                                Bottles</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Travel
                                Cups</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Teapots</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Jugs &
                                Carafes</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item p-0'>
                                <span className='headerDropdown__lastItem'>Go to all</span></NavDropdown.Item>
                        </div>
                        <div className='d-flex flex-column headerDropdown__columnWrapper'>
                            <NavDropdown.Item
                                className='headerDropdown__item fw-bold'>TableWare</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Dinnerware</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Serveware</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Cutlery</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Glassware</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Table
                                Linen</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item p-0'>
                                <span className='headerDropdown__lastItem'>Go to all</span></NavDropdown.Item>
                        </div>
                    </div>

                    <div className='d-flex headerDropdown__blocksWrapper'>
                        <div className='d-flex flex-column headerDropdown__columnWrapper'>
                            <NavDropdown.Item
                                className='headerDropdown__item fw-bold'>Cook&bake Ware</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Pots &
                                Pans</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Frying
                                Pans</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Baking
                                Dishes</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Silicone
                                forms</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item p-0'>
                                <span className='headerDropdown__lastItem'>Go to all</span></NavDropdown.Item>
                        </div>
                        <div className='d-flex flex-column d-lg-block headerDropdown__columnWrapper'>
                            <NavDropdown.Item
                                className='headerDropdown__item fw-bold'>kitchen
                                accessories</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Utensils</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Food
                                Storage</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Racks &
                                Shelves</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Wine
                                Racks</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Bins</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item p-0'>
                                <span className='headerDropdown__lastItem'>Go to all</span></NavDropdown.Item>
                        </div>
                    </div>
                    <div className='d-flex headerDropdown__blocksWrapper'>
                        <div className='d-flex flex-column headerDropdown__columnWrapper'>
                            <NavDropdown.Item
                                className='headerDropdown__item fw-bold'>drinkWare</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Glassware</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Barware</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Mugs</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Wine
                                Racks</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Travel
                                Cups</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Teapots</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Jugs &
                                Carafes</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item p-0'>
                                <span className='headerDropdown__lastItem'>Go to all</span></NavDropdown.Item>
                        </div>
                        <div className='d-flex flex-column headerDropdown__columnWrapper'>
                            <NavDropdown.Item
                                className='headerDropdown__item fw-bold'>TableWare</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Dinnerware</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Serveware</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Cutlery</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Glassware</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item'>Table
                                Linen</NavDropdown.Item>
                            <NavDropdown.Item
                                className='text-capitalize headerDropdown__item p-0'>
                                <span className='headerDropdown__lastItem'>Go to all</span></NavDropdown.Item>
                        </div>
                    </div>
                </div>
                <div className='d-none d-lg-flex justify-content-lg-between'>
                    <div className='d-flex flex-column headerDropdown__columnWrapper'>
                        <NavDropdown.Item
                            className='headerDropdown__item  fw-bold'>TableWare</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Dinnerware</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Serveware</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Cutlery</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Glassware</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Table
                            Linen</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item p-0'>
                            <span className='headerDropdown__lastItem'>Go to all</span></NavDropdown.Item>
                    </div>
                    <div className='d-flex flex-column d-lg-block headerDropdown__columnWrapper'>
                        <NavDropdown.Item
                            className='headerDropdown__item fw-bold'>drinkWare</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Glassware</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Barware</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Mugs</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Wine Racks</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Water
                            Bottles</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Travel
                            Cups</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Teapots</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Jugs &
                            Carafes</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item p-0'>
                            <span className='headerDropdown__lastItem'>Go to all</span></NavDropdown.Item>
                    </div>
                    <div className='d-flex flex-column headerDropdown__columnWrapper'>
                        <NavDropdown.Item
                            className='headerDropdown__item fw-bold'>Cook&bake Ware</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Pots &
                            Pans</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Frying
                            Pans</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Baking
                            Dishes</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Silicone
                            forms</NavDropdown.Item>

                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item p-0'>
                            <span className='headerDropdown__lastItem'>Go to all</span></NavDropdown.Item>
                    </div>
                    <div className='d-flex flex-column d-lg-block headerDropdown__columnWrapper'>
                        <NavDropdown.Item
                            className='headerDropdown__item fw-bold'>kitchen
                            accessories</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Utensils</NavDropdown.Item>
                        <NavDropdown.Item href="#action3"
                                          className='text-capitalize headerDropdown__item'>Food
                            Storage</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Racks &
                            Shelves</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Wine Racks</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Bins</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item p-0'>
                            <span className='headerDropdown__lastItem'>Go to all</span></NavDropdown.Item>
                    </div>
                    <div className='d-flex flex-column headerDropdown__columnWrapper'>
                        <NavDropdown.Item
                            className='headerDropdown__item fw-bold'>drinkWare</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Glassware</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Barware</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Mugs</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Wine Racks</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Travel
                            Cups</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Teapots</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Jugs &
                            Carafes</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item p-0'>
                            <span className='headerDropdown__lastItem'>Go to all</span></NavDropdown.Item>
                    </div>
                    <div className='d-flex flex-column headerDropdown__columnWrapper'>
                        <NavDropdown.Item
                            className='headerDropdown__item fw-bold'>TableWare</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Dinnerware</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Serveware</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Cutlery</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Glassware</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item'>Table
                            Linen</NavDropdown.Item>
                        <NavDropdown.Item
                            className='text-capitalize headerDropdown__item p-0'>
                            <span className='headerDropdown__lastItem'>Go to all</span></NavDropdown.Item>
                    </div>
                </div>
            </Container>
        </NavDropdown>
    );
};

export default DropdownTables;

import React from 'react';
import './Filters.scss';
import 'rsuite/dist/rsuite.min.css'
import {RangeSlider} from 'rsuite';

import Divider from '../../assets/images/greyDivider.png';

const Filters = () => {

    return (
        <div className='filters text-uppercase fw-medium'>
            <div className='filters__categoryWrapper'>
                <h2 className='filters__title'>Price</h2>
                <img src={Divider} alt="divider"/>

                <RangeSlider defaultValue={[50, 1200]} className='mt-4'/>

                <form className='d-flex filters__priceWrapper align-items-center'>
                    <label htmlFor="minPrice"></label>
                    <input type="text" placeholder='$50' id='minPrice' className='filters__priceInput'/>

                    <span className='px-1 px-xxl-2'>-</span>

                    <label htmlFor="maxPrice"></label>
                    <input type="text" placeholder='$1200' id='maxPrice' className='filters__priceInput'/>

                    <button className='filters__priceBtn text-uppercase'>Ok</button>
                </form>
            </div>

            <div className='filters__categoryWrapper'>
                <h2 className='filters__title'>Material</h2>
                <img src={Divider} alt="divider" className='filters__divider'/>

                <div className='d-flex'>
                    <form>
                        <div className='mb-3'>
                            <input id="metal" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="metal">metal</label>
                        </div>
                        <div className='mb-3'>
                            <input id="plastic" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="plastic">plastic</label>
                        </div>

                        <div className='mb-3'>
                            <input id="leather" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="leather">leather</label>
                        </div>
                        <div className='mb-3'>
                            <input id="marble" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="marble">marble</label>
                        </div>
                        <div className='mb-3'>
                            <input id="glass" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="glass">glass</label>
                        </div>
                        <div>
                            <input id="rattan" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="rattan">rattan</label>
                        </div>
                    </form>
                </div>
            </div>

            <div className='filters__categoryWrapper'>
                <h2 className='filters__title'>color</h2>
                <img src={Divider} alt="divider" className='filters__divider'/>

                <div className='d-flex'>
                    <form>
                        <div className='mb-3'>
                            <input id="white" type="checkbox"
                                   className='filters__checkboxInput filters__whiteCheckboxInput'/>
                            <label htmlFor="white">white</label>
                        </div>
                        <div className='mb-3'>
                            <input id="black" type="checkbox"
                                   className='filters__checkboxInput filters__blackCheckboxInput'/>
                            <label htmlFor="black">black</label>
                        </div>
                        <div className='mb-3'>
                            <input id="Gold" type="checkbox"
                                   className='filters__checkboxInput filters__goldCheckboxInput'/>
                            <label htmlFor="Gold">Gold</label>
                        </div>
                        <div className='mb-3'>
                            <input id="orange" type="checkbox"
                                   className='filters__checkboxInput filters__orangeCheckboxInput'/>
                            <label htmlFor="orange">orange</label>
                        </div>
                        <div className='mb-3'>
                            <input id="light beige" type="checkbox"
                                   className='filters__checkboxInput filters__beigeCheckboxInput'/>
                            <label htmlFor="light beige">light beige</label>
                        </div>
                        <div>
                            <input id="dark gray" type="checkbox"
                                   className='filters__checkboxInput filters__grayCheckboxInput'/>
                            <label htmlFor="dark gray">dark gray</label>
                        </div>
                    </form>
                </div>
            </div>

            <div className='filters__categoryWrapper'>
                <h2 className='filters__title'>collection</h2>
                <img src={Divider} alt="divider" className='filters__divider'/>

                <div className='d-flex'>
                    <form>
                        <div className='mb-3'>
                            <input id="minimalism" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="minimalism">minimalism</label>
                        </div>
                        <div className='mb-3'>
                            <input id="eco style" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="eco style">eco style</label>
                        </div>
                        <div className='mb-3'>
                            <input id="glam" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="glam">glam</label>
                        </div>
                        <div className='mb-3'>
                            <input id="royal" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="royal">royal</label>
                        </div>
                        <div className='mb-3'>
                            <input id="pink rose" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="pink rose">pink rose</label>
                        </div>
                        <div>
                            <input id="hi tech" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="hi tech">hi tech</label>
                        </div>
                    </form>
                </div>
            </div>

            <div className='filters__categoryWrapper'>
                <h2 className='filters__title'>additional</h2>
                <img src={Divider} alt="divider" className='filters__divider'/>

                <div className='d-flex'>
                    <form>
                        <div className='mb-3'>
                            <input id="set" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="set">set</label>
                        </div>
                        <div className='mb-3'>
                            <input id="combined" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="combined">combined</label>
                        </div>
                        <div className='mb-3'>
                            <input id="transformer" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="transformer">transformer</label>
                        </div>
                        <div>
                            <input id="frameless" type="checkbox" className='filters__checkboxInput'/>
                            <label htmlFor="frameless">frameless</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Filters;

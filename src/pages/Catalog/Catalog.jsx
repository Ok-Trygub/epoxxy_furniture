import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Catalog.scss';
import RouteLink from "../../components/RouteLink/RouteLink";
import Divider from '../../assets/images/extraLongDivider.png';
import FurnitureSort from '../../components/FurnitureSort/FurnitureSort'
import Chair from '../../assets/images/Catalog/chair.png';
import Lamps from '../../assets/images/Catalog/whiteLamps.png';
import Set from '../../assets/images/Catalog/set.png';
import Damien from '../../assets/images/Catalog/damien.png';
import DarkLamps from '../../assets/images/Catalog/darkLamps.png';
import YellowSofa from '../../assets/images/Catalog/yellowSofa.png';
import PinkSofa from '../../assets/images/Catalog/pinkSofa.png';
import SideBoard from '../../assets/images/Catalog/sideboard.png';
import FloorLamps from '../../assets/images/Catalog/floorLamps.png';
import Table from '../../assets/images/Catalog/damien.png';
import CoffeeTable from '../../assets/images/Catalog/coffeeTable.png';
import GreenSofa from '../../assets/images/Catalog/greenSofa.png';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import NewTag from '../../assets/images/newTag.png';
import PopularTag from '../../assets/images/popular_tag.png';
import HotTag from '../../assets/images/hot_tag.png';
import ArrowDown from '../../assets/images/arrowDown.png';
import Pagination from 'react-bootstrap/Pagination';
import LinkButton from "../../components/LinkButton/LinkButton";
import Filters from "../../components/Filters/Filters";
import cn from "classnames";


const Catalog = () => {
    const [filtersIsOpen, setFiltersIsOpen] = useState(false);
    const [sortIsOpen, setSortIsOpen] = useState(false);

    const displayMobFilters = cn('d-lg-block !important, col-lg-4 order-1 order-lg-2', {
        'd-block': filtersIsOpen,
        'd-none': !filtersIsOpen
    })

    const displayMobSort = cn('furniture__sortWrapper col-12 mb-4 d-lg-none !important', {
        'd-block': sortIsOpen
    })

    const btnFilterStyle = cn('furniture__btn w-100 text-uppercase', {
        'furniture__activeBtn': filtersIsOpen
    })

    const btnSortStyle = cn('furniture__btn w-100 text-uppercase', {
        'furniture__activeBtn': sortIsOpen
    })


    return (
        <div className='furniture'>
            <Container>
                <RouteLink
                    subLink='Furniture'
                />
                <h1 className='text-uppercase fw-medium furniture__title'>Furniture</h1>

                <Row>
                    <div className='d-none d-lg-flex mb-5'>
                        <FurnitureSort/>
                    </div>
                </Row>

                <div className='furniture__mobFiltersWrapper d-flex d-lg-none gap-3 mb-4'>

                    <button className={btnFilterStyle}
                            onClick={
                                () => {
                                    setFiltersIsOpen(!filtersIsOpen)
                                    setSortIsOpen(false)
                                }
                            }
                    >filters
                    </button>

                    <button className={btnSortStyle}
                            onClick={
                                () => {
                                    setSortIsOpen(!sortIsOpen)
                                    setFiltersIsOpen(false)
                                }
                            }
                    >sort
                    </button>
                </div>

                <Row>
                    <Col className='order-2 order-lg-1 col-lg-8'>
                        <div className='d-lg-flex'>
                            <CardCarousel
                                carouselImgSrc1={Chair}
                                carouselImgSrc2={Set}
                                cardTitle='Tirado chair'
                                oldPrice='$280'
                            />
                            <CardCarousel
                                carouselImgSrc1={Lamps}
                                carouselImgSrc2={Set}
                                cardTitle='Kaleido'
                                oldPrice='$240'
                                newPrice='$199'
                                tag={HotTag}
                            />
                            <CardCarousel
                                carouselImgSrc1={Damien}
                                carouselImgSrc2={Set}
                                cardTitle='damien'
                                oldPrice='$310'
                            />
                        </div>

                        <div className='d-lg-flex'>
                            <CardCarousel
                                carouselImgSrc1={Set}
                                carouselImgSrc2={Set}
                                cardTitle='emmi set'
                                oldPrice='$240'
                                tag={PopularTag}
                            />
                            <CardCarousel
                                carouselImgSrc1={DarkLamps}
                                carouselImgSrc2={Set}
                                cardTitle='caleido lamp'
                                oldPrice='$355'
                            />
                            <CardCarousel
                                carouselImgSrc1={YellowSofa}
                                carouselImgSrc2={Set}
                                cardTitle='haru sofa bef'
                                oldPrice='$460'
                                tag={NewTag}
                            />
                        </div>


                        <div className='d-lg-flex'>
                            <CardCarousel
                                carouselImgSrc1={PinkSofa}
                                carouselImgSrc2={Set}
                                cardTitle='emmi set'
                                oldPrice='$240'
                                tag={HotTag}
                            />
                            <CardCarousel
                                carouselImgSrc1={SideBoard}
                                carouselImgSrc2={Set}
                                cardTitle='emmi set'
                                oldPrice='$240'
                            />

                            <CardCarousel
                                carouselImgSrc1={FloorLamps}
                                carouselImgSrc2={Set}
                                cardTitle='emmi set'
                                oldPrice='$240'
                                tag={NewTag}
                            />
                        </div>


                        <div className='d-lg-flex'>
                            <CardCarousel
                                carouselImgSrc1={Table}
                                carouselImgSrc2={Set}
                                cardTitle='emmi set'
                                oldPrice='$240'
                                tag={HotTag}
                            />
                            <CardCarousel
                                carouselImgSrc1={CoffeeTable}
                                carouselImgSrc2={Set}
                                cardTitle='emmi set'
                                oldPrice='$240'
                            />
                            <CardCarousel
                                carouselImgSrc1={GreenSofa}
                                carouselImgSrc2={Set}
                                cardTitle='emmi set'
                                oldPrice='$240'
                            />
                        </div>

                        <div className='d-flex justify-content-center'>
                            <Pagination className='catalogPagination'>
                                <Pagination.Prev/>
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item active>{4}</Pagination.Item>
                                <Pagination.Next/>
                            </Pagination>
                        </div>
                        <img src={Divider} alt="divider" className='furniture__divider w-100'/>
                        <div className='d-flex justify-content-center'>
                            <LinkButton
                                imgSource={ArrowDown}
                                btnText='show more'
                            />
                        </div>
                    </Col>
                    <Col className={displayMobFilters}>
                        <Filters/>
                    </Col>
                    <Col className={displayMobSort}>
                        <div className='d-flex align-items-center furniture__sortItemWrapper fw-medium'>
                            <span className='furniture__sortName'>Price: </span>
                            <span className='text-uppercase furniture__sortValue fw-bold'>low to high</span>
                        </div>

                        <div className='d-flex align-items-center furniture__sortItemWrapper fw-medium'>
                            <span className='furniture__sortName'>Price: </span>
                            <span className='text-uppercase furniture__sortValue fw-bold'>high to low</span>
                        </div>

                        <div className='d-flex align-items-center furniture__sortItemWrapper fw-medium'>
                            <span className='text-uppercase furniture__sortValue fw-bold'>Bestselling</span>
                        </div>

                        <div className='d-flex align-items-center furniture__sortItemWrapper fw-medium'>
                            <span className='text-uppercase furniture__sortValue fw-bold'>Relevance</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Catalog;

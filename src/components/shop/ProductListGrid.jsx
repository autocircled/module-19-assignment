import { Link } from "react-router-dom"

const ProductListGrid = () => {
    const data = [
        {
            image: [
                "assets/images/product-image/1.webp",
                "assets/images/product-image/1.webp"
            ],
            title: "Modern Smart Phone",
            price: ["$38.50"],
            link: "single-product",
            category: "Accessories",
            remark: "New",
        },
        {
            image: [
                "assets/images/product-image/2.webp",
                "assets/images/product-image/2.webp"
            ],
            title: "Bluetooth Headphone",
            price: [
                "$48.50",
                "$38.50",
            ],
            link: "single-product",
            category: "Headphone",
            remark: "New",
            sale: "-10%"
        },
        {
            image: [
                "assets/images/product-image/3.webp",
                "assets/images/product-image/3.webp"
            ],
            title: "Smart Music Box",
            price: ["$38.50"],
            link: "single-product",
            category: "Accessories",
            remark: "New",
        },
        {
            image: [
                "assets/images/product-image/4.webp",
                "assets/images/product-image/1.webp",
            ],
            title: "Air Pods 25Hjkl Black",
            price: ["$38.50"],
            link: "single-product",
            category: "Accessories",
            remark: "New",
        },
        {
            image: [
                "assets/images/product-image/5.webp",
                "assets/images/product-image/5.webp",
            ],
            title: "Smart Hand Watch",
            price: ["$38.50"],
            link: "single-product",
            category: "Accessories",
        },
        {
            image: [
                "assets/images/product-image/6.webp",
                "assets/images/product-image/6.webp"
            ],
            title: "Smart Table Camera",
            price: [
                "$138.50",
                "$112.50",
            ],
            link: "single-product",
            category: "Accessories",
            remark: "New",
            sale: "-8%"
        },
        {
            image: [
                "assets/images/product-image/7.webp",
                "assets/images/product-image/1.webp",
            ],
            title: "Round Pocket Router",
            price: ["$38.50"],
            link: "single-product",
            category: "Accessories",
            remark: "New",
        },
        {
            image: [
                "assets/images/product-image/8.webp",
                "assets/images/product-image/8.webp",
            ],
            title: "Power Bank 10000Mhp",
            price: [
                "$260.00",
                "$238.50"
            ],
            link: "single-product",
            category: "Accessories",
            sale: "-5%",
        },
    ]

    return (
        <div className="shop-category-area pt-100px pb-100px">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <div className="shop-top-bar d-flex">
                            <p className="compare-product"> <span>12</span> Product Found of <span>30</span></p>

                            <div className="shop-tab nav">
                                <button className="active" data-bs-target="#shop-grid" data-bs-toggle="tab">
                                    <i className="fa fa-th" aria-hidden="true"></i>
                                </button>
                                <button data-bs-target="#shop-list" data-bs-toggle="tab">
                                    <i className="fa fa-list" aria-hidden="true"></i>
                                </button>
                            </div>

                            <div className="select-shoing-wrap d-flex align-items-center">
                                <div className="shot-product">
                                    <p>Sort By:</p>
                                </div>

                                <div className="header-bottom-set dropdown">
                                    <button className="dropdown-toggle header-action-btn" data-bs-toggle="dropdown">Default <i className="fa fa-angle-down"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li><a className="dropdown-item" href="#">Name, A to Z</a></li>
                                        <li><a className="dropdown-item" href="#">Name, Z to A</a></li>
                                        <li><a className="dropdown-item" href="#">Price, low to high</a></li>
                                        <li><a className="dropdown-item" href="#">Price, high to low</a></li>
                                        <li><a className="dropdown-item" href="#">Sort By new</a></li>
                                        <li><a className="dropdown-item" href="#">Sort By old</a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>


                        <div className="shop-bottom-area">

                            <div className="row">
                                <div className="col">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="shop-grid">
                                            <div className="row mb-n-30px">

                                                {data.map((item, index) => {
                                                    return (
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px" key={index.toString()}>
                                                            {/* <!-- Single Prodect --> */}
                                                            <div className="product">
                                                                {(Object.prototype.hasOwnProperty.call(item, 'sale') || Object.prototype.hasOwnProperty.call(item, 'remark')) && (
                                                                    <span className="badges">
                                                                        {Object.prototype.hasOwnProperty.call(item, 'sale') && <span className="sale">{item.sale}</span>}
                                                                        {Object.prototype.hasOwnProperty.call(item, 'remark') && <span className="new">{item.remark}</span>}
                                                                    </span>
                                                                )}

                                                                <div className="thumb">
                                                                    <Link to={`/${item.link}`} className="image">
                                                                        {item.image.map((image, index) => (
                                                                            <img className={`${index > 0 ? 'hover-image' : ''}`} src={image} key={index.toString()} alt="Product" />
                                                                        ))}
                                                                    </Link>
                                                                </div>
                                                                <div className="content">
                                                                    <span className="category"><Link to={"#"}>Accessories</Link></span>
                                                                    <h5 className="title">
                                                                        <Link to={`/${item.link}`}>Modern Smart Phone</Link>
                                                                    </h5>
                                                                    <span className="price">
                                                                        {item.price.map((price, index) => (
                                                                            <span className={`${index === item.price.length - 1 ? 'new' : 'old'}`} key={index.toString()}>{index === item.price.length - 1 ? '-' : ''}{price}</span>
                                                                        ))}
                                                                    </span>
                                                                </div>
                                                                <div className="actions">
                                                                    <button title="Add To Cart" className="action add-to-cart"
                                                                        data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                                            className="pe-7s-shopbag"></i></button>
                                                                    <button className="action wishlist" title="Wishlist" data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModal-Wishlist"><i
                                                                            className="pe-7s-like"></i></button>
                                                                    <button className="action quickview" data-link-action="quickview"
                                                                        title="Quick view" data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                                    <button className="action compare" title="Compare" data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModal-Compare"><i
                                                                            className="pe-7s-refresh-2"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="tab-pane fade mb-n-30px" id="shop-list">
                                            {data.map((item, index) => {
                                                return (
                                                    <div className="shop-list-wrapper mb-30px" key={index.toString()}>
                                                        <div className="row">
                                                            <div className="col-md-5 col-lg-5 col-xl-4 mb-lm-30px">
                                                                {/* <!-- Single Prodect --> */}
                                                                <div className="product">

                                                                    <div className="thumb">
                                                                        <Link to={`/${item.link}`} className="image">
                                                                            {item.image.map((image, index) => (
                                                                                <img className={`${index > 0 ? 'hover-image' : ''}`} src={image} key={index.toString()} alt="Product" />
                                                                            ))}
                                                                        </Link>

                                                                        {(Object.prototype.hasOwnProperty.call(item, 'sale') || Object.prototype.hasOwnProperty.call(item, 'remark')) && (
                                                                            <span className="badges">
                                                                                {Object.prototype.hasOwnProperty.call(item, 'sale') && <span className="sale">{item.sale}</span>}
                                                                                {Object.prototype.hasOwnProperty.call(item, 'remark') && <span className="new">{item.remark}</span>}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7 col-lg-7 col-xl-8">
                                                                <div className="content-desc-wrap">
                                                                    <div className="content">
                                                                        <span className="category"><Link to={"#"}>Accessories</Link></span>
                                                                        <h5 className="title">
                                                                            <Link to={`/${item.link}`}>Modern Smart Phone</Link>
                                                                        </h5>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                            sed do eiusmodol tempor incididunt ut labore et dolore
                                                                            magna aliqua. Ut enim ad minim veni quis nostrud
                                                                            exercitation ullamco laboris </p>
                                                                    </div>
                                                                    <div className="box-inner">
                                                                        <span className="price">
                                                                            {item.price.map((price, index) => (
                                                                                <span className={`${index === item.price.length - 1 ? 'new' : 'old'}`} key={index.toString()}>{index === item.price.length - 1 ? '-' : ''}{price}</span>
                                                                            ))}
                                                                        </span>
                                                                        <div className="actions">
                                                                            <button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
                                                                                className="pe-7s-shopbag"></i></button>
                                                                            <button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
                                                                                className="pe-7s-like"></i></button>
                                                                            <button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
                                                                            <button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
                                                                                className="pe-7s-refresh-2"></i></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="pro-pagination-style text-center text-lg-end" data-aos="fade-up" data-aos-delay="200">
                                <div className="pages">
                                    <ul>
                                        <li className="li"><a className="page-link" href="#"><i className="fa fa-angle-left"></i></a>
                                        </li>
                                        <li className="li"><a className="page-link" href="#">1</a></li>
                                        <li className="li"><a className="page-link active" href="#">2</a></li>
                                        <li className="li"><a className="page-link" href="#">3</a></li>
                                        <li className="li"><a className="page-link" href="#"><i className="fa fa-angle-right"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListGrid

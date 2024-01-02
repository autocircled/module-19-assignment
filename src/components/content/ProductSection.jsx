import { Link } from "react-router-dom"

const ProductSection = () => {

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
    const data1 = [

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
    const data2 = [
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
    ]
    return (
        <>
            <div className="product-area pb-100px">
                <div className="container">
                    {/* <!-- Section Title & Tab Start --> */}
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- Tab Start --> */}
                            <div className="tab-slider d-md-flex justify-content-md-between align-items-md-center">
                                <ul className="product-tab-nav nav justify-content-start align-items-center">
                                    <li className="nav-item"><button className="nav-link" data-bs-toggle="tab"
                                        data-bs-target="#newarrivals">New Arrivals</button>
                                    </li>
                                    <li className="nav-item"><button className="nav-link" data-bs-toggle="tab"
                                        data-bs-target="#featured">Top Selling</button>
                                    </li>
                                    <li className="nav-item"><button className="nav-link active" data-bs-toggle="tab"
                                        data-bs-target="#toprated">Top Rated</button>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Tab End --> */}
                        </div>
                    </div>
                    {/* <!-- Section Title & Tab End --> */}
                    <div className="row">
                        <div className="col">
                            <div className="tab-content mt-60px">
                                {/* <!-- 1st tab start --> */}
                                <div className="tab-pane fade show active" id="newarrivals">
                                    <div className="row mb-n-30px">
                                        {data2.map((item, index) => {
                                            return (
                                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px" key={index.toString()}>
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
                                {/* <!-- 1st tab end -->
                            <!-- 2nd tab start --> */}
                                <div className="tab-pane fade" id="toprated">
                                    <div className="row">
                                        {data.map((item, index) => {
                                            return (
                                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px" key={index.toString()}>
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
                                {/* <!-- 2nd tab end -->
                            <!-- 3rd tab start --> */}
                                <div className="tab-pane fade" id="featured">
                                    <div className="row">
                                        {data1.map((item, index) => {
                                            return (
                                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px" key={index.toString()}>
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
                                {/* <!-- 3rd tab end --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductSection

import React, { useContext, useEffect, useState } from "react";
import "./product.scss";
import { BasketContext } from "../../context/BasketContext/BasketContext";
import { WishlistContext } from "../../context/WishlistContext/WishlistContext";
import Modal from "../Modal/modal";
function Products() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("All");
  const [inputSearch, setInputSearch] = useState("");
  const [selectVal, setSelectVal] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
};

const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
};



  function handleInput(e) {
    setInputSearch(e.target.value);
  }

  function handleFilter(e) {
    setSelectVal(e.target.value);
  }

  const { basket, addBasket, removeBasket, countNumber } = useContext(BasketContext);

  const { wishlist, addWish, removeWish } = useContext(WishlistContext)

  useEffect(() => {
    fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);


  const removeAsideBasket = () => {
    document.querySelector(".basket").classList.toggle("activ");
  };

  const removeAsideWishlist = () => {
    document.querySelector(".wishlist").classList.toggle("activ");
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
  };
  const filteredProducts =
    category === "All"
      ? product
      : product.filter((item) => item.category === category);

  return (
    <div>

    {isModalOpen&&(
      <Modal product={selectedProduct} closeModal={closeModal}/>
    )}

      <section id="product">
        <div className="container">
          <div className="product_header">
            <h1>PRODUCT OVERVIEW</h1>
          </div>

          <div className="product_filter">
            <div
              value={selectVal}
              onChange={(e) => handleFilter(e)}
              className="filters"
            >
              <ul>
                <li onClick={() => handleCategoryClick("All")}>All Products</li>
                <li onClick={() => handleCategoryClick("Womens")}>Women</li>
                <li onClick={() => handleCategoryClick("Mens")}>Men</li>
                <li onClick={() => handleCategoryClick("Kids")}>Kids</li>
              </ul>
            </div>
            <div className="search">
              <div className="srch">
                <button className="filter_aside">
                  <i className="fa-solid fa-bars-staggered"></i> Filter
                </button>
                <button className="search_btn">
                  <i className="fa-solid fa-magnifying-glass"></i> Search
                </button>
              </div>
              <input placeholder="Search for Product name" onChange={(e) => handleInput(e)} type="text" />
            </div>
          </div>

          <div className="basket">
            <i onClick={removeAsideBasket} className="fa-solid fa-xmark"></i>
            <div className="basket_card">
              {
                basket.map((x) => (
                  <ul key={x.id}>
                    <div className="card_img">
                      <img src={x.images} alt="" />
                      <p className="del_card" ><i onClick={() => removeBasket(x.id)} className="remove_basket_card fa-solid fa-xmark"></i></p>
                    </div>
                    <div className="card_info">
                      <li>{x.model}</li>
                      <li>$ {x.price}</li>
                      <p>count: {x.count}</p>
                      <div className="butnons">
                        <button onClick={() => {
                          countNumber(true, x)
                        }} className="add">+</button>
                        <button onClick={() => {
                          countNumber(false, x)
                        }} className="del">-</button>
                      </div>
                    </div>
                  </ul>
                ))
              }
            </div>
          </div>

          <div className="wishlist">
            <i onClick={removeAsideWishlist} className="fa-solid fa-xmark"></i>
            <div className="wishlist_card">
              {
                wishlist.map((x) => (
                  <ul key={x.id}>
                    <div className="card_img">
                      <img src={x.images} alt="" />
                      <p onClick={() => removeWish(x.id)} className="del_card" ><i  className="remove_basket_card fa-solid fa-xmark"></i></p>
                    </div>
                    <div className="card_info">
                      <li>{x.model}</li>
                      <li>$ {x.price}</li>
                    </div>
                  </ul>
                ))
              }
            </div>
          </div>


          <div className="products">
            {filteredProducts
              .filter((x) =>
                x.name.toLowerCase().includes(inputSearch.toLowerCase())
              )
              .map((x) => (
                <ul key={x.id}>
                  <div className="product_image">
                    <img src={x.images} alt="" />

                    <div className="buttons">
                      <i onClick={()=>handleQuickView(x)} className="fa-solid fa-circle-info"></i>
                      <i onClick={() => { addBasket(x) }}
                        className="fa-solid fa-cart-shopping"
                      ></i>
                      <i onClick={() => { addWish(x) }} className="fa-solid fa-heart"></i>
                    </div>
                  </div>
                  <li>{x.model}</li>
                  <li>$ {x.price}</li>
                </ul>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;

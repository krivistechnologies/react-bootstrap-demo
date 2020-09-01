import "./productgrid.css";
import React from "react";
function ProductListWithStyles() {
  const products = [
    {
      id: "1",
      productLable: "Sale",
      discount: "20%",
      title: "Women's Blouse",
      actualPrice: "$20.00",
      discountPrice: "$16.00"
    },
    {
      id: "2",
      productLable: "Sale",
      discount: "50%",
      title: "Men's Plain Tshirt",
      actualPrice: "$10.00",
      discountPrice: "$5.00"
    }
  ];

  const productList = products.map(product => (
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <div class="product-grid">
          <div class="product-image">
            <a href="#">
              <img
                class="pic-1"
                src="https://via.placeholder.com/280x300/FFB6C1/000000"
              />
              <img
                class="pic-2"
                src="https://via.placeholder.com/280x300/FFB6C1/000000"
              />
            </a>
            <ul class="social">
              <li>
                <a href="" data-tip="Quick View">
                  <i class="fa fa-search"></i>
                </a>
              </li>
              <li>
                <a href="" data-tip="Add to Wishlist">
                  <i class="fa fa-shopping-bag"></i>
                </a>
              </li>
              <li>
                <a href="" data-tip="Add to Cart">
                  <i class="fa fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
            <span class="product-new-label">{product.productLable}</span>
            <span class="product-discount-label">{product.discount}</span>
          </div>
          <ul class="rating">
            <li class="fa fa-star"></li>
            <li class="fa fa-star"></li>
            <li class="fa fa-star"></li>
            <li class="fa fa-star"></li>
            <li class="fa fa-star disable"></li>
          </ul>
          <div class="product-content">
            <h3 class="title">
              <a href="#">{product.title}</a>
            </h3>
            <div class="price">
              {product.discountPrice}
              <span>{product.actualPrice}</span>
            </div>
            <a class="add-to-cart" href="">
              + Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div class="container">
        <h3 class="h3">shopping Demo-1 </h3>
        {productList}
      </div>
    </div>
  );
}
export default ProductListWithStyles;

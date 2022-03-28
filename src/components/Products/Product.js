import './Products.css'

const Product = ({product,handleAddToCart}) => {

  const { title, price, category, image,rating } = product;
  return (
    <div className="product">
      <img className="images" src={image} alt="" />
      <div className="product-info">
        <h4 className="category-name">{category}</h4>
        <p className="product-name">{title}</p>
        <p> Ratings: {rating.rate} star</p>
        <p> Hurry up {rating.count} items left</p>
        <p> Price: ${price}</p>
      </div>
      <button onClick={()=> handleAddToCart(product)} className='btn-cart'>Add to Cart</button>
    </div>
  );

};
export default Product;

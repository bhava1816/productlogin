import React from 'react';
import Navigationroute from '../routes/Navigationroute';
import { useDispatch, useSelector } from "react-redux";
// import { getproducts } from '../features/auth/Product';
import { fetchdata } from '../features/auth/Product';//createasyncthunk function call 

function Dashboard() {

  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const token = useSelector((state) => state.auth.token);
  const items = useSelector((state) => state.products.products);
  const loadig=useSelector((state)=>state.products.loading);
  let error =useSelector((state)=>state.products.error)

  if (!token) {
    return <h2>Please Login</h2>;
  }

  const myfunction =  () => {
  dispatch(fetchdata())//here we are call fetchdata then the thunk middleware is start exicuted and it creat automatically three things items,pending,error so it gies to products
  };

  return (
    <div className="dashboard">

      <Navigationroute />

      <div className="dashboard-header">
        <h1>Welcome {firstName} {lastName}</h1>
        <button className="load-btn" onClick={myfunction}>
          Load Products
        </button>
      </div>
      {loadig && <p>loading......</p>}
      <div className="products-container">
        {items.map((product) => (
          <div className="product-card" key={product._id}>
            <h3>{product.brand}</h3>
            <p>{product.name}</p>
            <p>Price: ₹{product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>

            <div className="sizes">
              {product.sizes?.map((size) => (
                <span className="size-badge" key={size}>
                  {size}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {error && <p>{error}</p>}

    </div>
  );
}

export default Dashboard;

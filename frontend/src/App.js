import React, { useEffect } from 'react';
import Header from './component/Header'
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';
import { setProductData } from './redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import CallBackButton from './component/Callback'; // Import the CallBackButton component

function App() {

  const dispatch = useDispatch()
  // eslint-disable-next-line
  const productData = useSelector((state) =>state.product)
  
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://vkweldingworksbackend.onrender.com/products`);
        if (!res.ok) {
          throw new Error('Failed to fetch product data');
        }
        const resData = await res.json();
        // console.log(resData);
        dispatch(setProductData(resData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
    // eslint-disable-next-line 
  }, []);
  // , []
  
  // console.log(productData)

  return (
    <div>
      <Header/>
        <main >
          <Outlet/>
        </main>
          
      <Footer />
      <CallBackButton/>
    </div>
  );
}

export default App;
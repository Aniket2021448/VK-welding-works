import React, { useEffect } from 'react';
import Header from './component/Header'
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';
import { setProductData } from './redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
function App() {

  const dispatch = useDispatch()
  const productData = useSelector((state) =>state.product)
  
  useEffect(()=>{
    (async()=>{
      const res = await fetch( `${process.env.REACT_APP_SERVER_DOMAIN}/products`)
      const resData = await res.json()
      console.log(resData)
      dispatch(setProductData(resData))
    })()
    // eslint-disable-next-line
  }, []) 
  // , []
  
  console.log(productData)

  return (
    <div>
      <Header/>
        <main >
          <Outlet/>
        </main>
          
      <Footer />
    </div>
  );
}

export default App;
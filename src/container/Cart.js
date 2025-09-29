import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom';
import ProductListItem from '../components/ProductListItem'
import { modifyItem, removeItem } from '../redux/reducer/cart';


export default function Cart() {
    const list = useSelector((state) => state.cart.list);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const incrementItem = (item)=>{
      dispatch(modifyItem({...item, count : item.count +1}));
    };

      const decrementItem = (item)=>{
        if(item.count === 1){
          dispatch(removeItem(item));
        }
        else{

          dispatch(modifyItem({...item, count : item.count -1}));
        }
    };
    const removeItemFromCart = (item) =>{
      dispatch(removeItem(item))
    }
  return (
    // <div>Cart {list[3].cate} </div>
    <>
    {list.length > 0 ? (
      <>
      {list.map((item) => (
        <ProductListItem
         {...item}
         key={item.id} 
         incrementItem={()=> incrementItem(item)} 
         decrementItem={()=> decrementItem(item)} 
         removeItem = { ()=> removeItemFromCart(item)}
         />
        ))}
        <button className='btn btn-success' onClick={()=> navigate('/checkout')}>Go to Checkout</button>
        </>
    ):(<h3>No Items in the cart</h3>)
      }
    </>

  );
}
//decrementItem={} removeItem={}
//Using modify for increment and decrement operation, and remove() for remove element

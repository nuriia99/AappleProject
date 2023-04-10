import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";
import Button from "../components/Button";
import Header from "../components/Header";
import { useRouter } from "next/router"
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";


const Basket = () => {

  const items = useSelector(selectBasketItems)
  const total = useSelector(selectBasketTotal)


  const router = useRouter()

  return (
    <>
      <Header/>
      <div className="basket p-5 px-10 bg-[#E7ECEE]">
        {
          items.length === 0 ?
          <>
            <h4 className="text-3xl font-semibold pb-4">Your bag is empty.</h4>
            <p className="pb-5">Free delivery and free returns.</p>
            <Button title="Continue Shopping" onClick={() => router.push('/')}/>
          </>
          : <>
            <h4 className="text-3xl font-semibold pb-4">Review your bag.</h4>
            <p className="pb-14">Free delivery and free returns.</p>
            <div>
              {
                items.map(p => {
                  return <BasketItem product={p}/>
                })
              }
            </div>
            <div className="h-[2px] bg-gray-300 my-5"></div>
            <div>
              <p className="pb-14">Free delivery and free returns.</p>
              <p className="pb-14">{total}</p>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default Basket
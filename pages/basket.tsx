import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";
import Button from "../components/Button";
import Header from "../components/Header";
import { useRouter } from "next/router"
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
import Stripe from "stripe";
import { fetchPostJSON } from "../utils/api-helpers";
import getStripe from "../utils/get-stripejs";



const Basket = () => {

  const items = useSelector(selectBasketItems)
  const total = useSelector(selectBasketTotal)

  const router = useRouter()

  const [loadingBtn1, setLoadingBtn1] = useState(false)
  const [loadingBtn2, setLoadingBtn2] = useState(false)

  const createCheckOutSessionBtn1 = async () => {
    setLoadingBtn1(true)

    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON("/api/checkout_sessions", {
      items: items
    })

    if((checkoutSession as any).statusCode === 500) {
      console.error('session failed')
      setLoadingBtn1(false)
      return
    }

    const stripe = await getStripe()
    const {error} = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id
    })

    console.warn(error.message)
    setLoadingBtn1(false)
  }

  const createCheckOutSessionBtn2 = async () => {
    setLoadingBtn2(true)

    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON("/api/checkout_sessions", {
      items: items
    })

    if((checkoutSession as any).statusCode === 500) {
      console.error('session failed')
      setLoadingBtn2(false)
      return
    }

    const stripe = await getStripe()
    const {error} = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id
    })

    console.warn(error.message)
    setLoadingBtn2(false)
  }

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
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>{Intl.NumberFormat('en-US').format(total)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>FREE</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated tax for:</p>
              <p>$ -</p>
            </div>
            <div className="h-[2px] bg-gray-300 my-5"></div>
            <div className="flex justify-between">
              <h4 className="text-xl font-semibold pb-2">Total</h4>
              <h4 className="text-xl font-semibold pb-2">$ {Intl.NumberFormat('en-US').format(total)}</h4>
            </div>
            <h4 className="text-xl font-semibold py-8">How would you like to check out?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center sm:flex-row gap-5">
              <div className="h-full flex flex-col items-center justify-center bg-gray-300 rounded-md p-10">
                <h4 className="text-lg font-semibold pb-2">Pay in full</h4>
                <h4 className="pb-7 text-lg font-semibold">$ {Intl.NumberFormat('en-US').format(total)}</h4>
                <Button title="Check out" onClick={createCheckOutSessionBtn1} loading={loadingBtn1}/>
              </div>
              <div className="flex flex-col items-center bg-gray-300 rounded-md  p-10">
                <h4 className="text-lg font-semibold pb-2 text-center">Pay Mothly with Apple Card</h4>
                <h4 className="text-lg font-semibold pb-2 text-center">$283.16/mo. at 0% APR<sup className="-top-1">◊</sup></h4>
                <h4 className="pb-7 text-lg font-semibold">$ {Intl.NumberFormat('en-US').format(total)}</h4>
                <Button title="Check Out with Apple Card Monthly Installments" onClick={createCheckOutSessionBtn2} loading={loadingBtn2}/>
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default Basket
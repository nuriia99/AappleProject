import React from "react";
import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import { addBasket, removeBasket, increaseTimesSelected, decreaseTimesSelected } from "../redux/basketSlice";
import toast from 'react-hot-toast';

interface Props {
  product: Product
}

const BasketItem = ({ product }: Props) => {

  const dispatch = useDispatch()

  const deleteBasketItem = () => {
    dispatch(removeBasket({ id: product._id }))
    toast.error(`${product.title} has been successfully removed from basket.`, {
      position: 'bottom-center'
    })
  }

  const increaseTimes = () => {
    dispatch(increaseTimesSelected({ id: product._id }))
  }

  const decreaseTimes = () => {
    dispatch(decreaseTimesSelected({ id: product._id }))
  }

  return (
    <div className="grid py-7 sm:grid-cols-[150px_180px_220px]  sm:gap-5">
      <div>
        <div className="h-[150px] w-[150px] relative">
          <Image src={urlFor(product.image[0]).url()} alt='iphoneLandingImage' fill style={{objectFit:'cover'}}/>
        </div>
      </div>
      <div className="pt-4 flex flex-col sm:flex-row justify-between gap-10">
        <h4 className="text-xl font-semibold pb-4">{product.title}</h4>    
      </div>
      <div className="flex justify-between gap-6">
        <div className="flex items-center gap-4  h-fit">
          <div onClick={decreaseTimes} className="text-gray-700 cursor-pointer opacity-75 transition hover:opacity-100 duration-200">-</div>
          <h4 className="pt-4 text-xl font-semibold pb-4">{product.timesSelected}</h4>
          <div onClick={increaseTimes} className="text-gray-700 cursor-pointer opacity-75 transition hover:opacity-100 duration-500">+</div>
        </div>
        <div className="pt-4 flex flex-col items-end">
          <h4 className="text-xl font-semibold pb-2">$ {product.price * product.timesSelected}</h4>
          <div className="justify-end flex flex-grow">
            <button onClick={deleteBasketItem} className="text-blue-500 cursor-pointer h-10">Remove item</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default BasketItem
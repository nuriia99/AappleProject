import React from "react";
import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import { addBasket, removeBasket } from "../redux/basketSlice";
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

  return (
    <div className="flex flex-col">
      <div className="py-7">
        <div className="h-[200px] w-[200px] relative">
          <Image src={urlFor(product.image[0]).url()} alt='iphoneLandingImage' fill style={{objectFit:'cover'}}/>
        </div>
      </div>
      <div className="flex justify-between">
        <h4 className="text-xl font-semibold pb-4">{product.title}</h4>
        <h4 className="text-xl font-semibold pb-4">$ {product.price}</h4>
      </div>
      <div className="justify-end flex">
        <button onClick={deleteBasketItem} className="text-blue-500 cursor-pointer ">Remove item</button>
      </div>
    </div>
  )
}

export default BasketItem
import React from "react";
import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import { addBasket } from "../redux/basketSlice";
import toast from 'react-hot-toast';

interface Props {
  product: Product,
  id: string
}

const Product = ({ product, id}: Props) => {

  const dispatch = useDispatch()

  // const addItemToBasket = () => {
  //   dispatch(addBasket(product))
  //   toast.success('Successfully toasted!', {
  //     position: 'bottom-center'
  //   })
  // }

  return (
    <div className="bg-[#2e3135] p-8 rounded-lg h-[350px] w-[350px]">
    <div className="flex justify-center p-5">
      <div className="h-[200px] w-[200px] relative">
          <Image src={urlFor(product.image[0]).url()} alt='iphoneLandingImage' fill style={{objectFit:'cover'}}/>
        </div>
      </div>
      <div  className="flex gap-5 justify-center">
        <div>
          <p className="product_title text-white">{product.title}</p>
          <p className="product_price text-white">{product.price} $</p>
        </div>
        <div className="shoppingIcon h-[50px] w-[50px] p-3 cursor-pointer text-white bg-gradient-to-r from-pink-500 to-violet-500 rounded-full">
          <ShoppingCartIcon/>
        </div>
      </div>
    </div>
  )
}

export default Product
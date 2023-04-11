import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useRouter } from "next/router"
import Button from "../components/Button";
import { useSession } from 'next-auth/react'

const success = () => {
  const router = useRouter()
  const { session_id } = router.query
  const { data: session } = useSession()


  return (
    <>
      <header className="h-[70px] py-3 px-10">
        <Link href={"/"}>
          <div className='relative h-10 w-5 cursor-pointer opacity-75 tranistion hover:opacity-100'>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt='appleIcon' fill style={{objectFit:'contain'}} />
          </div>
        </Link>
      </header>
      <section className="py-3 px-10">
        <div className="flex pt-10 gap-5 items-center">
          <div className="flex">
            <CheckCircleIcon className="h-[50px]"/>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-600">Order #{session_id?.slice(-10)}</p>
            <p className="font-medium">Thank you!</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col border-[1px]  border-gray-300 rounded-md p-5">
          <p className="font-medium pb-2 ">Your order is confirmed</p>
          <p className="text-gray-600">We’ve accepted your order, and we’re getting it ready. Come back
                to this page for updates on your shipment status.</p>
          <div className="h-[1px] bg-gray-300 my-5"></div>
          <p className="font-medium pb-1">
          Other tracking number:
          </p>
          <p>CNB21441622</p>
        </div>
        <div className="mt-5 flex flex-col border-[1px]  border-gray-300 rounded-md p-5">
          <p className="font-medium pb-1">
          Order updates
          </p>
          <p className="text-gray-600">You’ll get shipping and delivery updates by email and text.</p>
        </div>
        <div className="flex justify-center p-10">
        <Button title="Continue Shopping" onClick={() => router.push('/')}/>
        </div>
      </section>
      
    </>
  )
}

export default success

//http://localhost:3000/success?session_id=cs_test_a1AUBKrOIUyumnMAxu6PVoDKqBgKt2mrCNuHU7zUwWZEggitinYHwT0tSK

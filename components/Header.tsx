import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { selectBasketItems } from '../redux/basketSlice'
import { signIn, signOut, useSession } from 'next-auth/react'



function Header() {
  const [logIn, setLogIn] = useState(false)
  const items = useSelector(selectBasketItems)
  const {data: session} = useSession()

  useEffect(() => {
    if(session !== null) setLogIn(true)
    else setLogIn(false)
  }, [session])

  return (
  <>
  <nav className='sticky top-0 z-50 flex w-full items-center justify-between bg-[#E7ECEE] p-4'>
      <div className='flex items-center justify-center md:w-1/5'>
        <Link href='/' className='relative'>
          <div className='relative h-10 w-5 cursor-pointer opacity-75 tranistion hover:opacity-100'>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt='appleIcon' fill style={{objectFit:'contain'}} />
          </div>
        </Link>
      </div>
      <div className='hidden flex-1 items-center justify-center gap-8 md:flex'>
        <a href="" className="headerLink">Product</a>
        <a href="" className="headerLink">Explore</a>
        <a href="" className="headerLink">Support</a>
        <a href="" className="headerLink">Business</a>
      </div>
      <div className='flex items-center justify-end gap-4 w-1/5'>
        <MagnifyingGlassIcon className='header_img'/>
        <Link href='basket' className='relative'>
          <span className='absolute z-10 top-[-5px] right-[-5px] rounded-full text-white bg-gradient-to-r from-pink-500 to-violet-500 h-4 w-4 flex items-center justify-center text-xs'>{items.length}</span>
          <ShoppingBagIcon className='header_img'/>
        </Link>
        {
          logIn ? <>
            <div className=' relative h-[25px] w-[25px] rounded-full overflow-hidden cursor-pointer' onClick={() => signOut()}>
              <Image src={session?.user?.image || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'} fill  style={{objectFit:'contain'}} alt='userImage'/>
            </div>
          </> :
          <UserIcon className='header_img' onClick={() => signIn()}/>
        }
      </div>
    </nav>
    <header></header>
  </>
  )
}

export default Header
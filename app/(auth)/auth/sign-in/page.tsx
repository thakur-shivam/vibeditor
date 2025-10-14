import SignInFormClient from '@/modules/auth/components/sign-in-form-client'
import Image from 'next/image'
import React from 'react'

function Page() {
  return (
    <>
      <Image src={"/login.svg"} alt='Login-Image' height={200} width={200} className='m-6 object-cover' />
      <SignInFormClient />
    </>
  )
}

export default Page

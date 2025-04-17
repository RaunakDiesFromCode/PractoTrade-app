import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-[84vh] px-20 pt-5'>landing page
      <Button asChild variant="outline">
        <Link href="/home">
          <span>Home</span>
        </Link>
      </Button>
    </div>
  )
}

export default page

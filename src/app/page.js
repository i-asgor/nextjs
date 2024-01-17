'use client'
 
import { useRouter, useSearchParams } from 'next/navigation'

import Image from 'next/image'

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams()
 
  function updateSorting(sortOrder) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }
  return (
    <main className='p-10'>
      <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae consectetur delectus quo praesentium natus deleniti beatae doloremque, expedita magni quisquam autem ea facilis, nihil error quia in a quas ab! Illum sed molestias porro voluptatibus. Minima fugiat eos saepe dignissimos vero! Voluptate quo harum consectetur nemo accusantium commodi non? Corporis magnam eius expedita nisi, a repellat provident vitae fugiat odio ab iusto et eos officia nesciunt in repellendus fuga placeat quos error nobis aperiam. Doloremque natus maxime aliquam at dolorem. Quidem veniam provident ratione, pariatur esse delectus repudiandae itaque similique molestiae praesentium recusandae nemo asperiores? Beatae sapiente quia consequatur expedita.</div><br />
      <button type="button" onClick={() => router.push('/about')}>
        Dashboard
      </button><br />
    <button onClick={() => updateSorting('asc')}>Sort Ascending</button><br />
      <button onClick={() => updateSorting('desc')}>Sort Descending</button>
    </main>
  )
}

'use client'

import { useRouter } from "next/navigation";
function NavigateBtn() {
    const router = useRouter();
  return (
    <button onClick={()=>router.push('/profile/33')}>Navigate</button>
  )
}

export default NavigateBtn
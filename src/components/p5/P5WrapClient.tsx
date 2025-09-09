'use client'
import dynamic from "next/dynamic";

//import P5Wrapper dynamically to avoid SSR issues

const P5WrapClient = dynamic(()=> import
('@/components/p5/P5Wrapper'), {
  ssr: false
}
)
export default  P5WrapClient
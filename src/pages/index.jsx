import Product from "@/components/Product"
import React from "react"

function index() {
  return (
    <div>
      <h1>Hello world</h1>
      <Product name="Google Home" description="Your AI assistant" price={59.99}/>

      <Product name="Iphone 12 Pro max" description="Your AI assistant" price={1200}/>

      <Product name="Macbook Pro" description=" Your Favourite Computer" price={59.99}/>


      {/* product name,discription,price */}
      {/* product name,discription,price */}
      {/* product name,discription,price */}
      {/* product name,discription,price */}
    </div>
  )
}

export default index
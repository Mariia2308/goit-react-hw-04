import { useRef } from "react"
const RefEx = () => {
  const btnRef = useRef(null)
  console.log('btn:', btnRef)
  return (
    <div>
      <button ref = {btnRef}>Click</button>
      <input type="text" placeholder="smth" />
    </div>
  )
}

export default RefEx

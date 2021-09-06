import { useReactiveVar } from "@apollo/client"
import { cartVar } from "."

export const useNoOfCartItems = () => {
  const { items } = useReactiveVar(cartVar)

  const sum = items.reduce((sum, item) => {
    return (sum += item.quantity)
  }, 0)

  return sum
}

import { useReactiveVar } from "@apollo/client"
import { cartVar } from "."

export const useCartSubtotal = () => {
  const { items } = useReactiveVar(cartVar)

  const sum = items.reduce((sum, item) => {
    return (sum += item.price * item.quantity)
  }, 0)

  return sum
}

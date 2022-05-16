const sumTotalAmount = (items) => (
  items.reduce((totalPrice, { price }) => totalPrice + price, 0)
)

export { sumTotalAmount }
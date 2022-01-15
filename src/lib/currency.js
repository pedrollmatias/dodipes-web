export function numberToCurrency(number, currency = "BRL") {
  switch(currency) {
    case "BRL":
      return `R$ ${number / 100}` // TODO
    default:
      return String(number)
  }
}

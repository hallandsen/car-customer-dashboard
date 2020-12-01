export const formatPrice = (number) => {
  return new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' }).format(number);
}
export const formatDate = (isoString) => {
  const date = new Date(isoString)
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}
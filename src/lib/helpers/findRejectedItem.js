export const findRejectedItem = (rejectedImages, id) => {
  const isRejected = rejectedImages.some(ri => ri.id === id);
  return !!isRejected;
}
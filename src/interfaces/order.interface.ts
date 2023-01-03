export default interface Order {
  id: number;
  userId: number;
  productsId: Array<number>;
}
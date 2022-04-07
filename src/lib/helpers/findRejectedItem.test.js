import { findRejectedItem } from "./findRejectedItem";

const rejectedList = [
  {id: 1, text: ''},
  {id: 2, text: ''},
]

it('finds rejected item', () => {
  const find = findRejectedItem(rejectedList, 2);
  expect(find).toBe(true);
});

it('returns false if cant find rejected item', () => {
  const find = findRejectedItem(rejectedList, 5);
  expect(find).toBe(false);
});


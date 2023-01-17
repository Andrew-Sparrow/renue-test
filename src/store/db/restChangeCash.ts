import { changeBanknotes } from "../../const";
type AllowedChangeMoney = typeof changeBanknotes[number]

type RestOfCash = {
  banknote: AllowedChangeMoney,
  restAmount: number
};

export let restOfCash: RestOfCash[] = [
  {
    banknote: 1,
    restAmount: 50
  },
  {
    banknote: 5,
    restAmount: 150
  },
  {
    banknote: 10,
    restAmount: 11
  },
  {
    banknote: 50,
    restAmount: 40
  },
  {
    banknote: 100,
    restAmount: 25
  },
  {
    banknote: 500,
    restAmount: 50
  },
];

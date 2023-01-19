import { changeBanknotes } from "../../const.ts";
type AllowedChangeMoney = typeof changeBanknotes[number]

type RestOfCash = {
  nominal: AllowedChangeMoney,
  restAmount: number
};

export let restOfCash: RestOfCash[] = [
  {
    nominal: 1,
    restAmount: 50
  },
  {
    nominal: 5,
    restAmount: 150
  },
  {
    nominal: 10,
    restAmount: 11
  },
  {
    nominal: 50,
    restAmount: 40
  },
  {
    nominal: 100,
    restAmount: 25
  },
  {
    nominal: 500,
    restAmount: 50
  },
];

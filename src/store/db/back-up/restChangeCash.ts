type AllowedChangeMoney = 1 | 5 | 10 | 50 | 100 | 500;

type RestOfCash = {
  banknote: AllowedChangeMoney,
  restAmount: number
}

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
    restAmount: 50
  },
  {
    banknote: 50,
    restAmount: 50
  },
  {
    banknote: 100,
    restAmount: 50
  },
  {
    banknote: 500,
    restAmount: 50
  },
]
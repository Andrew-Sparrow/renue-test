import { goodsTypes } from "../../const";

type Product = {
  id: number,
  type: goodsTypes,
  price: number,
  title: string
  amount: number,
}

let goods: Product[] = [
  {
    id: 1,
    type: goodsTypes.mineralWater,
    price: 117,
    title: "Боржоми",
    amount: 15,
  },
  {
    id: 2,
    type: goodsTypes.mineralWater,
    price: 95,
    title: "Icelandic Glacial",
    amount: 16,
  },
  {
    id: 1,
    type: goodsTypes.soda,
    price: 143,
    title: "COCA-COLA",
    amount: 1,
  },
  {
    id: 2,
    type: goodsTypes.soda,
    price: 123,
    title: "FANTA",
    amount: 1,
  },
  {
    id: 1,
    type: goodsTypes.juices,
    price: 170,
    title: "Apple",
    amount: 1,
  },
  {
    id: 2,
    type: goodsTypes.juices,
    price: 70,
    title: "Orange",
    amount: 1,
  },
  {
    id: 1,
    type: goodsTypes.chewingGum,
    price: 133,
    title: "Wrigley",
    amount: 45,
  },
  {
    id: 2,
    type: goodsTypes.chewingGum,
    price: 101,
    title: "Orbit",
    amount: 5,
  },
  {
    id: 1,
    type: goodsTypes.chocolate,
    price: 103,
    title: "Ferrero Rocher",
    amount: 45,
  },
  {
    id: 2,
    type: goodsTypes.chocolate,
    price: 161,
    title: "Snickers",
    amount: 5,
  },
  {
    id: 1,
    type: goodsTypes.cookies,
    price: 303,
    title: "Oreo",
    amount: 45,
  },
  {
    id: 2,
    type: goodsTypes.cookies,
    price: 101,
    title: "Snickerdoodles",
    amount: 5,
  },
  {
    id: 1,
    type: goodsTypes.chips,
    price: 253,
    title: "Pringles",
    amount: 0,
  },
  {
    id: 2,
    type: goodsTypes.chips,
    price: 201,
    title: "Lay's",
    amount: 5,
  }
];
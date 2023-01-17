import { nanoid } from 'nanoid';
import { GoodsTypes } from "../../const";

type Product = {
  id: string,
  type: GoodsTypes,
  price: number,
  title: string
  amount: number,
}

export let goods: Product[] = [
  {
    id: nanoid(),
    type: GoodsTypes.mineralWater,
    price: 117,
    title: "Боржоми",
    amount: 15,
  },
  {
    id: nanoid(),
    type: GoodsTypes.mineralWater,
    price: 95,
    title: "Icelandic Glacial",
    amount: 16,
  },
  {
    id: nanoid(),
    type: GoodsTypes.soda,
    price: 143,
    title: "COCA-COLA",
    amount: 1,
  },
  {
    id: nanoid(),
    type: GoodsTypes.soda,
    price: 123,
    title: "FANTA",
    amount: 1,
  },
  {
    id: nanoid(),
    type: GoodsTypes.juices,
    price: 170,
    title: "Apple",
    amount: 1,
  },
  {
    id: nanoid(),
    type: GoodsTypes.juices,
    price: 70,
    title: "Orange",
    amount: 1,
  },
  {
    id: nanoid(),
    type: GoodsTypes.chewingGum,
    price: 133,
    title: "Wrigley",
    amount: 45,
  },
  {
    id: nanoid(),
    type: GoodsTypes.chewingGum,
    price: 101,
    title: "Orbit",
    amount: 5,
  },
  {
    id: nanoid(),
    type: GoodsTypes.chocolate,
    price: 103,
    title: "Ferrero Rocher",
    amount: 45,
  },
  {
    id: nanoid(),
    type: GoodsTypes.chocolate,
    price: 161,
    title: "Snickers",
    amount: 5,
  },
  {
    id: nanoid(),
    type: GoodsTypes.cookies,
    price: 303,
    title: "Oreo",
    amount: 45,
  },
  {
    id: nanoid(),
    type: GoodsTypes.cookies,
    price: 101,
    title: "Snickerdoodles",
    amount: 5,
  },
  {
    id: nanoid(),
    type: GoodsTypes.chips,
    price: 253,
    title: "Pringles",
    amount: 0,
  },
  {
    id: nanoid(),
    type: GoodsTypes.chips,
    price: 201,
    title: "Lay's",
    amount: 5,
  }
];
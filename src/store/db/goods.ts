import  { nanoid } from 'nanoid';
import { GoodsTypes } from '../../util/const.ts';

type Product = {
  type: GoodsTypes,
  price: number,
  title: string
  amount: number,
}

export let goods: { [key: string]: Product} =  {
  [nanoid()]: {
    type: GoodsTypes.mineralWater,
    price: 117,
    title: "Borjomi",
    amount: 15,
  },
  [nanoid()]: {
    type: GoodsTypes.mineralWater,
    price: 95,
    title: "Icelandic Glacial",
    amount: 16,
  },
  [nanoid()]: {
    type: GoodsTypes.soda,
    price: 143,
    title: "COCA-COLA",
    amount: 1,
  },
  [nanoid()]: {
    type: GoodsTypes.soda,
    price: 123,
    title: "FANTA",
    amount: 1,
  },
  [nanoid()]: {
    type: GoodsTypes.juices,
    price: 170,
    title: "Apple",
    amount: 1,
  },
  [nanoid()]: {
    type: GoodsTypes.juices,
    price: 70,
    title: "Orange",
    amount: 1,
  },
  [nanoid()]: {
    type: GoodsTypes.chewingGum,
    price: 133,
    title: "Wrigley",
    amount: 45,
  },
  [nanoid()]: {
    type: GoodsTypes.chewingGum,
    price: 101,
    title: "Orbit",
    amount: 5,
  },
  [nanoid()]: {

    type: GoodsTypes.chocolate,
    price: 103,
    title: "Ferrero Rocher",
    amount: 45,
  },
  [nanoid()]: {

    type: GoodsTypes.chocolate,
    price: 161,
    title: "Snickers",
    amount: 5,
  },
  [nanoid()]: {

    type: GoodsTypes.cookies,
    price: 303,
    title: "Oreo",
    amount: 45,
  },
  [nanoid()]: {
    type: GoodsTypes.cookies,
    price: 101,
    title: "Snickerdoodles",
    amount: 5,
  },
  [nanoid()]: {
    type: GoodsTypes.chips,
    price: 253,
    title: "Pringles",
    amount: 0,
  },
  [nanoid()]: {
    type: GoodsTypes.chips,
    price: 201,
    title: "Lay's",
    amount: 5,
  }
};

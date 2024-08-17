"use client";

import { useItemStore } from "@/app/stores/itemStore";

export default function ItemList() {
  const { items } = useItemStore();

  return items.map((i) => {
    return <h1 key={i.id}>{i.name}</h1>;
  });
}

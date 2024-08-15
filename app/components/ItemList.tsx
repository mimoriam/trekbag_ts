import { initialItems } from "@/app/constants/initialItems";

export default function ItemList({}) {
  return initialItems.map((i) => {
    return <h1 key={i.id}>{i.name}</h1>;
  });
}

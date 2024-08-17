"use client";

import { useItemStore } from "@/app/stores/itemStore";

export default function ItemList() {
  const { items, toggleItem, deleteItem } = useItemStore();

  return (
    <ul>
      {items.length === 0 ? <p>NO ITEMS</p> : null}

      {items.map((i) => {
        return (
          <li key={i.id} className="list-none">
            <label>
              <input
                type="checkbox"
                checked={i.packed}
                onChange={() => toggleItem(i.id)}
              />
              {i.name}
            </label>

            <button onClick={() => deleteItem(i.id)}>❌</button>
          </li>
        );
      })}
    </ul>
  );
}

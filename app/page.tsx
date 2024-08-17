"use client";

import ItemList from "@/app/components/ItemList";
import AddItemForm from "@/app/components/AddItemForm";
import Counter from "@/app/components/Counter";
import { useItemStore } from "@/app/stores/itemStore";
import ButtonGroup from "@/app/components/ButtonGroup";

export default function Home() {
  const { items } = useItemStore();

  return (
    <>
      <main className="flex space-x-8">
        <div>
          <ItemList />
        </div>
        <div className="flex flex-row justify-end">
          <AddItemForm />
          <div>
            <Counter
              numberOfItemsPacked={items.filter((item) => item.packed).length}
              totalNumberOfItems={items.length}
            />
          </div>
        </div>
      </main>
      <ButtonGroup />
    </>
  );
}

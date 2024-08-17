import ItemList from "@/app/components/ItemList";
import AddItemForm from "@/app/components/AddItemForm";

export default function Home() {
  return (
    <main className="flex space-x-8">
      <div>
        <ItemList />
      </div>
      <div className="flex flex-row justify-end">
        <AddItemForm />
      </div>
    </main>
  );
}

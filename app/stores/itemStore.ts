import { create } from "zustand";
import { initialItems } from "@/app/constants/initialItems";

type ItemType = {
  id: number;
  name: string;
  packed: boolean;
};

interface ItemState {
  items: ItemType[];
  addItem: (newItemText: string) => void;
  deleteItem: (id: number) => void;
  removeAllItems: () => void;
  resetToInitial: () => void;
  markAllAsComplete: () => void;
  markAllAsIncomplete: () => void;
  toggleItem: (id: number) => void;
}

export const useItemStore = create<ItemState>()((set) => ({
  items: initialItems,
  addItem: (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    set((state) => ({ items: [...state.items, newItem] }));
  },

  deleteItem: (id) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      return { items: newItems };
    });
  },

  removeAllItems: () => {
    set(() => ({ items: [] }));
  },

  resetToInitial: () => {
    set(() => ({ items: initialItems }));
  },

  markAllAsComplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: true };
      });

      return { items: newItems };
    });
  },

  markAllAsIncomplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: false };
      });

      return { items: newItems };
    });
  },
  toggleItem: (id) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }

        return item;
      });
      return { items: newItems };
    });
  },
}));

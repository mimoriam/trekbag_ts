"use client";

import { useItemStore } from "@/app/stores/itemStore";

export default function ButtonGroup() {
  const {
    markAllAsComplete,
    markAllAsIncomplete,
    resetToInitial,
    removeAllItems,
  } = useItemStore();

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
  ];

  return (
    <section>
      {secondaryButtons.map((button) => (
        <>
          <button
            key={button.text + button.onClick.toString()}
            onClick={button.onClick}
          >
            {button.text}
          </button>
          <br />
        </>
      ))}
    </section>
  );
}

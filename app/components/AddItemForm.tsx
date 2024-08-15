"use client";

import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const AddItemFormSchema = z.object({
  item: z.string(),
});

export default function AddItemForm({}) {
  const [itemText, setItemText] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof AddItemFormSchema>>({
    resolver: zodResolver(AddItemFormSchema),
    mode: "onChange",
    defaultValues: {
      item: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof AddItemFormSchema>> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Add an Item: </h2>
        <input
          autoFocus
          {...register("item", {
            onChange: (e) => {
              setItemText(e.target.value);
            },
          })}
        />
        <br />
        <button>Add to List</button>
      </form>
    </>
  );
}

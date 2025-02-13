import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {  z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/Icon";

const cartSchema = z.object({
  quantity: z.number().min(0).default(1),
});

export default function AddToCart() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof cartSchema>>({
    resolver: zodResolver(cartSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof cartSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="flex items-center mb-6">
          <Button
            type="submit"
            variant="outline"
            size="icon"
            className="rounded-none rounded-l-sm"
          >
            <Icons.minus />
          </Button>
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <div className="relative ">
                <FormItem className="space-y-0">
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      max={100}
                      className="w-[70px] rounded-none focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
          <Button
            size="icon"
            variant="outline"
            className="rounded-none rounded-r-sm"
          >
            <Icons.plus />
          </Button>
        </div>
        <div className="flex items-center gap-10">
          <Button>Buy Now</Button>
          <Button>Add To Cart</Button>
        </div>
      </form>
    </Form>
  );
}

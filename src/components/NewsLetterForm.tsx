import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Icons } from "./icons/Icon";
import { useState } from "react";

const emailSchema = z.object({
  email: z.string().email({
    message: "Enter the valid email address",
  }),
});

export default function NewsLetterForm() {
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof emailSchema>) {
    console.log(values);
    setIsLoading(true);

    // Set a timeout to stop loading after 10 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        autoComplete="none"
        className=""
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <div className="relative">
              <FormItem className="space-y-0">
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    className="pr-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
              <Button
                type="submit"
                size="icon"
                className="absolute size-7 top-[3.5px] right-[4.5px]"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin"></Loader2>
                ) : (
                  <Icons.paperPlane className="size-3" />
                )}
              </Button>
            </div>
          )}
        />
      </form>
    </Form>
  );
}

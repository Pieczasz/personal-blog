"use client";

// Functions
import { useRouter } from "next/navigation";

// zod
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Components
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// TRPC
import { api } from "@/trpc/react";

const postFormSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters." }),
  slug: z.string().min(3, { message: "Slug must be at least 3 characters." }),
  content: z.string().min(20, {
    message: "Content must be at least 20 characters.",
  }),
  type: z.enum(["life", "productivity", "coding", "trading"]),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export function CreatePostForm() {
  const router = useRouter();

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const form = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      content: "",
      type: "life",
      title: "",
      slug: "",
      createdAt: today.toLocaleDateString(),
      updatedAt: today.toLocaleDateString(),
    },
  });

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  function onSubmit(data: z.infer<typeof postFormSchema>) {
    createPost.mutate(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="my-10 flex w-full flex-col items-start justify-center gap-y-5 px-10"
      >
        <h1 className="mb-5 text-center font-bold">Create a post</h1>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Title (will be shown while searching through blog posts)
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="Title" className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug (will be shown as link)</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Slug" className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <JoditEditor {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full items-end justify-start gap-x-8">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Type of blog post (to which page blog will be pushed)
                </FormLabel>
                <FormControl>
                  {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */}
                  <Select onValueChange={field.onChange} defaultValue={"life"}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a type of blog post" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="life">Life</SelectItem>
                      <SelectItem value="productivity">Productivity</SelectItem>
                      <SelectItem value="coding">Coding</SelectItem>
                      <SelectItem value="trading">Trading</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create Post</Button>
        </div>
      </form>
    </Form>
  );
}

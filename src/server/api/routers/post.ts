import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { posts } from "@/server/db/schema";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(
      z.object({
        content: z.string().min(6),
        type: z.enum(["life", "productivity", "coding", "trading"]),
        createdAt: z.string(),
        updatedAt: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);

      await ctx.db.insert(posts).values({
        content: input.content,
        createdAt: today.toUTCString(),
        updatedAt: today.toUTCString(),
        type: input.type,
      });
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

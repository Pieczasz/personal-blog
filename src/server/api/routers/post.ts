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
        title: z.string().min(1),
        content: z.string().min(1),
        images: z.array(z.string().url()).optional(),
        type: z.enum(["life", "productivity", "coding", "trading"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const now = Date.now().toString();

      await ctx.db.insert(posts).values({
        title: input.title,
        content: input.content,
        createdAt: now,
        updatedAt: now,
        images: input.images ? input.images.join(",") : null,
        createdById: ctx.session.user.id,
        type: input.type,
      });
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

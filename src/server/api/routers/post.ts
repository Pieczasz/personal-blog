import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { posts } from "@/server/db/schema";
import { desc, eq } from "drizzle-orm";

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
        content: z.string().min(20),
        type: z.enum(["life", "productivity", "coding", "trading"]),
        title: z.string().min(3),
        slug: z.string().min(3),
        createdAt: z.string(),
        updatedAt: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);

      await ctx.db.insert(posts).values({
        title: input.title,
        slug: input.slug,
        content: input.content,
        createdAt: today.toUTCString(),
        updatedAt: today.toUTCString(),
        type: input.type,
      });
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

  getLifePosts: publicProcedure.query(async ({ ctx }) => {
    const lifePosts = await ctx.db
      .select()
      .from(posts)
      .where(eq(posts.type, "life"))
      .orderBy(desc(posts.updatedAt));

    return lifePosts;
  }),

  getProductivityPosts: publicProcedure.query(async ({ ctx }) => {
    const lifePosts = await ctx.db
      .select()
      .from(posts)
      .where(eq(posts.type, "productivity"))
      .orderBy(desc(posts.updatedAt));

    return lifePosts;
  }),

  getCodingPosts: publicProcedure.query(async ({ ctx }) => {
    const lifePosts = await ctx.db
      .select()
      .from(posts)
      .where(eq(posts.type, "coding"))
      .orderBy(desc(posts.updatedAt));

    return lifePosts;
  }),

  getTradingPosts: publicProcedure.query(async ({ ctx }) => {
    const lifePosts = await ctx.db
      .select()
      .from(posts)
      .where(eq(posts.type, "trading"))
      .orderBy(desc(posts.updatedAt));

    return lifePosts;
  }),

  getLatestPosts: publicProcedure.query(async ({ ctx }) => {
    const latestPosts = await ctx.db
      .select()
      .from(posts)
      .orderBy(desc(posts.updatedAt))
      .limit(3);

    return latestPosts;
  }),

  getPostBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.db
        .select()
        .from(posts)
        .where(eq(posts.slug, input.slug))
        .limit(1);

      return post;
    }),
});

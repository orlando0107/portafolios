import NextAuth from "next-auth";
import authConfig from "./auth.config";
import PostgresAdapter from "@auth/pg-adapter";
import { pool } from "./config/db";


export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(pool),
  session: { strategy: "jwt" },
  ...authConfig,
});



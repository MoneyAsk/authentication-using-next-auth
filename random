import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export const authOptions={
  providers: [
    GitHubProvider({
        clientId:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET
    }),

  ],
};
// abcd
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
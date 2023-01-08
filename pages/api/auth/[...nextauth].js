import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import DiscordProvider from 'next-auth/providers/discord'

const scopes = ['identify'].join(' ')

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {params: {scope: scopes}},
    }), 
    
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.discord_id = token.id
      session.user.discord_discriminator = token.discriminator
      
      return session
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.id = profile.id
        token.discriminator = profile.discriminator ? profile.discriminator : null
      }
      return token
    }
  }
  
}
export default NextAuth(authOptions)
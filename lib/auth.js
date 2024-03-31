import NextAuth from "next-auth"
import Spotify from "next-auth/providers/spotify"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email user-read-playback-state ugc-image-upload user-modify-playback-state user-read-currently-playing playlist-read-private playlist-modify-private playlist-modify-public user-follow-read user-top-read user-read-recently-played user-library-modify user-library-read user-read-private playlist-read-collaborative",
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
  },
})

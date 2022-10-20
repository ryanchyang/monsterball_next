import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { googleLogIn } from 'utils/api/auth';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === 'google') {
        const result = await googleLogIn(account.id_token);

        if (result.code === 'G_0000') {
          user.country = result.data.country;
          user.address = result.data.address;
          user.systemMfb = result.data.mfb;
          user.systemGold = result.data.gold;
          user.token = result.data.token;
          return true;
        }

        return false;
      }
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.token = user.token;
        token.country = user.country;
        token.address = user.address;
        token.systemMfb = user.systemMfb;
        token.systemGold = user.systemGold;
      }
      return token;
    },
    async session({ session, token, user }) {
      // 重新整理畫面只會走session
      //去更新 session

      session.token = token.token;
      session.user.country = token.country;
      session.user.address = token.address;
      session.user.systemMfb = token.systemMfb;
      session.user.systemGold = token.systemGold;

      return session;
    },
  },
};

export default NextAuth(authOptions);

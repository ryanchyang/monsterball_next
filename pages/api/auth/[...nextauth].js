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
        const githubUser = {
          id: metadata.id,
          login: metadata.login,
          name: metadata.name,
          avatar: user.image,
        };

        user.accessToken = await getTokenFromYourAPIServer(
          'github',
          githubUser
        );

        const result = await googleLogIn(account.id_token);

        if (result.code === 'G_0000') {
          user.country = result.data.country;
          user.systemMfb = result.data.mfb;
          user.systemGold = result.data.gold;
          user.token = result.data.token;
          return true;
        }

        return true;
      }

      const result = await googleLogIn(account.id_token);
      // console.log(result);
      if (result.code === 'G_0000') {
        account.country = result.data.country;
        account.systemMfb = result.data.mfb;
        account.systemGold = result.data.gold;
        account.token = result.data.token;
        return true;
      }
      return false;
    },
    async jwt({ token, user, account }) {
      // console.log({ account });
      token.country = account.country;

      // console.log(user);

      return token;
    },
    async session({ session, token, user }) {
      console.log({ token });
      session.accessToken = token.access_token;
      return session;
    },
  },
};

export default NextAuth(authOptions);

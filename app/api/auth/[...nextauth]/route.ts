import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { UserInfoProps } from '@/ next-auth';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update') {
        token = { ...token, ...session };
      }

      if (user) {
        token = user as UserInfoProps;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token;
      session.access_token = token.access_token;
      // session.expires = dayjs().add(12, 'hours').toISOString();
      console.log(session)
      return session;
    },
  },
});

export { handler as GET, handler as POST };

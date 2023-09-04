import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface ProfileUsers {
  id: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      username: string;
      phone: string;
      email: string;
    } & DefaultSession["user"];
  }

  interface Account {
    profile: ProfileUsers;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    profile: ProfileUsers;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},

      async authorize(credentials, req) {
        const user = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await user.json();

        return json[1];
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, account }) => {
      account!.profile.username = "dwdw";
      account!.profile.email = "email";

      return token;
    },
    session: ({ session, token }) => {
      session.user.name = token.name;
      session.user.phone = "089516151744";
      session.user.email = "ini email";
      session.user.username = "username";

      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = () => {
  return getServerSession(authOptions);
};

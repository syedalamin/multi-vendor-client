/* eslint-disable @typescript-eslint/no-explicit-any */
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user }) {
//       console.log(user)
//       return true;
//     },

//   },
// });

// export { handler as GET, handler as POST };


import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        const defaultPassword = "Default@123";
        const email = profile?.email;
        const firstName = (profile as any)?.given_name;
        const lastName = (profile as any)?.family_name;

        const payload = {
          password: defaultPassword,
          customer: {
            firstName,
            lastName,
            email,
            contactNumber: "",
          },
        };

      
        const registerRes = await fetch(
          `${process.env.BASE_URL}/user/create-customer`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }
        );
        const registerData = await registerRes.json();

        let loginData;

        if (registerData?.success) {
          const payloadLog = {
            password: defaultPassword,
            email: registerData?.data?.email,
          };
          const loginRes = await fetch(`${process.env.BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payloadLog),
          });
          loginData = await loginRes.json();
        } else if (registerData?.success === false) {
          const payloadLog = {
            password: defaultPassword,
            email: email,
          };
          const loginRes = await fetch(`${process.env.BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payloadLog),
          });
          loginData = await loginRes.json();
        }

       
        if (loginData?.data?.accessToken) {
          (user as any).accessToken = loginData.data.accessToken;
        }
      }

      return true;
    },

    async jwt({ token, user }) {
 
      if (user) {
        token.accessToken = (user as any).accessToken;
      }
    //   console.log("user token",user)
      return token;
    },

  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };

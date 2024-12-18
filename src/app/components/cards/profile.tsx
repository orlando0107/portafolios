'use client'
import { useSession, SessionProvider } from "next-auth/react";

export default function Profile() {
    const session = useSession();
    console.log(session)
  return (
    <SessionProvider>
      {/* <p>Welcome {session?.user?.name}</p> */}
      <p>hello</p>
    </SessionProvider>
  );
}

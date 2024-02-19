"use client"
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const {user, error, isLoading} = useUser()
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);
  
  if (user) {
    return (
      <div>
        Welcome {user.name}!
        {/* {user.picture} */}
        <br />
         <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className='text-center text-4xl capitalize'>welcome to my next auth0 application</h1>
    <a href="/api/auth/login">Login</a>
    </main>
  );
}

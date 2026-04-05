import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="width-lg h-screen w-screen text-lg flex items-center justify-center">
      <div >
        todo application 
         <br />
        <Link href="/Signin" className="border p-1 text-xl"> sign in to todo application</Link>
        <br />
        <Link href="/Signup" className="border p-1 text-xl"> sign up to todo application</Link>
      </div>
    </div>
  );
}

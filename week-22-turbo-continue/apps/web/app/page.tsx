"use client"

import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { TextInput } from "@repo/ui/textInput"
import { useRouter } from "next/navigation";



export default function Home() {
  const router =  useRouter();
  return (
    <div>
      <TextInput onChange={()=>alert("hi")}   placeholder="Room Name" ></TextInput>

      <button onClick={()=> {
           router.push("/chat/123")
        }
      }> Join room</button>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";

export default async function Home() {
    const session = await getServerSession();

  
  return (
    <div>
      {session?.user?.name ? (session.user.name): ("Not signed in")}
    </div>
  );
}

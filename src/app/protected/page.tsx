import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export const page = async() =>{
        const session = await getServerSession();
        if(!session || !session.user){
            redirect("/api/auth/signin");
        }

        return(
            <div>
                This is a protected page
            </div>
        )

}

export default page;
"use client";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { RootState } from "../types";

export default function Account() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  
  if (!currentUser) {
    redirect("/Account/Signin");
  } else {
    redirect("/Account/Profile");
  }
}
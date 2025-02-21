// app/components/AppSidebarWrapper.tsx (Server Component)

import { auth } from "@clerk/nextjs/server";
import { AppSidebar } from "./app-sidebar";


export default async function AppSidebarWrapper() {
  const { userId } = await auth(); // Await the promise

  return <AppSidebar userId={userId} />;
}
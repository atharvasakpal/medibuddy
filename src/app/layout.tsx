import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";

import { Toaster } from "@/components/ui/toaster"


import {
  ClerkProvider,
  
} from '@clerk/nextjs'
import AppSidebarWrapper from "@/components/app-sidebar-wrapper";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediBuddy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider defaultOpen={true}>
        <AppSidebarWrapper />
        
          <SidebarTrigger />
          <Toaster />
        {children}
         
        </SidebarProvider>
      </body>
    </html>
    </ClerkProvider>
    
  );
}

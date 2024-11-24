// root layout

import "./globals.css";
import "../components/Navbar";
import Navbar from "../components/Navbar";
import {Inter, Inconsolata, Roboto} from 'next/font/google';
import type { Metadata } from "next";
import React, {ReactNode} from "react";

const inter=Inter({subsets: ['latin']});
const inconsolata=Inconsolata({subsets: ['latin']});

export const metadata:Metadata={
  title: 'tutorial',
  description: '',
  keywords: ''
};

type LayoutProps={
    children: ReactNode;
}

// @ts-ignore
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}

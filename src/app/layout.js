"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link
            className={`link ${pathname === "/" ? styles.active : ""}`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`link ${pathname === "/dashboard" ? styles.active : ""}`}
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className={`link ${pathname === "/contact" ? styles.active : ""}`}
            href="/contact"
          >
            Contact
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}

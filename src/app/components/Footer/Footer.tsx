"use client";
import Link from "next/link";
import { footerLinks } from "../../utils/data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-bg-1 text-grey py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex space-x-6">
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-brand-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.label}</span>
              {item.icon}
            </Link>
          ))}
        </div>

        <p className="text-sm text-center md:text-left">
          &copy; {currentYear} Hasnain Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

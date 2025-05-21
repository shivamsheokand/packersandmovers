"use client";
import { cn } from "../../lib/utils";

export function PageContainer({ children, className }) {
  return <div className={cn("min-h-screen pt-24", className)}>{children}</div>;
}

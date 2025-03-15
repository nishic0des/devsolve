"use client";
import { useAuthStore } from "@/store/Auth";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { session } = useAuthStore();
  const router = useRouter();
  const path = usePathname();

  React.useEffect(() => {
    if (session && path !== "/") {
      router.push("/");
    }
  }, [session, router]);

  if (session === undefined) return null; // Ensure session is loaded before rendering

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center py-12">
      <BackgroundBeams />
      <div className="relative">{children}</div>
    </div>
  );
};

export default Layout;

import { ReactNode } from "react";
import AuthHeader from "@/components/layouts/AuthHeader";
import { Footer } from "@/components/layouts/Footer";
export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col">
        <AuthHeader />
        <main className="flex-grow p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

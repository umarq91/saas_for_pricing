import { NavBar } from "./_components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-accent/5 min-h-screen">
      <NavBar/>
      <div className="container py-6">{children}</div>
    </div>
  );
}

import TopbarMenu from "@/components/topbar-menu";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <TopbarMenu />
        {children}
      </div>
    </div>
  );
}
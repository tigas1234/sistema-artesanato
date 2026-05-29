import { TooltipProvider } from "@/components/ui/tooltip";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/app-sidebar";

import { Separator } from "@/components/ui/separator";

export default function PrivateLayout({ children }) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />

        <SidebarInset>
          <header className="flex h-16 items-center gap-2 px-4 border-b">
            <SidebarTrigger />

            <Separator
              orientation="vertical"
              className="h-4"
            />

            <h1 className="font-semibold">
              Sistema Artesanato
            </h1>
          </header>

          <main className="p-6">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
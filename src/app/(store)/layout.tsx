import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebsiteAssistant from "@/components/WebsiteAssistant";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WebsiteAssistant />
    </div>
  );
}

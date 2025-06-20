import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";

export default function DownloadCTA() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "https://agua.one/apk/swiftjoint/swiftjoint-v1.0.6.apk";
    link.download = "swiftjoint-v1.0.6.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pb-10 flex justify-center">
      <Button 
        size={'lg'} 
        className="text-xl py-6 px-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 transition-opacity cursor-pointer"
        onClick={handleDownload}
      >
        <DownloadCloud className="mr-2" size={24} />
        DOWNLOAD
      </Button>
    </section>
  );
}

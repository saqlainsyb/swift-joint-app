import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section className="pb-10 flex justify-center">
      <Button size={'lg'} className="text-xl py-6 px-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 transition-opacity">
        <DownloadCloud className="mr-2" size={24} />
        DOWNLOAD
      </Button>
    </section>
  );
}

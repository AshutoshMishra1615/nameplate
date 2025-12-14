import { PenTool } from "lucide-react";

export default function Logo({ className = "", light = false }: { className?: string, light?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`relative w-10 h-10 flex items-center justify-center rounded-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 ${light ? "bg-white" : "bg-stone-900"}`}>
        <PenTool className={`w-6 h-6 ${light ? "text-stone-900" : "text-white"}`} />
        <div className={`absolute -bottom-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 ${light ? "border-stone-900" : "border-white"}`} />
      </div>
      <div className="flex flex-col">
        <span className={`font-serif font-bold text-xl leading-none ${light ? "text-white" : "text-stone-900"}`}>
          GetA
        </span>
        <span className="font-serif font-bold text-xl leading-none text-orange-600">
          Nameplate
        </span>
      </div>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";

export function WorkStatus() {
  return (
    <div className="flex justify-center lg:justify-start mb-8">
      <Badge
        variant="outline"
        className="px-4 py-1.5 rounded-full bg-primary/5 border-primary/20 text-primary animate-pulse flex items-center gap-2 text-[2.5vw] md:text-xs font-mono uppercase tracking-widest"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        Current Status: Optimizing WMS for Sainsbury’s
      </Badge>
    </div>
  );
}

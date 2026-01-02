import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Terminal, Activity, GitCommit, Box } from "lucide-react"

export function DevelopmentLab() {
  return (
    <section id="lab" className="space-y-8 py-0">
      <div className="flex items-center gap-3">
        <Terminal className="w-5 h-5 text-primary" />
        <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Development Lab</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Terminal Dashboard */}
        <Card className="md:col-span-8 bg-black/40 border-border/50 font-mono text-sm overflow-hidden">
          <CardHeader className="bg-muted/30 py-3 border-b border-border/50 flex flex-row items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
              gauthum-j@portfolio:~/dev-lab
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-primary">{">"}</span>
              <div className="space-y-1">
                <p className="text-foreground">What I’m Building</p>
                <p className="text-muted-foreground">Integrated Logistics Dashboard v2.0</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 border border-primary/10 bg-primary/5 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground uppercase">Current Sprint</span>
                  <Badge variant="outline" className="text-[10px] border-primary/30 text-primary">
                    In Progress
                  </Badge>
                </div>
                <p className="text-lg font-bold text-foreground">WMS API Overhaul</p>
                <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[65%]" />
                </div>
              </div>

              <div className="p-4 border border-border/50 bg-muted/20 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground uppercase">Deployment Env</span>
                  <Box className="w-3 h-3 text-muted-foreground" />
                </div>
                <p className="text-lg font-bold text-foreground">AWS / EKS Cluster</p>
                <p className="text-[10px] text-green-500 flex items-center gap-1">
                  <Activity className="w-2 h-2" /> STABLE
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GitHub Pulse */}
        <Card className="md:col-span-4 bg-card/50 border-border/50 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Github className="w-4 h-4" /> Latest from GitHub
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between py-4">
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm font-bold text-foreground truncate">supply-chain-optimizer</p>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  React-based simulation for warehouse node efficiency.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-[10px] font-mono text-green-500 uppercase tracking-tighter">
                  Active Development
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-border/50 mt-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground flex items-center gap-1">
                  <GitCommit className="w-3 h-3" /> Monthly Commits
                </span>
                <span className="text-primary font-bold">142</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">Pull Requests</span>
                <span className="text-foreground">12</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

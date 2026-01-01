import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BentoGrid, BentoCard } from "@/components/bento-grid"
import { AnimatedCounter } from "@/components/animated-counter"
import { FileText, Github, Linkedin, Mail, ArrowUpRight, Database, Package, Truck, Code2, Cloud } from "lucide-react"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-12 lg:py-24 selection:bg-primary/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Fixed Content on Desktop */}
        <aside className="lg:col-span-5 flex flex-col justify-between lg:sticky lg:top-24 lg:h-[calc(100vh-12rem)]">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">Gauthum</h1>
            <h2 className="mt-4 text-xl font-medium text-primary tracking-wide uppercase">
              Supply Chain Systems Engineer
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-sm">
              Engineering resilient supply chains at scale. Specializing in WMS optimization, fleet management, and
              real-time logistics data.
            </p>

            <nav className="hidden lg:flex flex-col gap-4 mt-16 text-sm font-bold tracking-widest uppercase text-muted-foreground">
              <a href="#about" className="group flex items-center gap-4 hover:text-foreground transition-colors">
                <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all"></span>
                About
              </a>
              <a href="#experience" className="group flex items-center gap-4 hover:text-foreground transition-colors">
                <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all"></span>
                Experience
              </a>
              <a href="#projects" className="group flex items-center gap-4 hover:text-foreground transition-colors">
                <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all"></span>
                Projects
              </a>
            </nav>
          </div>

          <div className="mt-12 lg:mt-0 space-y-8">
            <div className="flex items-center gap-6 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <Button
                variant="outline"
                className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50 bg-transparent"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-bold text-foreground">
                  <AnimatedCounter end={100} suffix="k+" />
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Records Migrated</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">
                  <AnimatedCounter end={200} suffix="+" />
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Weekly Hours Saved</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Column: Scrollable Content */}
        <div className="lg:col-span-7 space-y-24">
          <section id="about" className="space-y-6">
            <h3 className="lg:hidden text-sm font-bold tracking-widest uppercase text-muted-foreground mb-8">About</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a results-driven Systems Engineer with a focus on optimizing complex logistics networks. Currently, I
              work with <span className="text-foreground font-medium">Sainsbury's (via TCS)</span>, where I manage and
              enhance Warehouse Management Systems (WMS) that handle millions of transactions weekly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach blends industrial engineering principles with modern full-stack development. Whether it's
              automating fleet logistics or building real-time transit trackers, I focus on building systems that are
              not just efficient, but resilient to the unpredictability of global supply chains.
            </p>
          </section>

          <section id="experience" className="space-y-12">
            <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Experience</h3>
            <div className="group space-y-12">
              <div className="relative pl-8 border-l border-primary/20 hover:border-primary transition-colors">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary" />
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Systems Engineer • Tata Consultancy Services
                  </h4>
                  <span className="text-sm text-muted-foreground shrink-0">Nov 2021 — Present</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground mt-1">
                  Client: Sainsbury's (Supply Chain Transformation)
                </p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    Spearheading migration of legacy WMS to cloud-native Körber platforms, resulting in a 20% efficiency
                    gain across 5 flagship depots.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    Optimized SQL query performance for real-time inventory tracking, reducing dashboard latency by 45%.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-primary/5 text-primary-foreground/80 hover:bg-primary/10">
                    WMS (Körber)
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/5 text-primary-foreground/80 hover:bg-primary/10">
                    Oracle SQL
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/5 text-primary-foreground/80 hover:bg-primary/10">
                    Unix Shell
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Featured Projects</h3>
            <BentoGrid>
              <BentoCard
                className="md:col-span-2"
                title="Sainsbury’s WMS Optimization"
                description="Engineered a system migration that improved warehouse throughput by 20% through automated inventory reconciliation."
                header={<Package className="w-8 h-8 text-primary mb-2" />}
              />
              <BentoCard
                title="Spry Fleet Management"
                description="Mercedes-Benz Hackathon Finalist. Predictive maintenance and routing app for heavy-duty fleets."
                header={<Truck className="w-8 h-8 text-primary mb-2" />}
              />
              <BentoCard
                title="Real-time Transit Tracker"
                description="Live bus and subway tracking system using public APIs and WebSockets for low-latency updates."
                header={<ArrowUpRight className="w-8 h-8 text-primary mb-2" />}
              />
              <BentoCard
                className="md:col-span-2"
                title="Inventory Analytics Engine"
                description="A custom dashboard built with Python and SQL to visualize supply chain bottlenecks and demand spikes."
                header={<Database className="w-8 h-8 text-primary mb-2" />}
              />
            </BentoGrid>
          </section>

          <section className="space-y-8">
            <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Technical Toolkit</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Core Engineering</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "SQL (PostgreSQL/Oracle)", "JavaScript (React)", "Java", "Unix"].map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-background/50 border-border/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Cloud className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Logistics & Infrastructure</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Körber WMS", "AWS", "Jenkins", "Docker", "Git", "Splunk"].map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-background/50 border-border/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-8">
            <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Get In Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-card border border-border/50 rounded-lg p-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-card border border-border/50 rounded-lg p-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-card border border-border/50 rounded-lg p-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
              ></textarea>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6">Send Message</Button>
            </form>
          </section>

          <footer className="pt-12 border-t border-border/50 text-sm text-muted-foreground text-center lg:text-left">
            <p>© 2026 • Built with precision for the modern supply chain.</p>
          </footer>
        </div>
      </div>
    </main>
  )
}

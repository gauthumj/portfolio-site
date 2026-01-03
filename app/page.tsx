// TODO: add icons to headings
// TODO: setup stats.json and gh actions for dev lab
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BentoGrid, BentoCard } from "@/components/bento-grid";
import { AnimatedCounter } from "@/components/animated-counter";
import { WorkStatus } from "@/components/work-status";
import { LogisticsMesh } from "@/components/supply-chain-visuals";
import { DevelopmentLab } from "@/components/development-lab";
import Image from "next/image";
import {
  FileText,
  Github,
  Linkedin,
  Mail,
  DatabaseZap,
  Cpu,
  Package,
  Truck,
  Code2,
  Cloud,
  Link,
  BriefcaseBusiness,
  PencilRuler,
  Swords,
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function PortfolioPage() {
  const [formVals, setFormVals] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <main className="relative min-h-screen max-w-6xl mx-auto py-12 lg:py-16 selection:bg-primary/30 px-6">
      {/* Background Logistics Visuals */}
      <LogisticsMesh />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Left Column: Fixed Content on Desktop */}
        <aside className="lg:col-span-5 flex flex-col justify-between lg:sticky lg:top-16 lg:h-[calc(100vh-12rem)]">
          <div>
            <WorkStatus />
            <div className="flex flex-col md:flex-row items-center-safe ">
              <Image
                src="\images\Gauthum_formal_2_1-linkedin.png"
                alt="Gauthum J"
                width={100}
                height={100}
                priority
                className="rounded-full border-2 border-primary/20 w-24 h-24 md:w-32 md:h-32 object-cover "
              />

              <div className="ml-6 items-center-safe text-center md:text-left mt-4 md:mt-0">
                <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                  Gauthum J
                </h1>
                <h2 className="mt-4 text-md font-medium text-primary  uppercase">
                  Supply Chain Systems Engineer
                </h2>
              </div>
            </div>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-sm">
              Engineering resilient supply chains at scale. Specializing in WMS
              optimization, fleet management, and real-time logistics data.
            </p>

            <nav className="hidden lg:flex flex-col gap-4 text-sm font-bold tracking-widest uppercase text-muted-foreground mb-0 py-0 mt-8 md:my-5">
              <a
                href="#about"
                className="group flex items-center gap-4 hover:text-foreground transition-colors"
              >
                <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all"></span>
                About
              </a>
              <a
                href="#lab"
                className="group flex items-center gap-4 hover:text-foreground transition-colors"
              >
                <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all"></span>
                Dev Lab
              </a>
              <a
                href="#experience"
                className="group flex items-center gap-4 hover:text-foreground transition-colors"
              >
                <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all"></span>
                Experience
              </a>
              <a
                href="#projects"
                className="group flex items-center gap-4 hover:text-foreground transition-colors"
              >
                <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all"></span>
                Projects
              </a>
            </nav>
          </div>

          <div className="mt-12 lg:mt-0 space-y-8">
            <div className="flex items-center gap-8 text-muted-foreground py-0 my-2">
              <a
                href="https://github.com/gauthumj"
                className="hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/gauthum-j"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:jgauthum@gmail.com"
                className="hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="/docs/Gauthum_J_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50 bg-transparent"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-bold text-foreground">
                  <AnimatedCounter end={100} suffix="k+" />
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  Records Migrated
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">
                  <AnimatedCounter end={200} suffix="+" />
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  Weekly Hours Saved
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Column: Scrollable Content */}
        <div className="lg:col-span-7 space-y-24">
          <section id="about" className="space-y-6">
            <h3 className="lg:hidden text-sm font-bold tracking-widest uppercase text-muted-foreground mb-8">
              About
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a results-driven Systems Engineer with a focus on optimizing
              complex logistics networks. Currently, I work with{" "}
              <span className="text-foreground font-medium">
                Sainsbury's (via TCS)
              </span>
              , where I manage and enhance Warehouse Management Systems (WMS)
              that handle millions of transactions weekly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach blends industrial engineering principles with modern
              full-stack development. Whether it's automating fleet logistics or
              building real-time transit trackers, I focus on building systems
              that are not just efficient, but resilient to the unpredictability
              of global supply chains.
            </p>
          </section>

          <DevelopmentLab />

          <section id="experience" className="space-y-12">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
                Experience
              </h3>
            </div>
            <div className="space-y-12">
              {/* Updated TCS / Sainsbury's experience */}
              <div className="group relative pl-8 border-l border-primary/20 hover:border-primary transition-colors">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary" />
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Systems Engineer • TCS - Sainsbury's
                  </h4>
                  <span className="text-sm text-muted-foreground shrink-0">
                    June 2023 — Present
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground mt-1">
                  Chennai, India
                </p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    Engineered automated inventory workflows using SQL and
                    PowerShell, eliminating 200+ hours of manual effort weekly
                    and executing a migration of 100,000+ records with 0%
                    failure rate and zero business disruption.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    Optimized Warehouse Management System (WMS) core logic and
                    features, streamlining workflows to improve end-user
                    operational efficiency by ~20%.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    Partnered with cross-functional teams to troubleshoot and
                    resolve critical system bottlenecks, maintaining 99.9%
                    uptime and ensuring business continuity.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    Orchestrated CI/CD pipelines via GitHub Actions to automate
                    packaging and deployment, reducing weekly release overhead
                    and eliminating manual errors across Non-Prod and Prod
                    environments.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge
                    variant="secondary"
                    className="bg-primary/5 text-primary-foreground/80 hover:bg-primary/10"
                  >
                    WMS (Körber)
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/5 text-primary-foreground/80 hover:bg-primary/10"
                  >
                    SQL & PowerShell
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/5 text-primary-foreground/80 hover:bg-primary/10"
                  >
                    GitHub Actions
                  </Badge>
                </div>
              </div>

              {/* Added Unipe Internship */}
              <div className="group relative pl-8 border-l border-primary/20 hover:border-primary transition-colors">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary" />
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Software Engineering Intern • Unipe
                  </h4>
                  <span className="text-sm text-muted-foreground shrink-0">
                    May 2022 — July 2022
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground mt-1">
                  Bangalore, India
                </p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    Built 10+ AWS Lambda functions and API Gateways, reducing
                    backend response time by 30%.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    Scraped and automated minimum wage data extraction for 28
                    Indian states using Python, eliminating manual entry.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    Designed ReactJS interfaces that improved user engagement by
                    25%.
                  </li>
                </ul>
              </div>

              {/* Added D3View Internship */}
              <div className="group relative pl-8 border-l border-primary/20 hover:border-primary transition-colors">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary" />
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Software Research and Development Intern • D3View
                  </h4>
                  <span className="text-sm text-muted-foreground shrink-0">
                    March 2021 — July 2021
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground mt-1">
                  Detroit, USA
                </p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    Automated 30+ test cases with Selenium and Python, cutting
                    QA time from 30 to 3 minutes per test.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    Refactored testing scripts into reusable modules, improving
                    framework scalability and reducing maintenance effort by
                    40%.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <div className="flex items-center gap-3">
              <PencilRuler className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
                Featured Projects
              </h3>
            </div>
            <BentoGrid>
              {/* Existing projects */}
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
                header={<DatabaseZap className="w-8 h-8 text-primary mb-2" />}
              />
              {/* Added ASL to Speech Engine */}
              <BentoCard
                className="md:col-span-2"
                title="ASL to Speech Engine"
                description="TensorFlow-powered neural network that translates American Sign Language into real-time speech via a mobile application, enabling accessible communication."
                header={<Cpu className="w-8 h-8 text-primary mb-2" />}
              />
            </BentoGrid>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <Swords className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
                Technical Toolkit
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Core Engineering</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "SQL (PostgreSQL/Oracle)",
                      "JavaScript (React)",
                      "Java",
                      "Unix",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-background/50 border-border/50"
                      >
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
                    <h4 className="font-semibold">
                      Logistics & Infrastructure
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Körber WMS",
                      "AWS",
                      "Jenkins",
                      "Docker",
                      "Git",
                      "Splunk",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-background/50 border-border/50"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />

              <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
                Get In Touch
              </h3>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={formVals.name}
                  onChange={(e) =>
                    setFormVals({ ...formVals, name: e.target.value })
                  }
                  placeholder="Name"
                  className="bg-card border border-border/50 rounded-lg p-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="email"
                  value={formVals.email}
                  onChange={(e) =>
                    setFormVals({ ...formVals, email: e.target.value })
                  }
                  placeholder="Email"
                  className="bg-card border border-border/50 rounded-lg p-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <textarea
                value={formVals.message}
                onChange={(e) =>
                  setFormVals({ ...formVals, message: e.target.value })
                }
                placeholder="Message"
                rows={4}
                className="w-full bg-card border border-border/50 rounded-lg p-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
              ></textarea>
              <p className="text-sm text-muted-foreground block">
                <span className="text-primary">Note: </span>This form is
                directly handled via my home-server. No third-party services are
                used. Your details are safe and secure.
              </p>
            </form>
            <Button
              onClick={() => {
                console.log(formVals);
                // toast.success("Message sent! I'll get back to you soon.", {
                //   duration: 4000,
                //   position: "top-center",
                // });
                toast.promise(
                  new Promise((resolve) => {
                    fetch(
                      "https://gauthumj-home-server.onrender.com/api/contact",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formVals),
                      }
                    ).then((response) => {
                      if (response.ok) {
                        resolve(true);
                      } else {
                        throw new Error("Network response was not ok");
                      }
                    });
                  }),
                  {
                    loading: "Sending message...",
                    success: "Message sent! I'll get back to you soon.",
                    error: "Failed to send message. Please try again later.",
                  }
                ),
                  {
                    duration: 4000,
                    position: "top-center",
                  };
              }}
              className="w-full bg-primary hover:bg-primary/90  text-white font-bold py-6"
            >
              Send Message
            </Button>
          </section>

          <footer className="pt-17 border-t border-border/50 text-sm text-muted-foreground text-center lg:text-left">
            <p>© 2026 • Built with precision for the modern supply chain.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}

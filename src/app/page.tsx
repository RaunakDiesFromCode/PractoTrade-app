import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  LineChart,
  Shield,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className=" w-full border-b bg-background/95 ">
        <div className=" flex h-16 items-center justify-between">
          <nav className="hidden md:flex items-center gap-20 mx-auto">
            <Link
              href="#features"
              className="text-sm font-medium relative group"
            >
              Features
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium relative group"
            >
              How It Works
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full px-5 md:px-10 py-12 md:py-24 lg:py-36 bg-gradient-to-b from-background to-muted">
          <div className="">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Next-Gen Stock Analysis
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Decode Sentiment,
                  <br />
                  Trade Confidently
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Practo Trade leverages advanced Machine Learning to analyze
                  market sentiment from news, social media, and financial
                  reports, giving you the edge in making informed trading
                  decisions.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/home">
                      Get started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Secure & Private</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-3xl opacity-70"></div>
                <Image
                  src="/practo_landing_3.png"
                  alt="Practo Trade Dashboard"
                  width={600}
                  height={600}
                  className="relative rounded-xl border shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-38">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Powerful Sentiment Analysis
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform analyzes thousands of data points to provide you
                  with actionable insights.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 h-16 w-16 bg-primary/10 rounded-bl-full"></div>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Real-time Sentiment</CardTitle>
                  <CardDescription>
                    Track market sentiment as it evolves with real-time analysis
                    of news and social media.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 h-16 w-16 bg-primary/10 rounded-bl-full"></div>
                <CardHeader>
                  <LineChart className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Predictive Analytics</CardTitle>
                  <CardDescription>
                    Advanced algorithms predict market movements based on
                    historical patterns and sentiment.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 h-16 w-16 bg-primary/10 rounded-bl-full"></div>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Latest News</CardTitle>
                  <CardDescription>
                    Stay updated with the latest news articles and trends that
                    impact your trades.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-40 bg-muted"
        >
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  From Data to Decisions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform transforms complex market data into clear,
                  actionable insights.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold">Data Collection</h3>
                <p className="text-muted-foreground">
                  We gather data from news sources, social media, financial
                  reports, and market activity.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold">Sentiment Analysis</h3>
                <p className="text-muted-foreground">
                  Our ML models analyze sentiment, identify patterns, and
                  generate predictions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold">Actionable Insights</h3>
                <p className="text-muted-foreground">
                  You receive clear recommendations and insights to inform your
                  trading decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-20 lg:py-20 bg-primary text-primary-foreground">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Trade Smarter?
                </h2>
                <p className="max-w-[600px] text-primary-foreground/90 md:text-xl/relaxed">
                  Join thousands of traders who are making more informed
                  decisions with Practo Trade.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/home">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

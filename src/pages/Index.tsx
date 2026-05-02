import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Menu } from "lucide-react";
import heroBedroom from "@/assets/hero-bedroom.png";
import bedroomTop from "@/assets/bedroom-top.jpg";
import bedroomMirror from "@/assets/bedroom-mirror.jpg";
import iconMagnify from "@/assets/icon-magnify.png";
import iconChart from "@/assets/icon-chart.png";
import iconPerson from "@/assets/icon-person.png";
import iconHouse from "@/assets/icon-house.svg";
import logo from "@/assets/logo.svg";

const navLinks = ["Home", "About Us", "Calculate ROI", "How Does It Work?"];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative px-3 pt-3 sm:px-6 sm:pt-6">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={heroBedroom}
            alt="Luxury managed bedroom"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />

          {/* NAV */}
          <nav className="relative z-10 flex items-center justify-between px-5 py-5 sm:px-10">
            <a href="#" className="flex items-center gap-2 md:order-1">
              <img src={logo} alt="AvaronBnB" className="h-8 w-auto brightness-0 invert sm:h-9" />
            </a>
            <button className="rounded-full bg-primary/80 p-2.5 text-primary-foreground backdrop-blur md:hidden" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
            <ul className="hidden items-center gap-8 text-sm font-medium text-primary-foreground md:order-2 md:flex">
              {navLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="opacity-90 transition hover:opacity-100">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="absolute right-5 top-5 rounded-full bg-primary px-5 text-xs text-primary-foreground hover:bg-primary/90 sm:px-6 sm:text-sm md:static md:order-3">
              <span className="md:hidden">Book Consultation</span>
              <span className="hidden md:inline">Contact Us</span>
            </Button>
          </nav>

          {/* HERO CONTENT */}
          <div className="relative z-10 flex flex-col items-center px-5 pb-12 pt-8 text-center text-primary-foreground sm:pb-24 sm:pt-24">
            <h1 className="max-w-3xl font-display font-bold leading-tight text-2xl sm:text-5xl md:text-6xl animate-fade-in">
              <span className="sm:hidden">
                Earn More From Your <span className="text-gold">Property</span>
              </span>
              <span className="hidden sm:inline">
                Turn Your Property Into a
                <br />
                <span className="text-gold">High-Yield Asset</span>
                <span className="text-primary-foreground">, Without Managing It Yourself</span>
              </span>
            </h1>
            <p className="mt-3 max-w-xl text-sm opacity-90 sm:mt-6 sm:text-base">
              <span className="sm:hidden">Up to 24% higher returns with full management</span>
              <span className="hidden sm:inline">
                AvaronBnB handles everything, from guest management to property optimization.
                <br className="hidden sm:block" /> So you earn more without lifting a finger.
              </span>
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
              <Button size="lg" className="h-10 rounded-full bg-primary px-5 text-xs text-primary-foreground hover:bg-primary/90 sm:h-11 sm:px-7 sm:text-sm">
                <span className="sm:hidden">Book a Free Call</span>
                <span className="hidden sm:inline">Book a Free Consultation</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-10 rounded-full border-primary-foreground/40 bg-primary-foreground/10 px-5 text-xs text-primary-foreground backdrop-blur hover:bg-primary-foreground/20 hover:text-primary-foreground sm:h-11 sm:px-7 sm:text-sm"
              >
                <span className="sm:hidden">See How It Works</span>
                <span className="hidden sm:inline">Browse Stays</span>
              </Button>
            </div>

            {/* Estimate bar */}
            <div className="mt-6 w-full max-w-3xl rounded-full bg-primary-foreground/15 p-1.5 backdrop-blur-md sm:mt-10 sm:p-2">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="flex flex-1 items-center gap-2 px-3 sm:px-4">
                  <img src={iconHouse} alt="" className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <Input
                    placeholder="Enter property address for estimate..."
                    className="h-9 border-0 bg-transparent p-0 text-xs text-primary-foreground placeholder:text-primary-foreground/70 focus-visible:ring-0 sm:h-10 sm:text-sm"
                  />
                </div>
                <div className="hidden h-8 w-px bg-primary-foreground/30 sm:block" />
                <Select defaultValue="luxury">
                  <SelectTrigger className="hidden h-10 border-0 bg-transparent text-sm text-primary-foreground focus:ring-0 sm:flex sm:w-48">
                    <div className="flex items-center gap-2">
                      <img src={iconHouse} alt="" className="h-4 w-4" />
                      <SelectValue />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="luxury">Luxury Villa</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="h-9 shrink-0 rounded-full bg-primary px-4 text-xs text-primary-foreground hover:bg-primary/90 sm:h-10 sm:px-6 sm:text-sm">
                  <span className="sm:hidden">Estimate</span>
                  <span className="hidden sm:inline">Estimate Earnings</span>
                </Button>
              </div>
            </div>
            <p className="mt-3 text-[11px] text-gold sm:mt-4 sm:text-xs">
              <span className="font-semibold">New:</span>{" "}
              <span className="text-primary-foreground/80">Real-time market data integration for 2024 projections.</span>
            </p>

            {/* dots */}
            <div className="mt-6 flex gap-2 sm:mt-10">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="h-2 w-2 rounded-full bg-primary-foreground/40" />
              <span className="h-2 w-2 rounded-full bg-primary-foreground/40" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-5 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            A Smarter Way to Own. A Better Way to Earn.
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base">
            We combine expert property management with data-driven strategies to transform your property into a
            consistently high-performing asset. You stay hands-off, we handle the rest.
          </p>

          {/* Mobile: horizontal snap scroll. Desktop: 2-col aligned grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:items-stretch">
            {/* LEFT: Premium Property Positioning */}
            <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-card md:h-full">
              <div className="relative h-[360px] md:h-full md:min-h-full">
                <img
                  src={bedroomTop}
                  alt="Premium Property"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6 text-primary-foreground">
                  <img src={iconMagnify} alt="" className="absolute left-6 top-6 h-10 w-10" />
                  <h3 className="font-display text-xl font-bold">Premium Property Positioning</h3>
                  <p className="mt-2 max-w-md text-sm opacity-90">
                    We position your property with professional photography and pricing strategies to ensure it stands
                    out and commands premium rates.
                  </p>
                  <Button className="mt-4 w-fit rounded-full bg-primary-foreground/15 px-5 text-primary-foreground backdrop-blur hover:bg-primary-foreground/25">
                    Talk to an Expert
                  </Button>
                </div>
              </div>
            </Card>

            {/* RIGHT COL: stacked cards */}
            <div className="flex flex-col gap-5">
              {/* Hidden on mobile per figma, shown on desktop */}
              <Card className="hidden overflow-hidden rounded-2xl border-0 bg-card p-5 shadow-card md:block">
                <img src={iconHouse} alt="" className="h-8 w-8" />
                <h3 className="mt-2 font-display text-base font-bold text-foreground">Luxury Guest Experience</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We manage guest interactions, check-ins, concierge services, and issue resolution for exceptional reviews.
                </p>
                <img
                  src={bedroomMirror}
                  alt="Guest experience"
                  className="mt-3 h-24 w-full rounded-xl object-cover"
                />
              </Card>

              <Card className="rounded-2xl border-0 bg-card p-5 shadow-card">
                <img src={iconChart} alt="" className="h-9 w-9" />
                <h3 className="mt-2 font-display text-base font-bold text-foreground">Revenue Optimization</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Smart pricing strategies that adapt in real-time to maximize occupancy and nightly rates.
                </p>
              </Card>

              <Card className="rounded-2xl border-0 bg-card p-5 shadow-card">
                <img src={iconPerson} alt="" className="h-9 w-9" />
                <h3 className="mt-2 font-display text-base font-bold text-foreground">End-to-End Property Management</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We handle all aspects of your property to keep it guest-ready, compliant, and performing well.
                </p>
              </Card>
            </div>
          </div>

          {/* Stats / CTA */}
          <Card className="mt-6 grid grid-cols-1 items-center gap-6 rounded-2xl border-0 bg-card p-6 shadow-card md:grid-cols-2">
            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
              <div>
                <p className="font-display text-2xl font-bold text-accent">24%</p>
                <p className="mt-1 text-xs font-medium text-foreground">Avg. Annual Yield</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-accent">$42M</p>
                <p className="mt-1 text-xs font-medium text-foreground">Assets Managed</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-accent">4.9/5</p>
                <p className="mt-1 text-xs font-medium text-foreground">Guest Satisfaction</p>
              </div>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:items-start md:items-end">
              <p className="text-center text-sm text-muted-foreground md:text-right">Ready to see what your property is truly worth?</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button className="w-full rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90 sm:w-auto">
                  Book a Consultation
                </Button>
                <Button className="w-full rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90 sm:w-auto">
                  See Our Results
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;

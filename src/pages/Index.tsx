import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Menu, TrendingUp, ChevronDown, Heart, Bath, Bed, Star, Ruler, Check, Search, SlidersHorizontal, BadgeCheck, Globe, MessageSquare, CreditCard, Shield, ShieldCheck } from "lucide-react";
import heroBedroom from "@/assets/hero-bedroom.png";
import bedroomTop from "@/assets/bedroom-top.jpg";
import bedroomMirror from "@/assets/bedroom-mirror.jpg";
import provenBedroom from "@/assets/proven-bedroom.jpg";
import calcBedroom from "@/assets/calc-bedroom.jpg";
import iconMagnify from "@/assets/icon-magnify.png";
import iconChart from "@/assets/icon-chart.png";
import iconPerson from "@/assets/icon-person.png";
import iconHouse from "@/assets/icon-house.svg";
import iconRocket from "@/assets/icon-rocket.png";
import iconBuilding from "@/assets/icon-building.png";
import iconMonitor from "@/assets/icon-monitor.png";
import iconBulb from "@/assets/icon-bulb.png";
import iconMoney from "@/assets/icon-moneybag.png";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import stepsKitchen from "@/assets/steps-kitchen.jpg";
import logo from "@/assets/logo.svg";

const navLinks = ["Home", "About Us", "Calculate ROI", "How Does It Work?"];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative">
        <div className="relative overflow-hidden">
          <img
            src={heroBedroom}
            alt="Luxury managed bedroom"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />

          {/* NAV */}
          <nav className="relative z-10 flex items-center justify-between px-5 py-5 sm:px-10">
            <div className="flex items-center gap-2 md:hidden">
              <button className="rounded-full bg-primary/80 p-2.5 text-primary-foreground backdrop-blur" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </button>
            </div>
            <a href="#" className="hidden items-center gap-2 md:flex">
              <img src={logo} alt="AvaronBnB" className="h-9 w-auto brightness-0 invert" />
            </a>
            <ul className="hidden items-center gap-8 text-sm font-medium text-primary-foreground md:flex">
              {navLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="opacity-90 transition hover:opacity-100">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="rounded-full bg-primary px-5 text-xs text-primary-foreground hover:bg-primary/90 sm:px-6 sm:text-sm">
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
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            A Smarter Way to Own. A Better Way to Earn.
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base">
            We combine expert property management with data-driven strategies to transform your property into a
            consistently high-performing asset. You stay hands-off, we handle the rest.
          </p>

          {/* Top row: image card + luxury guest experience */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:items-stretch">
            {/* LEFT: Premium Property Positioning */}
            <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-card md:h-full">
              <div className="relative h-[360px] md:h-full md:min-h-[340px]">
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

            {/* RIGHT: Luxury Guest Experience */}
            <Card className="hidden overflow-hidden rounded-2xl border-0 bg-card p-5 shadow-card md:block">
              <img src={iconHouse} alt="" className="h-8 w-8" />
              <h3 className="mt-2 font-display text-base font-bold text-foreground">Luxury Guest Experience</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We manage guest interactions, check-ins, concierge services, and issue resolution for exceptional reviews.
              </p>
              <img
                src={bedroomMirror}
                alt="Guest experience"
                className="mt-3 h-40 w-full rounded-xl object-cover"
              />
            </Card>
          </div>

          {/* Bottom row: two cards side by side */}
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
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

      {/* WE MANAGE EVERYTHING */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            <span className="sm:hidden">We Manage &amp; You Keep the Returns.</span>
            <span className="hidden sm:inline">We Manage Everything. You Keep the Returns.</span>
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base">
            <span className="sm:hidden">Transparent profit-sharing model. Our success depends on yours.</span>
            <span className="hidden sm:inline">
              AvaronBnB operates on a transparent profit-sharing model, the more your property earns, the better it is
              for both of us. Our incentives are perfectly aligned with yours.
            </span>
          </p>

          {/* DESKTOP grid */}
          <div className="mt-8 hidden grid-cols-3 grid-rows-2 gap-4 md:grid">
            {/* Row 1, Col 1 */}
            <Card className="rounded-2xl border-0 bg-card p-5 shadow-card">
              <p className="font-display text-2xl font-bold text-foreground">+35%</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Consistent Increase In Rental Occupancy Within The First 90 Days
              </p>
              <p className="mt-3 flex items-center gap-1 text-xs font-medium text-emerald-600">
                <TrendingUp className="h-3.5 w-3.5" /> +12% from last year
              </p>
            </Card>

            {/* Row 1, Col 2 */}
            <Card className="rounded-2xl border-0 bg-card p-5 shadow-card">
              <p className="font-display text-2xl font-bold text-foreground">92%</p>
              <p className="mt-2 text-xs text-muted-foreground">Managed properties have high guest satisfaction.</p>
              <p className="mt-3 flex items-center gap-1 text-xs font-medium text-emerald-600">
                <TrendingUp className="h-3.5 w-3.5" /> +5% from last month
              </p>
            </Card>

            {/* Tall image card spanning 2 rows */}
            <Card className="relative col-start-3 row-span-2 row-start-1 overflow-hidden rounded-2xl border-0 shadow-card">
              <img src={provenBedroom} alt="Proven Performance" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="relative flex h-full min-h-[280px] flex-col justify-end p-6 text-primary-foreground">
                <h3 className="font-display text-lg font-bold">Proven Performance</h3>
                <p className="mt-1.5 text-xs opacity-90">
                  Our managed properties consistently outperform market averages — delivering higher occupancy and stronger returns.
                </p>
                <Button className="mt-3 w-fit rounded-full bg-primary-foreground/15 px-4 text-xs text-primary-foreground backdrop-blur hover:bg-primary-foreground/25">
                  View Performance
                </Button>
              </div>
            </Card>

            {/* Row 2: 150+ Properties spans 2 columns */}
            <Card className="col-span-2 rounded-2xl border-0 bg-card p-5 shadow-card">
              <p className="text-xs text-muted-foreground">Premium holiday homes managed across key destinations</p>
              <div className="mt-1 flex items-center justify-between gap-3">
                <div>
                  <p className="font-display text-xl font-bold text-foreground">150+ Properties</p>
                  <p className="mt-2 text-xs font-medium text-emerald-600">+20 new this quarter</p>
                </div>
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-card bg-cover bg-center" style={{ backgroundImage: `url(${bedroomMirror})` }} />
                  <div className="h-8 w-8 rounded-full border-2 border-card bg-cover bg-center" style={{ backgroundImage: `url(${bedroomTop})` }} />
                  <div className="h-8 w-8 rounded-full border-2 border-card bg-cover bg-center" style={{ backgroundImage: `url(${provenBedroom})` }} />
                  <span className="flex h-8 items-center rounded-full bg-accent px-2 text-[10px] font-bold text-accent-foreground">+120</span>
                </div>
              </div>
            </Card>
          </div>

          {/* MOBILE: horizontal scroll stats */}
          <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:hidden">
            <Card className="min-w-[70%] snap-start rounded-2xl border-0 bg-card p-4 shadow-card">
              <p className="font-display text-xl font-bold text-foreground">+35%</p>
              <p className="mt-2 text-xs text-muted-foreground">Consistent increase in rental income</p>
              <p className="mt-2 flex items-center gap-1 text-xs font-medium text-emerald-600">
                <TrendingUp className="h-3 w-3" /> +12% from last year
              </p>
            </Card>
            <Card className="min-w-[70%] snap-start rounded-2xl border-0 bg-card p-4 shadow-card">
              <p className="font-display text-xl font-bold text-foreground">92%</p>
              <p className="mt-2 text-xs text-muted-foreground">Optimized guest satisfaction</p>
              <p className="mt-2 flex items-center gap-1 text-xs font-medium text-emerald-600">
                <TrendingUp className="h-3 w-3" /> +5% from last month
              </p>
            </Card>
          </div>

          <Card className="relative mt-4 overflow-hidden rounded-2xl border-0 shadow-card md:hidden">
            <img src={provenBedroom} alt="Proven Performance" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="relative flex h-full min-h-[220px] flex-col justify-end p-5 text-primary-foreground">
              <h3 className="font-display text-base font-bold">Proven Performance</h3>
              <p className="mt-1 text-xs opacity-90">Our properties outperform averages — higher occupancy and returns.</p>
              <Button className="mt-3 w-fit rounded-full bg-primary-foreground/15 px-4 text-xs text-primary-foreground backdrop-blur hover:bg-primary-foreground/25">
                View Performance
              </Button>
            </div>
          </Card>

          {/* Bottom 4 feature cards desktop */}
          <div className="mt-5 hidden grid-cols-4 gap-5 md:grid">
            {[
              { icon: iconRocket, title: "Earn Without the Effort", desc: "We handle pricing, guest communication, and occupancy for steady income." },
              { icon: iconBuilding, title: "Nothing Is Too Small Or Big", desc: "We manage cleaning, maintenance, key handovers, and license renewals for you." },
              { icon: iconMonitor, title: "Total Visibility. No Surprises.", desc: "Track earnings, occupancy, reviews, and maintenance logs in real time on your dashboard." },
              { icon: iconBulb, title: "Elevate What You Have", desc: "Worried about your property's performance? We will enhance it for better returns." },
            ].map((f) => (
              <Card key={f.title} className="rounded-2xl border-0 bg-card p-5 shadow-card">
                <img src={f.icon} alt="" loading="lazy" className="h-9 w-9" />
                <h3 className="mt-4 font-display text-sm font-bold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>

          {/* Mobile horizontal scroll feature cards */}
          <div className="mt-5 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:hidden">
            {[
              { icon: iconRocket, title: "Earn Without the Effort", desc: "Pricing, guest comms, occupancy strategy, all handled. Consistent passive income, year-round." },
              { icon: iconBuilding, title: "Full-Service Management", desc: "From listings to maintenance, we manage everything hands-off." },
            ].map((f) => (
              <Card key={f.title} className="min-w-[70%] snap-start rounded-2xl border-0 bg-card p-4 shadow-card">
                <img src={f.icon} alt="" loading="lazy" className="h-8 w-8" />
                <h3 className="mt-3 font-display text-sm font-bold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR PREDICTABLE RETURNS */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            <span className="sm:hidden">Real Numbers. Real Returns.</span>
            <span className="hidden sm:inline">Built for Predictable Returns</span>
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base">
            <span className="sm:hidden">Consistent income and long-term growth, not unpredictable spikes.</span>
            <span className="hidden sm:inline">
              We structure and manage short-term rental investments designed to deliver consistent income and long-term growth.
            </span>
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:items-stretch">
            <Card className="overflow-hidden rounded-2xl border-0 shadow-card">
              <img
                src={calcBedroom}
                alt="Furnished bedroom"
                loading="lazy"
                className="h-full max-h-[640px] w-full object-cover"
              />
            </Card>

            <Card className="rounded-2xl border-0 bg-card p-6 shadow-card">
              <h3 className="font-display text-lg font-bold text-foreground">
                <span className="sm:hidden">Returns Calculator</span>
                <span className="hidden sm:inline">Estimate Your Property Income in Seconds</span>
              </h3>

              <div className="mt-5 space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-foreground">Select Region</Label>
                  <Select>
                    <SelectTrigger className="h-11 rounded-lg border-input bg-background text-sm text-muted-foreground">
                      <SelectValue placeholder="e.g. Karachi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="karachi">Karachi</SelectItem>
                      <SelectItem value="lahore">Lahore</SelectItem>
                      <SelectItem value="islamabad">Islamabad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-foreground">Property Type</Label>
                  <RadioGroup defaultValue="flat" className="flex flex-wrap gap-2">
                    {["Flat", "Portion", "House"].map((t) => (
                      <label key={t} className="flex h-10 cursor-pointer items-center gap-2 rounded-full border border-input bg-background px-4 text-xs font-medium text-foreground">
                        <RadioGroupItem value={t.toLowerCase()} className="h-4 w-4" />
                        {t}
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-foreground">Property Size</Label>
                  <RadioGroup defaultValue="2bhk" className="flex flex-wrap gap-2">
                    {["1BHK", "2BHK", "3BHK", "Penthouse"].map((t) => (
                      <label key={t} className="flex h-10 cursor-pointer items-center gap-2 rounded-full border border-input bg-background px-4 text-xs font-medium text-foreground">
                        <RadioGroupItem value={t.toLowerCase()} className="h-4 w-4" />
                        {t}
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-foreground">Furnishing Level</Label>
                  <Select>
                    <SelectTrigger className="h-11 rounded-lg border-input bg-background text-sm text-muted-foreground">
                      <SelectValue placeholder="e.g. Fully Furnished" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unfurnished">Unfurnished</SelectItem>
                      <SelectItem value="semi">Semi-Furnished</SelectItem>
                      <SelectItem value="full">Fully Furnished</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-foreground">Expected Occupancy Level</Label>
                  <Slider defaultValue={[60]} max={100} step={1} className="py-2" />
                </div>

                <div className="flex justify-end">
                  <Button className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90">
                    Calculate
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl bg-muted p-3">
                    <img src={iconMoney} alt="" loading="lazy" className="h-7 w-7" />
                    <p className="mt-2 text-[10px] text-muted-foreground">Est. Monthly Income Range</p>
                    <p className="mt-0.5 text-sm font-bold text-foreground">$4,500 — $6,200</p>
                  </div>
                  <div className="rounded-xl bg-muted p-3">
                    <img src={iconChart} alt="" loading="lazy" className="h-7 w-7" />
                    <p className="mt-2 text-[10px] text-muted-foreground">Est. Annual Yield</p>
                    <p className="mt-0.5 text-sm font-bold text-foreground">8.5% — 11.2%</p>
                  </div>
                </div>

                <p className="pt-1 text-center text-[11px] text-muted-foreground">
                  This estimate is indicative. Actual returns vary by market conditions, quality, seasonality, &amp; demand.
                </p>
              </div>
            </Card>
          </div>

          <p className="mt-6 text-center text-sm italic text-muted-foreground">
            Not sure where to start? <a href="#" className="font-semibold not-italic text-primary underline">Talk to an Advisor</a>
          </p>
        </div>
      </section>

      {/* LUXURY MANAGED — Property cards */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl text-center sm:text-left">
                <span className="sm:hidden">Luxury Managed. Consistently Performing.</span>
                <span className="hidden sm:inline">Luxury Managed. Consistently Performing.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base text-center sm:text-left">
                <span className="sm:hidden">Every property curated for premium guest experience and strong returns.</span>
                <span className="hidden sm:inline">
                  Every property in our portfolio is curated for premium guest experience and strong investor returns. Browse our managed homes and see what's possible.
                </span>
              </p>
            </div>
            {/* Mobile-only filter chips */}
            <div className="flex justify-center gap-2 md:hidden">
              <button className="flex items-center gap-1 rounded-full bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-card">
                Buy <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <button className="flex items-center gap-1 rounded-full bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-card">
                Filters <SlidersHorizontal className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Mobile-only search bar */}
          <div className="mt-4 md:hidden">
            <p className="text-sm font-semibold text-foreground">Search</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex h-10 flex-1 items-center gap-2 rounded-full bg-card px-4 shadow-card">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="Search keywords..."
                  className="h-full w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <Button className="h-10 rounded-full bg-primary px-5 text-xs text-primary-foreground hover:bg-primary/90">Show</Button>
            </div>
          </div>

          {/* DESKTOP: 3-up grid */}
          <div className="mt-8 hidden grid-cols-3 gap-5 md:grid">
            {[
              { img: property1, title: "3BHK Luxury Skyline Apartment", price: "$25/Night", loc: "Karachi - Sindh", size: "150 m2", beds: "3 beds", baths: "1 bath", rating: "4.9/5.0" },
              { img: property2, title: "4BHK Comfort Apartment", price: "$45/Night", loc: "Karachi - Sindh", size: "250 m2", beds: "4 beds", baths: "2 baths", rating: "5.0/5.0" },
              { img: property3, title: "2BHK Executive City Apartment", price: "$50/Night", loc: "Karachi - Sindh", size: "80 m2", beds: "2 beds", baths: "1 bath", rating: "5.0/5.0" },
            ].map((p) => (
              <Card key={p.title} className="overflow-hidden rounded-2xl border-0 bg-card shadow-card">
                <div className="relative">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={640} className="h-44 w-full object-cover" />
                  <button aria-label="Save" className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-card/90 text-muted-foreground shadow-card backdrop-blur">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-sm font-bold text-foreground">{p.title}</h3>
                    <span className="shrink-0 text-sm font-bold text-primary">{p.price}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{p.loc}</p>
                  <div className="my-3 h-px bg-border" />
                  <div className="grid grid-cols-4 gap-2 text-center text-[11px] text-muted-foreground">
                    <div className="flex flex-col items-center gap-1"><Ruler className="h-3.5 w-3.5" /> {p.size}</div>
                    <div className="flex flex-col items-center gap-1"><Bed className="h-3.5 w-3.5" /> {p.beds}</div>
                    <div className="flex flex-col items-center gap-1"><Bath className="h-3.5 w-3.5" /> {p.baths}</div>
                    <div className="flex flex-col items-center gap-1"><Star className="h-3.5 w-3.5" /> {p.rating}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* MOBILE: horizontal scroll */}
          <div className="mt-5 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:hidden">
            {[
              { img: property1, title: "Bali Wellness Sanctuary", price: "$250/Night", loc: "Bali - Ubud - Indonesia", size: "150 m2", beds: "3 beds", baths: "1 bath", rating: "4.9/5.0" },
              { img: property2, title: "Sandstone Retreat", price: "$180/Night", loc: "Cycladic - Greece", size: "120 m2", beds: "3 beds", baths: "2 baths", rating: "4.8/5.0" },
            ].map((p) => (
              <Card key={p.title} className="min-w-[80%] snap-start overflow-hidden rounded-2xl border-0 bg-card shadow-card">
                <div className="relative">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={640} className="h-48 w-full object-cover" />
                  <button aria-label="Save" className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-card/90 text-muted-foreground shadow-card backdrop-blur">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-sm font-bold text-foreground">{p.title}</h3>
                    <span className="shrink-0 text-sm font-bold text-primary">{p.price}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{p.loc}</p>
                  <div className="my-3 h-px bg-border" />
                  <div className="grid grid-cols-4 gap-2 text-center text-[11px] text-muted-foreground">
                    <div className="flex flex-col items-center gap-1"><Ruler className="h-3.5 w-3.5" /> {p.size}</div>
                    <div className="flex flex-col items-center gap-1"><Bed className="h-3.5 w-3.5" /> {p.beds}</div>
                    <div className="flex flex-col items-center gap-1"><Bath className="h-3.5 w-3.5" /> {p.baths}</div>
                    <div className="flex flex-col items-center gap-1"><Star className="h-3.5 w-3.5" /> {p.rating}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* THREE SIMPLE STEPS */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl text-center sm:text-left">
            <span className="sm:hidden">3 Steps to Hands-Free Income</span>
            <span className="hidden sm:inline">Three Simple Steps to Hands-Free Property Income</span>
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base text-center sm:text-left">
            <span className="sm:hidden">Simple. Transparent. Stress-free.</span>
            <span className="hidden sm:inline">
              From your first inquiry to ongoing monthly earnings — we make the entire process straightforward, transparent, and stress-free.
            </span>
          </p>

          {/* MOBILE: image first, then steps */}
          <div className="mt-6 md:hidden">
            <img src={stepsKitchen} alt="Managed kitchen" loading="lazy" className="h-56 w-full rounded-2xl object-cover" />
            <h3 className="mt-6 font-display text-base font-bold text-foreground">Get Started with AvaronBnB</h3>
            <ul className="mt-4 space-y-3">
              {["Book a Free Consultation", "We Handle Everything", "Sit Back and Earn", "Ready to Get Started?"].map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-foreground">{s}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-6 h-12 w-full rounded-full bg-primary text-sm text-primary-foreground hover:bg-primary/90">
              Start With a Free Consultation
            </Button>
          </div>

          {/* DESKTOP */}
          <div className="mt-10 hidden grid-cols-2 gap-10 md:grid md:items-center">
            <div>
              <h3 className="font-display text-base font-bold text-foreground">Get Started with AvaronBnB</h3>
              <ul className="mt-6 space-y-5">
                {["Book Your Free Consultation", "We Set Everything Up, For You", "Sit Back and Earn", "Ready to Get Started?"].map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-foreground">{s}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 h-12 w-full rounded-full bg-primary text-sm text-primary-foreground hover:bg-primary/90 sm:max-w-md">
                Start With a Free Consultation
              </Button>
            </div>
            <div className="relative">
              <img src={stepsKitchen} alt="Fully managed kitchen" loading="lazy" className="h-[420px] w-full rounded-2xl object-cover" />
              <div className="absolute left-4 top-1/2 w-64 -translate-y-1/2 rounded-2xl bg-card p-4 shadow-soft">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <p className="font-display text-sm font-bold text-foreground">Fully Managed. Completely Yours.</p>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  You retain ownership and visibility. We manage it, ensuring peak performance daily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

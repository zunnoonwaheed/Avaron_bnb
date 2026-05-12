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
import { TrendingUp, ChevronDown, Heart, Bath, Bed, Star, Ruler, Check, Search, SlidersHorizontal, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import heroDesktop from "@/assets/hero-desktop.png";
import heroMobile from "@/assets/hero-mobile.jpg";
import bedroomTop from "@/assets/bedroom-top.jpg";
import bedroomMirror from "@/assets/bedroom-mirror.jpg";
import provenBedroom from "@/assets/proven-bedroom.jpg";
import calcBedroom from "@/assets/calc-bedroom.jpg";
import returnsBedroom from "@/assets/returns/returns-bedroom.png";
import returnsKitchen from "@/assets/returns/returns-kitchen.png";
import returnsIconMoney from "@/assets/returns/icon-money.png";
import returnsIconYield from "@/assets/returns/icon-yield.png";
import iconMagnify from "@/assets/icon-magnify.png";
import iconChart from "@/assets/icon-chart.png";
import iconPerson from "@/assets/icon-person.png";
import iconHouse from "@/assets/icon-house.svg";
import stepsFloatingBadge from "@/assets/steps/floating-badge.png";
import wmIconBarChart from "@/assets/we-manage/bar-chart.svg";
import wmIconNeoclassical from "@/assets/we-manage/neoclassical-building.svg";
import wmIconDesktop from "@/assets/we-manage/desktop.svg";
import wmIconLightBulb from "@/assets/we-manage/light-bulb.svg";
import iconMoney from "@/assets/icon-moneybag.png";
import property1 from "@/assets/listings/listing-1.png";
import property2 from "@/assets/listings/listing-2.png";
import property3 from "@/assets/listings/listing-3.png";
import listingIconBed from "@/assets/listings/png/bed.png";
import listingIconBath from "@/assets/listings/png/bath.png";
import listingIconStar from "@/assets/listings/png/star.png";
import listingOverlayBlur from "@/assets/listings/png/overlay.png";
import listingIconSize from "@/assets/listings/png/size.png";
import listingHeartOverlay from "@/assets/listings/png/overlay-heart.png";
import stepsKitchen from "@/assets/steps/steps-kitchen.png";
import reviewRoom1 from "@/assets/testimonials/review-room-1.png";
import reviewLounge from "@/assets/testimonials/review-lounge.png";
import reviewRoom2 from "@/assets/testimonials/review-room-2.png";
import ctaBedroom from "@/assets/cta/cta-bedroom-new.png";
import ctaBedroomFramed from "@/assets/cta/background-border.png";
import ctaPremiumBadge from "@/assets/cta/premium-badge.png";
import logo from "@/assets/logo.svg";
import footerNMark from "@/assets/footer-n-mark.png";
import figmaNeoclassicalBuilding from "@/assets/figma/neoclassical-beige-building.png";
import figmaCharmingHouse from "@/assets/figma/charming-little-house.png";
import { Fragment, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/** Dark interiors for slides 2–3 (slide 1 stays shipped hero art). Slide-2 URL verified 200; slide 3 is bundled so it never 404s. */
const HERO_DARK_INTERIOR_2 =
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=3200&q=90";

const HERO_SLIDES: Array<{ mobile: string; desktop: string }> = [
  { mobile: heroMobile, desktop: heroDesktop },
  { mobile: HERO_DARK_INTERIOR_2, desktop: HERO_DARK_INTERIOR_2 },
  { mobile: calcBedroom, desktop: calcBedroom },
];

const REGION_RATE: Record<string, number> = { karachi: 1200, lahore: 1100, islamabad: 1400 };
const TYPE_MULT: Record<string, number> = { flat: 1, portion: 0.85, house: 1.4 };
const SIZE_MULT: Record<string, number> = { "1bhk": 0.8, "2bhk": 1, "3bhk": 1.35, penthouse: 1.9 };
const FURNISH_MULT: Record<string, number> = { unfurnished: 0.7, semi: 0.9, full: 1.15 };

/** Public line — WhatsApp chat and voice calls use the same number. */
const WHATSAPP_E164 = "923107372777";
const WHATSAPP_CHAT_URL = `https://wa.me/${WHATSAPP_E164}`;
const PHONE_TEL_HREF = "tel:+923107372777";
const PHONE_DISPLAY = "+92 310 7372777";

const FOOTER_EXPLORE_LINKS: Array<{ label: string; id: string }> = [
  { label: "Home", id: "home" },
  { label: "Management", id: "management" },
  { label: "Properties", id: "stays" },
  { label: "Testimonials", id: "testimonials" },
];

const FOOTER_NAVIGATE_LINKS: Array<{ label: string; id?: string; externalHref?: string }> = [
  { label: "About Us", id: "about" },
  { label: "Calculate ROI", id: "roi" },
  { label: "How It Works", id: "how" },
  { label: "Contact Us", externalHref: WHATSAPP_CHAT_URL },
];

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.295-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const Index = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 16;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const navItems: Array<{ label: string; id: string }> = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Calculate ROI", id: "roi" },
    { label: "How Does It Work?", id: "how" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("section, footer")).filter(
        (el) => !el.hasAttribute("data-gsap-skip"),
      );

      sections.forEach((section) => {
        const targets = section.querySelectorAll<HTMLElement>(
          "h1,h2,h3,p,li,button,a,img,svg,.shadow-card,.shadow-soft,[class*='rounded-2xl']",
        );
        if (!targets.length) return;

        gsap.set(targets, { willChange: "transform,opacity" });

        gsap.fromTo(
          targets,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            stagger: { each: 0.035, from: "start" },
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
            clearProps: "willChange",
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const [region, setRegion] = useState<string>("karachi");
  const [propType, setPropType] = useState<string>("flat");
  const [propSize, setPropSize] = useState<string>("2bhk");
  const [furnish, setFurnish] = useState<string>("full");
  const [occupancy, setOccupancy] = useState<number>(60);
  const [calc, setCalc] = useState<{ low: number; high: number; yLow: number; yHigh: number }>({
    low: 4500, high: 6200, yLow: 8.5, yHigh: 11.2,
  });

  const handleCalculate = () => {
    const base = (REGION_RATE[region] ?? 1000) * (TYPE_MULT[propType] ?? 1) * (SIZE_MULT[propSize] ?? 1) * (FURNISH_MULT[furnish] ?? 1);
    const monthly = base * (occupancy / 60);
    const low = Math.round((monthly * 0.85) / 50) * 50;
    const high = Math.round((monthly * 1.15) / 50) * 50;
    const yLow = Math.max(4, Math.round(((monthly * 12) / 600000) * 8 * 10) / 10);
    const yHigh = Math.round((yLow + 2.7) * 10) / 10;
    setCalc({ low, high, yLow, yHigh });
  };

  const [buyFilters, setBuyFilters] = useState<Record<string, boolean>>({ buy: true, rent: false, lease: false });
  const [bedFilters, setBedFilters] = useState<Record<string, boolean>>({ "1bed": false, "2bed": true, "3bed": true, "4bed": false });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = window.setInterval(() => {
      setHeroSlideIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const allProperties = useMemo(() => [
    { img: property1, title: "3BHK Luxury Skyline Apartment", price: "$25/Night", loc: "Karachi - Sindh", size: "150 m2", beds: "3 beds", bedKey: "3bed", baths: "1 bath", rating: "4.9/5.0" },
    { img: property2, title: "4BHK Comfort Apartment", price: "$45/Night", loc: "Karachi - Sindh", size: "250 m2", beds: "4 beds", bedKey: "4bed", baths: "2 baths", rating: "5.0/5.0" },
    { img: property3, title: "2BHK Executive City Apartment", price: "$50/Night", loc: "Karachi - Sindh", size: "80 m2", beds: "2 beds", bedKey: "2bed", baths: "1 bath", rating: "5.0/5.0" },
  ], []);

  const filteredMobileProps = useMemo(() => {
    const anyBed = Object.values(bedFilters).some(Boolean);
    return allProperties.filter((p) => {
      const q = searchQuery.trim().toLowerCase();
      const matchQ = !q || p.title.toLowerCase().includes(q) || p.loc.toLowerCase().includes(q);
      const matchBed = !anyBed || bedFilters[p.bedKey];
      return matchQ && matchBed;
    });
  }, [allProperties, searchQuery, bedFilters]);

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section id="home" className="relative" data-gsap-skip>
        <div className="relative overflow-hidden md:h-[750px]">
          <div className="absolute inset-0" aria-hidden="true">
            {HERO_SLIDES.map((slide, i) => (
              <Fragment key={i}>
                <img
                  src={slide.mobile}
                  alt=""
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className={cn(
                    "absolute inset-0 h-full min-h-full w-full object-cover transition-opacity duration-1000 ease-out sm:hidden",
                    i === heroSlideIndex ? "z-[1] opacity-100" : "z-0 opacity-0",
                  )}
                />
                <img
                  src={slide.desktop}
                  alt=""
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className={cn(
                    "absolute inset-0 hidden h-full w-full object-cover transition-opacity duration-1000 ease-out sm:block",
                    i === heroSlideIndex ? "z-[1] opacity-100" : "z-0 opacity-0",
                  )}
                />
              </Fragment>
            ))}
          </div>
          <div className="absolute inset-0 z-[2] bg-black/20" aria-hidden="true" />
          <div className="absolute inset-0 bg-hero-overlay z-[2]" aria-hidden="true" />
          {/* Decorative hero icons (desktop only) */}
          <img
            src={figmaNeoclassicalBuilding}
            alt=""
            className="pointer-events-none absolute left-0 top-0 z-[3] hidden h-[420px] w-auto opacity-[0.08] md:block"
            aria-hidden="true"
          />
          <img
            src={figmaCharmingHouse}
            alt=""
            className="pointer-events-none absolute bottom-0 right-0 z-[3] hidden h-[360px] w-auto opacity-[0.08] md:block"
            aria-hidden="true"
          />

          {/* NAV */}
          <nav className="relative z-10 flex flex-col gap-3 px-5 py-5 sm:px-10 md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="flex w-full items-center justify-between gap-4 md:contents">
              <a
                href="#home"
                className="flex shrink-0 items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                <img
                  src={logo}
                  alt="AvaronBnB"
                  className="h-8 w-auto drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] md:h-9"
                />
              </a>
              <ul className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-primary-foreground md:flex">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="opacity-90 transition hover:opacity-100"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button asChild className="shrink-0 rounded-full bg-primary px-5 text-xs text-primary-foreground hover:bg-primary/90 sm:px-6 sm:text-sm">
                <a href={WHATSAPP_CHAT_URL} target="_blank" rel="noopener noreferrer">
                  <span className="md:hidden">Book Consultation</span>
                  <span className="hidden md:inline">Contact Us</span>
                </a>
              </Button>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1 border-t border-primary-foreground/15 pt-3 text-[11px] font-semibold tracking-wide text-primary-foreground/95 md:hidden">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="opacity-95 transition-opacity hover:opacity-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* HERO CONTENT */}
          <div className="relative z-10 flex flex-col items-center px-5 pb-12 pt-8 text-center text-primary-foreground sm:pb-24 sm:pt-24">
            <h1 className="max-w-[360px] sm:max-w-[1040px] font-display font-bold leading-[1.12] tracking-[-0.02em] text-[28px] sm:text-[44px] animate-fade-in">
              <span className="sm:hidden">
                Earn More From Your <span className="text-gold">Property</span>
              </span>
              <span className="hidden sm:inline">
                <span className="block">Turn Your Property Into a</span>
                <span className="block whitespace-nowrap">
                  <span className="text-gold">High-Yield Asset</span>
                  <span className="text-primary-foreground">, Without Managing It Yourself</span>
                </span>
              </span>
            </h1>
            <p className="mt-3 max-w-[420px] sm:max-w-[820px] font-medium text-[18px] leading-snug opacity-90 sm:mt-6">
              <span className="sm:hidden">Up to 24% higher returns with full management</span>
              <span className="hidden sm:inline">
                AvaronBnB handles everything, from guest management to property optimization.
                <br className="hidden sm:block" /> So you earn more without lifting a finger.
              </span>
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
              <Button asChild size="lg" className="h-10 rounded-full bg-primary px-5 text-xs text-primary-foreground hover:bg-primary/90 sm:h-11 sm:px-7 sm:text-sm">
                <a href={WHATSAPP_CHAT_URL} target="_blank" rel="noopener noreferrer">
                  <span className="sm:hidden">Book a Free Call</span>
                  <span className="hidden sm:inline">Book a Free Consultation</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-10 rounded-full border-primary-foreground/40 bg-primary-foreground/10 px-5 text-xs text-primary-foreground backdrop-blur hover:bg-primary-foreground/20 hover:text-primary-foreground sm:h-11 sm:px-7 sm:text-sm"
                onClick={() => scrollToSection("how")}
              >
                <span className="sm:hidden">See How It Works</span>
                <span className="hidden sm:inline">Browse Stays</span>
              </Button>
            </div>

            {/* Estimate bar */}
            <div className="relative mt-6 w-full max-w-3xl rounded-full bg-primary-foreground/15 p-1.5 backdrop-blur-md sm:mt-10 sm:p-2">
              <div className="relative flex items-center gap-1 sm:gap-2">
                <div className="flex flex-1 items-center gap-2 px-3 sm:px-4">
                  <img src={figmaCharmingHouse} alt="" className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <Input
                    placeholder="Enter property address for estimate..."
                    className="h-9 border-0 bg-transparent p-0 text-xs text-primary-foreground placeholder:text-primary-foreground/70 focus-visible:ring-0 sm:h-10 sm:text-sm"
                  />
                </div>
                <div className="hidden h-8 w-px bg-primary-foreground/30 sm:block" />
                <Select defaultValue="luxury">
                  <SelectTrigger className="hidden h-10 border-0 bg-transparent text-sm text-primary-foreground focus:ring-0 sm:flex sm:w-48">
                    <div className="flex items-center gap-2">
                      <img src={figmaNeoclassicalBuilding} alt="" className="h-4 w-4" />
                      <SelectValue />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="luxury">Luxury Villa</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                  </SelectContent>
                </Select>
                <Button asChild className="h-9 shrink-0 rounded-full bg-primary px-4 text-xs text-primary-foreground hover:bg-primary/90 sm:h-10 sm:px-6 sm:text-sm">
                  <a href={WHATSAPP_CHAT_URL} target="_blank" rel="noopener noreferrer">
                    <span className="sm:hidden">Estimate</span>
                    <span className="hidden sm:inline">Estimate Earnings</span>
                  </a>
                </Button>
              </div>
            </div>
            <p className="mt-3 text-[11px] text-gold sm:mt-4 sm:text-xs">
              <span className="font-semibold">New:</span>{" "}
              <span className="text-primary-foreground/80">Real-time market data integration for 2024 projections.</span>
            </p>

            {/* Hero slideshow — same copy on every slide; click a dot to jump */}
            <div
              className="mt-6 flex justify-center gap-2 sm:mt-10"
              role="tablist"
              aria-label="Hero background slides"
            >
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === heroSlideIndex}
                  aria-label={`Show slide ${i + 1} of ${HERO_SLIDES.length}`}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                    i === heroSlideIndex ? "bg-primary" : "bg-primary-foreground/40 hover:bg-primary-foreground/55",
                  )}
                  onClick={() => setHeroSlideIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES — “A Smarter Way to Own” (aligns with site max-width 1400px) */}
      <section id="about" className="bg-background px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col border-0 bg-transparent p-0 shadow-none md:min-h-[869px] md:p-0 lg:p-0">
            <header className="shrink-0 text-center md:text-left">
              <h2 className="font-display text-[22px] font-bold leading-[1.2] tracking-tight text-[#0A1128] sm:text-2xl md:text-[28px] lg:text-[30px]">
                A Smarter Way to Own. A Better Way to Earn.
              </h2>
              <p className="mx-auto mt-3 max-w-[520px] text-sm leading-relaxed text-[#6B7280] sm:text-[15px] md:mx-0 md:max-w-none md:w-full md:text-base md:leading-[1.55]">
                <span className="md:hidden">
                  Data-driven management transforms property into high-performing asset.
                </span>
                <span className="hidden md:inline">
                  We combine expert property management with data-driven strategies to transform your property into a
                  consistently high-performing asset. You stay hands-off, we handle the rest.
                </span>
              </p>
            </header>

            <div className="mt-8 flex min-h-0 flex-1 flex-col gap-4 md:mt-10 md:flex-none md:gap-5">
              {/* Desktop: full content width (matches heading + stats); row heights from Figma. Mobile: column; Luxury hidden. */}
              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-[373px_188px] md:gap-x-6 md:gap-y-6">
                <Card className="group relative flex min-h-[320px] min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-card p-0 shadow-none sm:min-h-[340px] md:row-start-1 md:col-start-1 md:h-[373px] md:min-h-[373px] md:w-full">
                  <div className="relative min-h-[320px] flex-1 sm:min-h-[340px] md:absolute md:inset-0 md:min-h-0">
                    <img
                      src={bedroomTop}
                      alt="Premium Property"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
                    <div className="relative flex min-h-[320px] flex-col justify-end p-6 text-primary-foreground sm:min-h-[340px] md:absolute md:inset-0 md:min-h-0 md:p-6">
                      <img src={iconMagnify} alt="" className="mb-2 h-8 w-8 md:mb-2 md:h-9 md:w-9" />
                      <h3 className="font-display text-lg font-bold leading-snug sm:text-xl md:text-[17px] md:leading-snug">
                        Premium Property Positioning
                      </h3>
                      <p className="mt-1.5 max-w-[28rem] text-left text-sm leading-relaxed opacity-95 sm:text-[15px] md:mt-2 md:text-[13px] md:leading-snug">
                        <span className="md:hidden">
                          We showcase your home with photography, smart pricing, and premium presentation.
                        </span>
                        <span className="hidden md:inline">
                          We position your property with professional photography and pricing strategies to ensure it
                          stands out and commands premium rates.
                        </span>
                      </p>
                      <Button asChild className="mt-3 h-9 w-fit rounded-full border border-primary-foreground/25 bg-primary-foreground/15 px-4 text-xs text-primary-foreground backdrop-blur hover:bg-primary-foreground/25 md:mt-3">
                        <a href={WHATSAPP_CHAT_URL} target="_blank" rel="noopener noreferrer">
                          Talk to an Expert
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="hidden min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-card p-0 shadow-none md:row-start-1 md:col-start-2 md:flex md:h-[373px] md:min-h-[373px] md:w-full md:p-5">
                  <img src={figmaCharmingHouse} alt="" className="h-8 w-8 shrink-0 object-contain md:h-9 md:w-9" />
                  <h3 className="mt-2 font-display text-base font-bold leading-snug text-[#0A1128] md:mt-2 md:text-[17px]">
                    Luxury Guest Experience
                  </h3>
                  <p className="mt-1.5 text-xs leading-snug text-[#6B7280] md:mt-1.5 md:text-[13px] md:leading-snug">
                    We manage guest interactions, check-ins, concierge services, and issue resolution for exceptional
                    reviews.
                  </p>
                  <div className="mt-3 min-h-0 flex-1 overflow-hidden rounded-lg md:mt-3">
                    <img src={bedroomMirror} alt="" className="h-full w-full object-cover md:min-h-0" />
                  </div>
                </Card>

                <Card className="min-w-0 rounded-2xl border border-[#E5E7EB] bg-card p-6 shadow-none md:row-start-2 md:col-start-1 md:flex md:h-[188px] md:min-h-[188px] md:max-h-[188px] md:w-full md:flex-col md:overflow-hidden md:p-5">
                  <img src={iconChart} alt="" className="h-8 w-8 shrink-0 sm:h-9 sm:w-9 md:h-8 md:w-8" />
                  <h3 className="mt-2 font-display text-base font-bold leading-tight text-[#0A1128] md:mt-2 md:text-[15px]">
                    Revenue Optimization
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-[#6B7280] md:mt-1 md:text-[12px] md:leading-snug">
                    <span className="md:hidden">
                      Dynamic pricing adjusts in real time based on demand, season, and trends.
                    </span>
                    <span className="hidden md:inline">
                      Smart pricing strategies that adapt in real-time to maximize occupancy and nightly rates.
                    </span>
                  </p>
                </Card>

                <Card className="min-w-0 rounded-2xl border border-[#E5E7EB] bg-card p-6 shadow-none md:row-start-2 md:col-start-2 md:flex md:h-[188px] md:min-h-[188px] md:max-h-[188px] md:w-full md:flex-col md:overflow-hidden md:p-5">
                  <img src={iconPerson} alt="" className="h-8 w-8 shrink-0 sm:h-9 sm:w-9 md:h-8 md:w-8" />
                  <h3 className="mt-2 font-display text-base font-bold leading-tight text-[#0A1128] md:mt-2 md:text-[15px]">
                    End-to-End Property Management
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-[#6B7280] md:mt-1 md:text-[12px] md:leading-snug">
                    <span className="md:hidden">
                      Maintenance, compliance &amp; turnovers handled. Your property is ready and legally sound.
                    </span>
                    <span className="hidden md:inline">
                      We handle all aspects of your property to keep it guest-ready, compliant, and performing well.
                    </span>
                  </p>
                </Card>
              </div>

              {/* Stats + CTA */}
              <Card className="w-full shrink-0 rounded-2xl border border-[#E5E7EB] bg-card p-6 shadow-none sm:p-7 md:px-8 md:py-7">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-6 lg:gap-8">
                  <div className="flex w-full flex-col items-center gap-y-[48px] sm:flex-row sm:justify-center sm:gap-x-[48px] sm:gap-y-0 md:w-auto md:flex-none md:items-start md:justify-start md:gap-x-[80px] lg:gap-x-[96px]">
                    <div className="text-center md:text-left">
                      <p className="font-sans text-2xl font-semibold leading-none tracking-tight text-[#2A79E6]">24%</p>
                      <p className="mt-1.5 text-xs font-medium leading-snug text-[#6B7280] sm:text-sm">Avg. Annual Yield</p>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="font-sans text-2xl font-semibold leading-none tracking-tight text-[#2A79E6]">$42M</p>
                      <p className="mt-1.5 text-xs font-medium leading-snug text-[#6B7280] sm:text-sm">Assets Managed</p>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="font-sans text-2xl font-semibold leading-none tracking-tight text-[#2A79E6]">4.9/5</p>
                      <p className="mt-1.5 text-xs font-medium leading-snug text-[#6B7280] sm:text-sm">Guest Satisfaction</p>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center gap-3 border-t border-[#E5E7EB] pt-6 md:w-auto md:max-w-[420px] md:shrink-0 md:items-start md:border-t-0 md:pt-0">
                    <p className="max-w-[20rem] w-full text-center text-sm leading-snug text-[#6B7280] md:max-w-none md:w-auto md:text-left">
                      Ready to see what your property is truly worth?
                    </p>
                    <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center sm:gap-3 md:w-auto md:justify-start">
                      <Button asChild className="h-10 w-full rounded-full bg-[#0A1128] px-5 text-sm font-semibold text-white hover:bg-[#0A1128]/90 sm:w-auto md:h-11 md:px-6">
                        <a href={WHATSAPP_CHAT_URL} target="_blank" rel="noopener noreferrer">
                          Book a Consultation
                        </a>
                      </Button>
                      <Button
                        className="h-10 w-full rounded-full bg-[#D99E6A] px-5 text-sm font-semibold text-white hover:bg-[#D99E6A]/90 sm:w-auto md:h-11 md:px-6"
                        onClick={() => scrollToSection("testimonials")}
                      >
                        See Our Results
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WE MANAGE EVERYTHING */}
      <section id="management" className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-center font-display text-2xl font-bold text-foreground sm:text-3xl md:text-left">
            <span className="sm:hidden">We Manage &amp; You Keep the Returns.</span>
            <span className="hidden sm:inline">We Manage Everything. You Keep the Returns.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-muted-foreground sm:text-base md:mx-0 md:max-w-none md:text-left">
            <span className="sm:hidden">Transparent profit-sharing model. Our success depends on yours.</span>
            <span className="hidden sm:inline">
              AvaronBnB operates on a transparent profit-sharing model, the more your property earns, the better it is
              for both of us. Our incentives are perfectly aligned with yours.
            </span>
          </p>

          {/* DESKTOP grid — full width of heading column; ratio ~291:291:592; image row-span matches stacked left column height */}
          <div className="mt-8 hidden min-w-0 w-full md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2.034fr)] md:grid-rows-[179px_155px] md:gap-x-1.5 md:gap-y-4">
            {/* Row 1, Col 1 — min height 179 */}
            <Card className="flex h-full min-h-[179px] w-full min-w-0 flex-col overflow-hidden rounded-2xl border-0 bg-card p-4 shadow-card md:row-start-1 md:col-start-1">
              <p className="font-display text-xl font-bold leading-none text-foreground">+35%</p>
              <p className="mt-1.5 line-clamp-3 text-[11px] leading-snug text-muted-foreground">
                Consistent Increase In Rental Occupancy Within The First 90 Days
              </p>
              <p className="mt-auto flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                <TrendingUp className="h-3 w-3 shrink-0" /> +12% from last year
              </p>
            </Card>

            {/* Row 1, Col 2 */}
            <Card className="flex h-full min-h-[179px] w-full min-w-0 flex-col overflow-hidden rounded-2xl border-0 bg-card p-4 shadow-card md:row-start-1 md:col-start-2">
              <p className="font-display text-xl font-bold leading-none text-foreground">92%</p>
              <p className="mt-1.5 line-clamp-3 text-[11px] leading-snug text-muted-foreground">Managed properties have high guest satisfaction.</p>
              <p className="mt-auto flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                <TrendingUp className="h-3 w-3 shrink-0" /> +5% from last month
              </p>
            </Card>

            {/* Proven Performance — spans rows 1–2; height matches left column (179 + gap + 155) */}
            <Card className="relative col-start-3 row-span-2 row-start-1 flex min-h-0 h-full min-w-0 w-full overflow-hidden rounded-2xl border-0 shadow-card">
              <img src={provenBedroom} alt="Proven Performance" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="relative flex h-full min-h-0 flex-col justify-end p-5 text-primary-foreground">
                <h3 className="font-display text-base font-bold leading-tight">Proven Performance</h3>
                <p className="mt-1 line-clamp-2 text-[11px] leading-snug opacity-90">
                  Our managed properties consistently outperform market averages — delivering higher occupancy and stronger returns.
                </p>
                <Button
                  type="button"
                  className="mt-2 h-8 w-fit rounded-full bg-primary-foreground/15 px-3 text-[11px] text-primary-foreground backdrop-blur hover:bg-primary-foreground/25"
                  onClick={() => scrollToSection("roi")}
                >
                  View Performance
                </Button>
              </div>
            </Card>

            {/* 150+ Properties — spans cols 1–2, fixed row height 155 */}
            <Card className="flex h-full min-h-[155px] w-full min-w-0 flex-col justify-center overflow-hidden rounded-2xl border-0 bg-card p-4 shadow-card md:col-span-2 md:row-start-2 md:col-start-1">
              <p className="text-[11px] leading-snug text-muted-foreground">Premium holiday homes managed across key destinations</p>
              <div className="mt-1 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-display text-lg font-bold leading-tight text-foreground">150+ Properties</p>
                  <p className="mt-0.5 text-[11px] font-medium text-emerald-600">+20 new this quarter</p>
                </div>
                <div className="flex shrink-0 -space-x-2">
                  <div className="h-7 w-7 rounded-full border-2 border-card bg-cover bg-center" style={{ backgroundImage: `url(${bedroomMirror})` }} />
                  <div className="h-7 w-7 rounded-full border-2 border-card bg-cover bg-center" style={{ backgroundImage: `url(${bedroomTop})` }} />
                  <div className="h-7 w-7 rounded-full border-2 border-card bg-cover bg-center" style={{ backgroundImage: `url(${provenBedroom})` }} />
                  <span className="flex h-7 items-center rounded-full bg-accent px-1.5 text-[9px] font-bold text-accent-foreground">+120</span>
                </div>
              </div>
            </Card>
          </div>

          {/* MOBILE: stats — one card in view, rest scroll (snap) */}
          <div className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pr-4 [scrollbar-width:none] [-ms-overflow-style:none] md:hidden [&::-webkit-scrollbar]:hidden">
            <Card className="flex h-auto min-h-[150px] w-[85vw] max-w-[21rem] shrink-0 snap-start flex-col rounded-2xl border-0 bg-card p-4 shadow-card">
              <p className="font-display text-xl font-bold leading-none text-foreground">+35%</p>
              <p className="mt-2 text-left text-[13px] leading-snug text-muted-foreground">Consistent increase in rental income</p>
              <p className="mt-auto flex items-center gap-1 pt-2 text-xs font-medium text-emerald-600">
                <TrendingUp className="h-3.5 w-3.5 shrink-0" /> +12% from last year
              </p>
            </Card>
            <Card className="flex h-auto min-h-[150px] w-[85vw] max-w-[21rem] shrink-0 snap-start flex-col rounded-2xl border-0 bg-card p-4 shadow-card">
              <p className="font-display text-xl font-bold leading-none text-foreground">92%</p>
              <p className="mt-2 text-left text-[13px] leading-snug text-muted-foreground">Optimized guest satisfaction</p>
              <p className="mt-auto flex items-center gap-1 pt-2 text-xs font-medium text-emerald-600">
                <TrendingUp className="h-3.5 w-3.5 shrink-0" /> +5% from last month
              </p>
            </Card>
          </div>

          {/* MOBILE: 150+ strip (matches desktop content) */}
          <Card className="mt-3 flex min-h-[120px] flex-col justify-center rounded-2xl border-0 bg-card p-4 shadow-card md:hidden">
            <p className="text-left text-xs text-muted-foreground">Premium holiday homes managed across key destinations</p>
            <div className="mt-2 flex items-center justify-between gap-2">
              <div className="min-w-0 text-left">
                <p className="font-display text-lg font-bold leading-tight text-foreground">150+ Properties</p>
                <p className="mt-0.5 text-xs font-medium text-emerald-600">+20 new this quarter</p>
              </div>
              <div className="flex shrink-0 -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-card bg-cover bg-center" style={{ backgroundImage: `url(${bedroomMirror})` }} />
                <div className="h-8 w-8 rounded-full border-2 border-card bg-cover bg-center" style={{ backgroundImage: `url(${bedroomTop})` }} />
                <div className="h-8 w-8 rounded-full border-2 border-card bg-cover bg-center" style={{ backgroundImage: `url(${provenBedroom})` }} />
                <span className="flex h-8 items-center rounded-full bg-accent px-2 text-[10px] font-bold text-accent-foreground">+120</span>
              </div>
            </div>
          </Card>

          <Card className="relative mt-3 w-full overflow-hidden rounded-2xl border-0 shadow-card md:hidden">
            <img src={provenBedroom} alt="Proven Performance" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="relative flex min-h-[260px] flex-col justify-end p-5 text-primary-foreground">
              <h3 className="text-left font-display text-base font-bold">Proven Performance</h3>
              <p className="mt-1.5 text-left text-sm leading-snug opacity-90">
                Our properties outperform averages — higher occupancy and returns.
              </p>
              <Button
                type="button"
                className="mt-4 h-9 w-fit rounded-full bg-primary-foreground/15 px-4 text-xs text-primary-foreground backdrop-blur hover:bg-primary-foreground/25"
                onClick={() => scrollToSection("roi")}
              >
                View Performance
              </Button>
            </div>
          </Card>

          {/* Bottom 4 feature cards desktop — same content width as grid above; equal columns; min height 179 */}
          <div className="mt-5 hidden min-w-0 w-full md:grid md:grid-cols-4 md:gap-x-1.5 md:gap-y-4">
            {[
              { icon: wmIconBarChart, title: "Earn Without the Effort", desc: "We handle pricing, guest communication, and occupancy for steady income." },
              { icon: wmIconNeoclassical, title: "Nothing Is Too Small Or Big", desc: "We manage cleaning, maintenance, key handovers, and license renewals for you." },
              { icon: wmIconDesktop, title: "Total Visibility. No Surprises.", desc: "Track earnings, occupancy, reviews, and maintenance logs in real time on your dashboard." },
              { icon: wmIconLightBulb, title: "Elevate What You Have", desc: "Worried about your property's performance? We will enhance it for better returns." },
            ].map((f) => (
              <Card key={f.title} className="flex h-full min-h-[179px] w-full min-w-0 flex-col overflow-hidden rounded-2xl border-0 bg-card p-4 shadow-card">
                <img src={f.icon} alt="" loading="lazy" className="h-8 w-8 shrink-0 object-contain" />
                <h3 className="mt-2 font-cereal text-[18px] font-bold leading-snug tracking-tight text-foreground">{f.title}</h3>
                <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>

          {/* MOBILE: feature cards — one card in view, rest scroll (snap) */}
          <div className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pr-4 [scrollbar-width:none] [-ms-overflow-style:none] md:hidden [&::-webkit-scrollbar]:hidden">
            {[
              { icon: wmIconBarChart, title: "Earn Without the Effort", desc: "Pricing, guest comms, occupancy strategy, all handled. Consistent passive income, year-round." },
              { icon: wmIconNeoclassical, title: "Nothing Is Too Small Or Big", desc: "From listings to maintenance, cleaning, and renewals — we manage everything hands-off." },
              { icon: wmIconDesktop, title: "Total Visibility. No Surprises.", desc: "Track earnings, occupancy, reviews, and maintenance logs in real time on your dashboard." },
              { icon: wmIconLightBulb, title: "Elevate What You Have", desc: "Worried about your property's performance? We will enhance it for better returns." },
            ].map((f) => (
              <Card key={f.title} className="w-[85vw] max-w-[21rem] shrink-0 snap-start rounded-2xl border-0 bg-card p-4 shadow-card">
                <div className="flex gap-3">
                  <img src={f.icon} alt="" loading="lazy" className="h-10 w-10 shrink-0 object-contain" />
                  <div className="min-w-0 flex-1 text-left">
                    <h3 className="font-cereal text-[18px] font-bold leading-snug tracking-tight text-foreground">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR PREDICTABLE RETURNS */}
      <section id="roi" className="px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-center font-display text-2xl font-bold text-foreground sm:text-left sm:text-3xl">
            <span className="sm:hidden">Real Numbers. Real Returns.</span>
            <span className="hidden sm:inline">Built for Predictable Returns</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-muted-foreground sm:mx-0 sm:text-left sm:text-base">
            <span className="sm:hidden">Consistent income and long-term growth, not unpredictable spikes.</span>
            <span className="hidden sm:inline">
              We structure and manage short-term rental investments designed to deliver consistent income and long-term growth.
            </span>
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-[auto_minmax(0,1fr)] md:items-stretch md:gap-x-3">
            <Card className="mx-auto aspect-square w-[366px] max-w-full overflow-hidden rounded-2xl border-0 p-0 shadow-card md:mx-0 md:aspect-auto md:h-[777px] md:w-[640px]">
              <img
                src={returnsKitchen}
                alt="Returns calculator preview"
                loading="lazy"
                className="block h-full w-full object-cover md:hidden"
              />
              <img
                src={returnsBedroom}
                alt="Returns calculator preview"
                loading="lazy"
                className="hidden h-full w-full object-cover md:block"
              />
            </Card>

            <Card className="w-full rounded-2xl border-0 bg-card p-6 shadow-card">
              <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                <span className="sm:hidden">Returns Calculator</span>
                <span className="hidden sm:inline">Estimate Your Property Income in Seconds</span>
              </h3>

              <div className="mt-5 space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-foreground">Select Region</Label>
                  <Select value={region} onValueChange={setRegion}>
                    <SelectTrigger className="h-11 rounded-lg border-input bg-background text-sm">
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
                  <RadioGroup value={propType} onValueChange={setPropType} className="flex flex-wrap gap-2">
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
                  <RadioGroup value={propSize} onValueChange={setPropSize} className="flex flex-wrap gap-2">
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
                  <Select value={furnish} onValueChange={setFurnish}>
                    <SelectTrigger className="h-11 rounded-lg border-input bg-background text-sm">
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
                  <Label className="text-xs font-semibold text-foreground">
                    Expected Occupancy Level <span className="text-muted-foreground">({occupancy}%)</span>
                  </Label>
                  <Slider value={[occupancy]} onValueChange={(v) => setOccupancy(v[0])} max={100} step={1} className="py-2" />
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleCalculate} className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90">
                    Calculate
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl bg-muted p-3">
                    <img src={returnsIconMoney} alt="" loading="lazy" className="h-7 w-7 object-contain" />
                    <p className="mt-2 text-[10px] text-muted-foreground">Est. Monthly Income Range</p>
                    <p className="mt-0.5 text-sm font-bold text-foreground">
                      ${calc.low.toLocaleString()} — ${calc.high.toLocaleString()}
                    </p>
                  </div>
                  <div className="rounded-xl bg-muted p-3">
                    <img src={returnsIconYield} alt="" loading="lazy" className="h-7 w-7 object-contain" />
                    <p className="mt-2 text-[10px] text-muted-foreground">Est. Annual Yield</p>
                    <p className="mt-0.5 text-sm font-bold text-foreground">{calc.yLow}% — {calc.yHigh}%</p>
                  </div>
                </div>

                <p className="pt-1 text-center text-[11px] text-muted-foreground">
                  This estimate is indicative. Actual returns vary by market conditions, quality, seasonality, &amp; demand.
                </p>
              </div>
            </Card>
          </div>

          <p className="mt-6 text-center text-sm italic text-muted-foreground">
            Not sure where to start?{" "}
            <a
              href={WHATSAPP_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold not-italic text-primary underline"
            >
              Talk to an Advisor
            </a>
          </p>
        </div>
      </section>

      {/* LUXURY MANAGED — Property cards */}
      <section id="stays" className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-[1400px]">
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
            <div className="flex justify-end gap-2 md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 rounded-full bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-card outline-none">
                  Buy <ChevronDown className="h-3.5 w-3.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-40">
                  <DropdownMenuLabel>Listing Type</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {[
                    { k: "buy", l: "Buy" },
                    { k: "rent", l: "Rent" },
                    { k: "lease", l: "Lease" },
                  ].map((o) => (
                    <DropdownMenuCheckboxItem
                      key={o.k}
                      checked={!!buyFilters[o.k]}
                      onCheckedChange={(v) => setBuyFilters((p) => ({ ...p, [o.k]: !!v }))}
                    >
                      {o.l}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 rounded-full bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-card outline-none">
                  Filters <SlidersHorizontal className="h-3.5 w-3.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44">
                  <DropdownMenuLabel>Bedrooms</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {[
                    { k: "1bed", l: "1 bed" },
                    { k: "2bed", l: "2 beds" },
                    { k: "3bed", l: "3 beds" },
                    { k: "4bed", l: "4+ beds" },
                  ].map((o) => (
                    <DropdownMenuCheckboxItem
                      key={o.k}
                      checked={!!bedFilters[o.k]}
                      onCheckedChange={(v) => setBedFilters((p) => ({ ...p, [o.k]: !!v }))}
                    >
                      {o.l}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile-only search bar */}
          <div className="mt-4 md:hidden">
            <p className="text-sm font-semibold text-foreground">Search</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex h-10 flex-1 items-center gap-2 rounded-full bg-card px-4 shadow-card">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value.slice(0, 100))}
                  placeholder="Search keywords..."
                  className="h-full w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <Button className="h-10 rounded-full bg-primary px-5 text-xs text-primary-foreground hover:bg-primary/90">Show</Button>
            </div>
          </div>

          {/* DESKTOP: 3-up grid */}
          <div className="mt-8 hidden grid-cols-3 gap-x-6 gap-y-5 md:grid">
            {[
              { img: property1, title: "3BHK Luxury Skyline Apartment", price: "$25/Night", loc: "Karachi - Sindh", size: "150 m2", beds: "3 beds", baths: "1 bath", rating: "4.9/5.0" },
              { img: property2, title: "4BHK Comfort Apartment", price: "$45/Night", loc: "Karachi - Sindh", size: "250 m2", beds: "4 beds", baths: "2 baths", rating: "5.0/5.0" },
              { img: property3, title: "2BHK Executive City Apartment", price: "$50/Night", loc: "Karachi - Sindh", size: "80 m2", beds: "2 beds", baths: "1 bath", rating: "5.0/5.0" },
            ].map((p) => (
              <Card key={p.title} className="h-[382px] w-full overflow-hidden rounded-2xl border-0 bg-card shadow-card">
                <div className="relative h-[230px] w-full overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={640} className="h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />
                  <button aria-label="Save" className="absolute right-3 top-3 h-8 w-8">
                    <img src={listingHeartOverlay} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
                  </button>
                </div>
                <div className="relative p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-sm font-bold text-foreground">{p.title}</h3>
                    <span className="shrink-0 text-sm font-bold text-primary">{p.price}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{p.loc}</p>
                  <div className="my-3 h-px bg-border" />
                  <div className="rounded-xl bg-card">
                    <div className="grid grid-cols-4 gap-2 p-2 text-center text-[11px] text-muted-foreground">
                      <div className="flex flex-col items-center gap-1">
                        <img src={listingIconSize} alt="" className="block h-[18px] w-[18px] shrink-0 object-contain opacity-100" />
                        {p.size}
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <img src={listingIconBed} alt="" className="block h-[18px] w-[18px] shrink-0 object-contain opacity-100" />
                        {p.beds}
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <img src={listingIconBath} alt="" className="block h-[18px] w-[18px] shrink-0 object-contain opacity-100" />
                        {p.baths}
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <img src={listingIconStar} alt="" className="block h-[18px] w-[18px] shrink-0 object-contain opacity-100" />
                        {p.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* MOBILE: horizontal scroll */}
          <div className="mt-5 -mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2 md:hidden [scroll-padding-left:16px] [scroll-padding-right:16px]">
            {filteredMobileProps.length === 0 ? (
              <p className="w-full py-8 text-center text-sm text-muted-foreground">No properties match your filters.</p>
            ) : (
              filteredMobileProps.map((p) => (
                <Card key={p.title} className="h-[384px] w-[366px] shrink-0 snap-center overflow-hidden rounded-2xl border-0 bg-card shadow-card">
                  <div className="relative h-[238px] w-full overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" width={800} height={640} className="h-full w-full object-cover" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />
                    <button aria-label="Save" className="absolute right-3 top-3 h-8 w-8">
                      <img src={listingHeartOverlay} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
                    </button>
                  </div>
                  <div className="relative p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-sm font-bold text-foreground">{p.title}</h3>
                      <span className="shrink-0 text-sm font-bold text-primary">{p.price}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{p.loc}</p>
                    <div className="my-3 h-px bg-border" />
                    <div className="rounded-xl bg-card">
                      <div className="grid grid-cols-4 gap-2 p-2 text-center text-[11px] text-muted-foreground">
                        <div className="flex flex-col items-center gap-1">
                          <img src={listingIconSize} alt="" className="block h-[18px] w-[18px] shrink-0 object-contain opacity-100" />
                          {p.size}
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <img src={listingIconBed} alt="" className="block h-[18px] w-[18px] shrink-0 object-contain opacity-100" />
                          {p.beds}
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <img src={listingIconBath} alt="" className="block h-[18px] w-[18px] shrink-0 object-contain opacity-100" />
                          {p.baths}
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <img src={listingIconStar} alt="" className="block h-[18px] w-[18px] shrink-0 object-contain opacity-100" />
                          {p.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* THREE SIMPLE STEPS */}
      <section id="how" className="px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display text-2xl font-bold text-foreground text-center sm:text-left sm:text-3xl">
            <span className="sm:hidden">3 Steps to Hands-Free Income</span>
            <span className="hidden sm:inline">Three Simple Steps to Hands-Free Property Income</span>
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground text-center sm:text-left sm:text-base">
            <span className="sm:hidden">Simple. Transparent. Stress-free.</span>
            <span className="hidden sm:inline">
              From your first inquiry to ongoing monthly earnings — we make the entire process straightforward, transparent, and stress-free.
            </span>
          </p>

          {/* MOBILE: image first, then steps */}
          <div className="mt-6 md:hidden">
            <img src={stepsKitchen} alt="Managed kitchen" loading="lazy" className="h-[260px] w-full rounded-2xl object-cover" />
            <h3 className="mt-7 font-display text-xl font-bold text-foreground">Get Started with AvaronBnB</h3>
            <ul className="mt-5 space-y-4">
              {["Book a Free Consultation", "We Handle Everything", "Sit Back and Earn", "Ready to Get Started?"].map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base text-foreground">{s}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-7 h-14 w-full rounded-full bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90">
              <a href={WHATSAPP_CHAT_URL} target="_blank" rel="noopener noreferrer">
                Start With a Free Consultation
              </a>
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
              <Button asChild className="mt-8 h-12 w-full rounded-full bg-primary text-sm text-primary-foreground hover:bg-primary/90 sm:max-w-md">
                <a href={WHATSAPP_CHAT_URL} target="_blank" rel="noopener noreferrer">
                  Start With a Free Consultation
                </a>
              </Button>
            </div>
            <div className="relative">
              <img src={stepsKitchen} alt="Fully managed kitchen" loading="lazy" className="h-[420px] w-full rounded-2xl object-cover" />
              <img
                src={stepsFloatingBadge}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 top-1/2 z-10 w-[300px] -translate-y-1/2 drop-shadow-[0_10px_24px_rgba(10,17,40,0.10)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl text-center sm:text-left">
            <span className="sm:hidden">What Our Owners Are Saying</span>
            <span className="hidden sm:inline">See What Our Owners Are Saying</span>
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base text-center sm:text-left">
            <span className="sm:hidden">500+ property owners trust AvaronBnB to grow their investment.</span>
            <span className="hidden sm:inline">
              Join hundreds of property owners across the region who trust AvaronBnB to manage, grow, and protect their real estate investments.
            </span>
          </p>

          <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
            {[
              {
                img: reviewLounge,
                quote:
                  "There's nothing like the tranquility of our mountain cabins, expertly cared for by attentive staff who understand our needs.",
                name: "Michael & Sarah Lee",
                loc: "Colorado",
              },
              {
                img: reviewRoom1,
                quote:
                  "Every moment spent at our lakeside lodge feels like a dream come true, thanks to the exceptional service provided.",
                name: "Emily Johnson",
                loc: "Maine",
              },
              {
                img: reviewRoom2,
                quote: "AvaronBnB helped me scale my portfolio from 2 to 15 properties in under a year. The automation is flawless.",
                name: "Gary Janzen",
                loc: "Washington",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="relative h-[480px] w-full min-w-0 overflow-hidden rounded-2xl shadow-card"
              >
                <img
                  src={t.img}
                  alt=""
                  className="h-full w-full object-cover object-[center_22%]"
                  loading="lazy"
                />
                {/* Readability: fade only on lower ~45% so copy starts ~two-thirds down like Figma */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-primary/95 via-primary/70 to-transparent" />
                <div className="absolute inset-x-0 top-[66%] bottom-0 flex flex-col px-5 pb-5 pt-1 text-left text-primary-foreground">
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed opacity-95">"{t.quote}"</p>
                  <p className="mt-3 text-base font-bold">{t.name}</p>
                  <p className="text-sm opacity-80">{t.loc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 hidden text-sm text-muted-foreground md:block">
            Join 500+ property owners earning more with AvaronBnB
          </p>
        </div>
      </section>

      {/* CTA — Let's Talk About Your Property */}
      <section id="contact" className="px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <div id="cta" className="relative scroll-mt-24 overflow-hidden rounded-[28px] bg-white shadow-card">
            <div className="relative grid grid-cols-1 gap-6 p-5 sm:p-8 md:grid-cols-2 md:items-center md:gap-10 md:p-10">
              <div className="order-2 md:order-1">
                <h2
                  id="cta-heading"
                  tabIndex={-1}
                  className="font-display text-[22px] font-bold leading-[1.15] text-foreground sm:text-3xl text-center md:text-left outline-none"
                >
                  Let's Talk About Your Property.
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground text-center md:text-left">
                  <span className="md:hidden">Free consultation. No contracts. No pressure. Just clarity on what your property can achieve.</span>
                  <span className="hidden md:inline">
                    Book a free, no-obligation consultation with our property management specialists. We'll walk you through everything — no contracts, no pressure, just clarity on what your property can achieve.
                  </span>
                </p>
                <div className="relative z-10 mt-6 flex flex-col gap-3 sm:flex-row md:mt-7">
                  <Button
                    type="button"
                    className="h-12 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                    onClick={() => scrollToSection("roi")}
                  >
                    Get Property Evaluation
                  </Button>
                  <Button asChild className="h-12 rounded-full bg-accent px-7 text-sm font-semibold text-white hover:bg-accent/90">
                    <a href={WHATSAPP_CHAT_URL} target="_blank" rel="noopener noreferrer">
                      Speak With an Expert
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative order-1 md:order-2">
                <picture>
                  <source media="(min-width: 768px)" srcSet={ctaBedroomFramed} />
                  <img
                    src={ctaBedroom}
                    alt="Premium bedroom"
                    loading="lazy"
                    className="mx-auto h-[320px] w-[326px] rounded-[22px] object-cover sm:mx-0 sm:h-[320px] sm:w-full md:h-[300px] lg:h-[320px]"
                  />
                </picture>

                {/* Mobile badge (use provided PNG) */}
                <img
                  src={ctaPremiumBadge}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-6 right-6 h-[44px] w-auto md:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-0 pb-0 sm:px-10 sm:pb-10">
        <div className="w-full overflow-hidden rounded-none border border-border/60 bg-card shadow-card sm:rounded-2xl md:min-h-[320px]">
          <div className="flex flex-col p-6 sm:p-10 md:px-[40px] md:py-[40px]">
            <div className="grid grid-cols-1 gap-8 pb-12 md:grid-cols-4 md:pb-16">
              <div>
                <a
                  href="#home"
                  className="inline-flex transition-opacity hover:opacity-90"
                  aria-label="AvaronBnB home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                >
                  <img
                    src={footerNMark}
                    alt="AvaronBnB"
                    className="h-14 w-auto sm:h-16 md:h-20"
                    decoding="async"
                    loading="lazy"
                  />
                </a>
                <p className="mt-3 text-sm text-muted-foreground">
                  Elevating short-term rentals through professional management and strategic investment insights.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={WHATSAPP_CHAT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    aria-label="Chat on WhatsApp"
                  >
                    <WhatsAppGlyph className="h-[18px] w-[18px]" />
                  </a>
                  <a
                    href={PHONE_TEL_HREF}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    aria-label={`Call ${PHONE_DISPLAY}`}
                  >
                    <Phone className="h-[18px] w-[18px]" aria-hidden />
                  </a>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">Explore</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {FOOTER_EXPLORE_LINKS.map(({ label, id }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="inline-flex w-full max-w-[220px] rounded-md py-1.5 text-muted-foreground transition-colors hover:text-foreground sm:max-w-none"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(id);
                        }}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">Navigate</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {FOOTER_NAVIGATE_LINKS.map((item) => {
                    const key = item.id ?? item.externalHref ?? item.label;
                    if (item.externalHref) {
                      return (
                        <li key={key}>
                          <a
                            href={item.externalHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full max-w-[220px] rounded-md py-1.5 text-muted-foreground transition-colors hover:text-foreground sm:max-w-none"
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="inline-flex w-full max-w-[220px] rounded-md py-1.5 text-muted-foreground transition-colors hover:text-foreground sm:max-w-none"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.id!);
                          }}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">Newsletter</p>
                <div className="mt-4 flex w-full max-w-[320px] flex-col gap-3">
                  <Input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="h-10 w-full rounded-full border-border bg-muted/40 px-4 text-sm placeholder:text-muted-foreground"
                  />
                  <Button
                    type="button"
                    className="h-10 w-full rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto sm:self-start"
                    onClick={() => {
                      if (!newsletterEmail.trim()) {
                        toast.error("Please enter your email.");
                        return;
                      }
                      toast.success("Thanks — we'll be in touch.");
                      setNewsletterEmail("");
                      scrollToSection("contact");
                    }}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-5 md:pt-6">
              <p className="text-xs text-muted-foreground">© 2024 AvaronBnB. Luxury Property Management & Investment. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

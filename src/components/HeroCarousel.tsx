"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChartNoAxesCombined, ShoppingBag } from "lucide-react";

const slides = [
  {
    eyebrow: "BUSINESS · EDUCATION · COMMERCE · ENTERTAINMENT",
    title: "Build, Automate and Grow Your Business",
    accent: "Business",
    copy: "Powerful software, business automation and digital platforms for businesses, schools, retailers and creators.",
    label: "VISIBYL BUSINESS SYSTEMS",
  },
  {
    eyebrow: "SMARTER BUSINESS OPERATIONS",
    title: "Run your business from one connected dashboard",
    accent: "dashboard",
    copy: "Manage sales, inventory, customers, staff and reporting with practical digital tools.",
    label: "BUSINESS MANAGEMENT",
  },
  {
    eyebrow: "COMMERCE · FLEXIBLE PAYMENTS",
    title: "A better way to shop and pay",
    accent: "shop",
    copy: "Discover a smarter marketplace with Pay Small Small and flexible payment experiences.",
    label: "VISBUY MARKETPLACE",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];
  const titleBeforeAccent = slide.title.replace(slide.accent, "");

  return (
    <div className="hero-stage">
      <div className="hero-grid-glow" aria-hidden="true" />
      <div className="hero-product-art" aria-hidden="true">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-laptop">
          <div className="laptop-camera" />
          <div className="laptop-ui">
            <aside><b>V</b><i /><i /><i /><i /></aside>
            <main>
              <header>Dashboard <small>● ● ●</small></header>
              <div className="hero-kpis">
                <div><small>Total Sales</small><b>₦12,500,000</b></div>
                <div><small>Orders</small><b>1,240</b></div>
                <div><small>Customers</small><b>8,420</b></div>
              </div>
              <div className="hero-graph">
                <div className="graph-bars"><i /><i /><i /><i /><i /><i /><i /></div>
                <svg viewBox="0 0 360 100" preserveAspectRatio="none">
                  <path d="M0 78 C35 72 42 55 70 62 S110 78 140 48 S180 62 210 38 S260 48 290 24 S330 35 360 8" fill="none" stroke="#11b9a4" strokeWidth="4" />
                </svg>
              </div>
            </main>
          </div>
        </div>
        <div className="hero-phone">
          <div className="phone-notch" />
          <div className="phone-brand">VISBUY</div>
          <div className="phone-search">⌕ &nbsp; Search products…</div>
          <div className="phone-promo">PAY SMALL<br />SMALL<small>Buy now, pay later</small></div>
          <div className="phone-cats"><span>▣<small>Phones</small></span><span>▣<small>Laptops</small></span><span>▣<small>Home</small></span></div>
          <div className="phone-products"><i /><i /><i /></div>
        </div>
        <div className="hero-floating-tag"><ShoppingBag size={15} /> {slide.label}</div>
      </div>

      <div className="hero-copy">
        <p className="hero-eyebrow">{slide.eyebrow}</p>
        <h1>{titleBeforeAccent}<em>{slide.accent}</em></h1>
        <p className="hero-description">{slide.copy}</p>
        <div className="hero-actions">
          <a href="#products">Explore Our Products <ArrowRight size={17} /></a>
          <a href="/contact">Request a Demo <ChartNoAxesCombined size={16} /></a>
        </div>
        <div className="hero-dots" aria-label="Choose featured slide">
          {slides.map((item, index) => (
            <button
              key={item.label}
              type="button"
              aria-label={"Show slide " + (index + 1)}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

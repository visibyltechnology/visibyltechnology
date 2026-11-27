"use client";
import Link from "next/link";
import CompanyPeople from "@/components/CompanyPeople";
import HeroCarousel from "@/components/HeroCarousel";
import { ArrowRight, ArrowUpRight, Bot, BriefcaseBusiness, ChartNoAxesCombined, GraduationCap, PlayCircle, Settings2, ShieldCheck, ShoppingCart, Sparkles, Zap } from "lucide-react";

const shortcuts = [
 {name:"Visbuy",sub:"Marketplace",href:"/products/visbuy",Icon:ShoppingCart},
 {name:"Visara",sub:"AI Assistant",href:"/products/visara",Icon:Sparkles},
 {name:"VisPlay",sub:"Streaming",href:"/products/visplay",Icon:PlayCircle},
 {name:"Business",sub:"Management",href:"/products/business-management-system",Icon:BriefcaseBusiness},
 {name:"School",sub:"Management",href:"/products/school-management-system",Icon:GraduationCap},
 {name:"Industry",sub:"Automation",href:"/products/industry-automation",Icon:Settings2},
];
const whatsapp=(message:string)=>"https://wa.me/2349055977663?text="+encodeURIComponent(message);
function ProductVisual({kind}:{kind:"industry"|"school"|"business"|"stream"|"shop"}) {
 if(kind==="stream")return <div className="visual-screen stream-screen"><div className="stream-top">VISPLAY <span>HOME&nbsp;&nbsp; SERIES&nbsp;&nbsp; MOVIES</span></div><div className="stream-feature"><small>FEATURED THIS WEEK</small><b>Stories worth<br/>staying in for.</b><span>▶ &nbsp; Play now</span></div><div className="stream-thumbs"><i/><i/><i/><i/></div></div>;
 if(kind==="shop")return <div className="visual-screen shop-screen"><div className="shop-top">VISBUY <span>Search products…</span></div><div className="shop-promo">PAY SMALL SMALL<small>Shop today. Pay with ease.</small></div><div className="shop-items"><i>PHONE</i><i>HOME</i><i>GADGETS</i></div></div>;
 const school=kind==="school";
 const title=school?"School Management":"Business Dashboard";
 const stats=school?["Students","Fees","Results","Attendance"]:["Sales","Orders","Inventory","Customers"];
 return <div className="visual-screen dashboard-screen"><div className="dash-sidebar"><b>V</b><i/><i/><i/><i/></div><div className="dash-main"><div className="dash-heading">{title}<span>● ● ●</span></div><div className="dash-stats">{stats.map((s,i)=><div key={s}><small>{s}</small><b>{school?["1,240","₦8.4m","96%","98%"][i]:["₦8.7m","245","1,820","842"][i]}</b></div>)}</div><div className="dash-chart"><div className="chart-bars"><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="chart-line"/></div><div className="dash-foot"><span>Overview</span><span>Reports</span><span>Activity</span></div></div></div>;
}
function FeatureCard({title,desc,href,kind,cta}:{title:string;desc:string;href:string;kind:"industry"|"school"|"business"|"stream"|"shop";cta:string}) {
 return <article className={"reference-card "+(kind==="shop"?"reference-card-wide":"")}><div className="reference-copy"><div className="reference-icon">{kind==="school"?<GraduationCap/>:kind==="industry"?<Settings2/>:kind==="business"?<ChartNoAxesCombined/>:kind==="stream"?<PlayCircle/>:<ShoppingCart/>}</div><h3>{title}</h3><p>{desc}</p><Link href={href} className="reference-cta">{cta} <ArrowRight size={16}/></Link></div><div className={"reference-art art-"+kind}><ProductVisual kind={kind}/></div></article>;
}
export default function HomePage(){
 return <div className="reference-home">
  <section className="reference-hero"><HeroCarousel/></section>
  <section id="products" className="shortcut-section"><div className="shortcut-title"><span/> <h2>Our<br/>Products</h2></div><div className="shortcut-grid">{shortcuts.map(({name,sub,href,Icon})=><Link href={href} key={name} className="shortcut-card"><Icon/><b>{name}</b><small>{sub}</small></Link>)}</div></section>
  <section id="solutions" className="reference-products">
   <FeatureCard kind="industry" title="Industry Automation" desc="Automation solutions for electronics, phones, fashion, beauty, foodstuff, automotive and more." href="/products/industry-automation" cta="Explore Product"/>
   <FeatureCard kind="school" title="School Management System" desc="A complete school platform for students, staff and parents with online fee payments and results." href="/products/school-management-system" cta="Explore Solution"/>
   <FeatureCard kind="business" title="Business Management System" desc="Manage sales, inventory, expenses, staff, customers and reports in one place." href="/products/business-management-system" cta="Explore Solution"/>
   <FeatureCard kind="stream" title="VisPlay (Streaming Platform)" desc="A modern streaming platform for movies, series, live events and creator content." href="/products/visplay" cta="Explore Platform"/>
   <FeatureCard kind="shop" title="Visbuy (Online Marketplace)" desc="Shop a wide range of products with flexible payment options — Pay Small Small, Buy Now Pay Later, Osusu and more." href="/products/visbuy" cta="Shop on Visbuy"/>
  </section>
  <CompanyPeople/>
  <section className="reference-benefits"><div><Zap/><b>Industry Focused</b><small>Solutions for real businesses</small></div><div><ShieldCheck/><b>Secure & Reliable</b><small>Built for scale and trust</small></div><div><Bot/><b>Expert Support</b><small>We’re here to help always</small></div><div><ChartNoAxesCombined/><b>Business Growth</b><small>Tools that deliver results</small></div></section>
  <section className="reference-contact"><div><span>LET’S BUILD WHAT’S NEXT</span><h2>Ready to move your business forward?</h2><p>Talk to our team about the right digital solution for your organisation.</p></div><a href={whatsapp("Hello Visibyl Technologies, I would like to discuss a project.")} target="_blank" rel="noreferrer">Talk to our team <ArrowUpRight size={18}/></a></section>
 </div>;
}

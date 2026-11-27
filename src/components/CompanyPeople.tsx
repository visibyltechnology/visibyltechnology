"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Users, Quote } from "lucide-react";

function useEncodedImage(path:string){
 const [src,setSrc]=useState("");
 useEffect(()=>{let active=true;fetch(path).then(r=>{if(!r.ok)throw new Error("Image unavailable");return r.text();}).then(value=>{if(active)setSrc("data:image/webp;base64,"+value.trim());}).catch(()=>{if(active)setSrc("");});return()=>{active=false};},[path]);
 return src;
}
export default function CompanyPeople(){
 const team=useEncodedImage("/images/team-meeting.webp.b64");
 const teamWide=useEncodedImage("/images/team-meeting-wide.webp.b64");
 const ceo=useEncodedImage("/images/ceo-portrait.webp.b64");
 return <section id="our-people" className="scroll-mt-24 bg-slate-50 py-24">
  <div className="mx-auto max-w-7xl px-5 sm:px-8">
   <div className="mx-auto mb-14 max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-700">The people behind the work</p><h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Good technology starts with a capable team.</h2><p className="mt-5 text-base leading-7 text-slate-600">A team that brings different perspectives together, works through challenges and stays focused on building useful solutions.</p></div>
   <div className="grid items-stretch gap-7 lg:grid-cols-[1.15fr_.85fr]">
    <div className="overflow-hidden rounded-[2rem] bg-[#0a1b38] shadow-xl"><div className="relative h-full min-h-[340px]">{team||teamWide?<div className="absolute inset-0 grid grid-cols-2 gap-1 bg-[#0a1b38]">{team&&<img src={team} alt="Visibyl Technologies team gathered around a meeting table" className="h-full min-h-[340px] w-full object-cover"/>}{teamWide&&<img src={teamWide} alt="Another view of the Visibyl Technologies team meeting" className="h-full min-h-[340px] w-full object-cover"/>}</div>:<div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-slate-950"/>}<div className="absolute inset-0 bg-gradient-to-t from-[#06142d]/90 via-[#06142d]/20 to-transparent"/><div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10"><span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-100 backdrop-blur"><Users size={14}/> Our team</span><h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">Collaboration. Commitment. Execution.</h3><p className="mt-3 max-w-xl text-sm leading-6 text-slate-200">Our team works together to turn ideas into digital experiences and practical business systems.</p></div></div></div>
    <div className="flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"><div className="relative h-[360px] overflow-hidden bg-[#e9edf4]">{ceo?<img src={ceo} alt="Chief Executive Officer of Visibyl Technologies" className="h-full w-full object-cover object-top"/>:<div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200 text-7xl font-semibold text-blue-800">V</div>}<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"/></div><div className="flex flex-1 flex-col p-7 sm:p-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-700">Leadership</p><h3 className="mt-2 font-display text-2xl font-semibold text-slate-950">Chief Executive Officer</h3><p className="mt-3 text-sm leading-7 text-slate-600">Leading Visibyl Technologies with a focus on practical innovation, digital products and technology that helps businesses grow.</p><div className="mt-auto pt-6"><a href="https://wa.me/2349055977663?text=Hello%20Visibyl%20Technologies%2C%20I%20would%20like%20to%20connect%20with%20your%20leadership%20team." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">Connect with Visibyl <ArrowUpRight size={16}/></a></div></div></div>
   </div>
  </div>
 </section>;
}

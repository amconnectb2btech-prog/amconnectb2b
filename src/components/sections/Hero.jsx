import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

import heroBg from "../../assets/hero_bg.mov";
import heroBgMobile from "../../assets/hero_mobile_bg.mp4";
import heroBgPoster from "../../assets/hero_poster_bg.avif";

export default function Hero() {
  const tickerItems = [
    '$2.4M pipeline generated this quarter',
    '142 qualified meetings booked',
    '328 BANT leads sourced',
    '34% SQL conversion rate',
    'Rated 4.9 by 40+ B2B teams',
  ]

  // Duplicated once so the CSS marquee can loop seamlessly at -50%
  const marqueeItems = [...tickerItems, ...tickerItems]

  return (
    <section className="relative overflow-hidden bg-slate-950 border-b border-slate-900">
      {/* Full-bleed cinematic video */}
      {/* <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
        >
          <source src={heroBg} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/20 to-transparent z-0" />
      </div> */}


      {/* Full-bleed cinematic video */}
      <div className="absolute inset-0">
        
        {/* MOBILE VIDEO - Shown only on small screens */}
        <video
          className="block sm:hidden h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroBgPoster}
        >
          <source src={heroBgMobile} type="video/mp4" />
        </video>

        {/* DESKTOP VIDEO - Shown on larger screens */}
        <video
          className="hidden sm:block h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroBgPoster}
        >
          <source src={heroBg} type="video/mp4" />
        </video>

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/20 to-transparent z-0" />
      </div>

      <div className="relative flex flex-col justify-between min-h-[600px]">
        {/* Top bar */}
        <div className="container-app pt-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 tracking-[0.2em] uppercase">
            <span className="font-bold brand-text">Pune</span>
            <span className="font-bold text-slate-200">B2B demand specialists</span>
          </div>

          <div className="hidden sm:block text-slate-500 font-medium">
            No lock-in · Pay-for-performance · Full data ownership
          </div>
        </div>

        {/* Centered Hero Content */}
        <div className="container-app flex-1 flex items-center justify-center">
          <div className="max-w-4xl text-center animate-fade-up">
            <h1 className="text-h1 font-bold text-white tracking-tight text-balance leading-[1.05]">
              Predictable B2B pipeline.{" "}
              <span className="brand-text bg-clip-text text-transparent">
                Built by experts.
              </span>
            </h1>

            <p className="mt-5 mx-auto max-w-2xl text-lg text-slate-300 leading-relaxed">
              We help B2B software, fintech and enterprise companies generate
              qualified leads, book sales meetings, and grow pipeline without
              inflating headcount or budget.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="btn-primary btn-lg">
                Book a free consultation <ArrowRight size={16} />
              </Link>

              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-white"
              >
                Explore services
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Signature ticker */}
      <div className="relative border-t border-white/10 bg-slate-950/90 backdrop-blur overflow-hidden">
        <div className="hero-marquee flex whitespace-nowrap py-3">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="flex items-center text-xs text-slate-400 px-6"
            >
              <span className="h-1 w-1 rounded-full bg-indigo-400 mr-6" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .hero-marquee {
          width: max-content;
          animation: hero-marquee-scroll 32s linear infinite;
        }

        @keyframes hero-marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}









// import { Link } from 'react-router-dom'

// import { ArrowRight, ArrowUpRight, Star } from 'lucide-react'

// export default function Hero() {
//   const stages = [
//     { label: 'Lead sourced', val: '328' },
//     { label: 'Meeting booked', val: '142' },
//     { label: 'SQL conversion', val: '34%' },
//     { label: 'Pipeline value', val: '$2.4M' },
//   ]

//   return (
//     <section className="relative overflow-hidden bg-slate-950 border-b border-slate-900">
//       {/* Diagonal gradient block — an angled color field instead of a blurred blob mesh */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-slate-950" />
//         <div
//           className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-900 to-slate-950"
//           style={{ clipPath: 'polygon(0 0, 100% 0, 100% 55%, 0 100%)' }}
//         />
//         <div
//           className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 via-transparent to-transparent"
//           style={{ clipPath: 'polygon(100% 0, 100% 45%, 60% 0)' }}
//         />
//       </div>

//       <div className="container-app relative pt-16 md:pt-24 pb-14">
//         <div className="max-w-3xl animate-fade-up">
//           <div className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase">
//             <span className="font-semibold text-blue-300">Pune</span>
//             <span className="text-blue-200/60">B2B demand specialists</span>
//           </div>

//           <h1 className="mt-6 text-h1 font-bold text-white tracking-tight text-balance leading-[1.05]">
//             Predictable B2B pipeline.{' '}
//             <span className="text-amber-300">Built by experts.</span>
//           </h1>

//           <p className="mt-6 text-lg text-indigo-100/80 leading-relaxed max-w-xl">
//             We help B2B software, fintech and enterprise companies generate qualified leads, book sales meetings, and grow pipeline without inflating headcount or budget.
//           </p>

//           <div className="mt-8 flex flex-col sm:flex-row gap-3">
//             <Link to="/contact" className="btn-primary btn-lg">
//               Book a free consultation <ArrowRight size={16} />
//             </Link>
//             <Link
//               to="/services"
//               className="group inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-white"
//             >
//               Explore services
//               <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </Link>
//           </div>
//         </div>

//         {/* Signature element: the actual sales pipeline, laid out as a real sequence of stages */}
//         <div className="relative mt-16 md:mt-20">
//           <div className="absolute left-0 right-0 top-[22px] h-px bg-white/15 hidden sm:block" />
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
//             {stages.map((stage, i) => (
//               <div key={stage.label} className="relative">
//                 <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 border border-white/20 text-xs font-semibold text-blue-300">
//                   {i + 1}
//                 </div>
//                 <div className="mt-3 text-2xl font-bold text-white tabular-nums">{stage.val}</div>
//                 <div className="mt-1 text-xs text-blue-100/60">{stage.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>


//           {/* Signature element: the actual sales pipeline, pulled up so it lives entirely on the indigo field */}
//         {/* <div className="relative mt-16 md:mt-20">
//           <svg
//             className="absolute left-0 right-0 top-0 w-full h-6 hidden sm:block pointer-events-none"
//             viewBox="0 0 400 80"
//             preserveAspectRatio="none"
//             fill="none"
//           >
//             <path
//               d="M0,64 L70,64 C110,64 120,60 160,44 C200,28 220,16 260,10 C300,4 330,0 400,0"
//               stroke="rgba(255,255,255,0.22)"
//               strokeWidth="1.5"
//             />
//           </svg>

//           <svg
//             className="absolute left-0 right-0 -top-[8rem] w-full h-36 hidden sm:block pointer-events-none"
//             viewBox="0 0 400 140"
//             preserveAspectRatio="none"
//             fill="none"
//           >
//             <path
//               d="M0,136 L50,136 C90,136 110,112 150,112 C190,112 210,64 250,64 C290,64 310,0 350,0 L400,0"
//               stroke="rgba(255,255,255,0.22)"
//               strokeWidth="1.5"
//             />
//           </svg>

//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
//             {stages.map((stage, i) => {
//               // Each stage sits a little higher than the last, riding the curve up — never dropping toward the black corner
//               const lift = ['sm:-mt-3', 'sm:-mt-6', 'sm:-mt-[4.5rem]', 'sm:-mt-[8.5rem]'][i]
//               return (
//                 <div key={stage.label} className={`relative ${lift}`}>
//                   <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 border border-white/20 text-xs font-semibold text-blue-300">
//                     {i + 1}
//                   </div>
//                   <div className="mt-3 text-2xl font-bold text-white tabular-nums">{stage.val}</div>
//                   <div className="mt-1 text-xs text-blue-100/60">{stage.label}</div>
//                 </div>
//               )
//             })}
//           </div>
//         </div> */}
        
        

//         <div className="mt-10 flex flex-wrap items-center justify-end gap-x-6 gap-y-3 text-xs text-blue-100/60 pt-6">
//           <div className="flex items-center gap-1.5">
//             <div className="flex items-center text-amber-300">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <Star key={i} size={11} fill="currentColor" />
//               ))}
//             </div>
//             Rated 4.9 by clients
//           </div>
//           <span>No long-term lock-in</span>
//           <span>Pay-for-performance options</span>
//           <span>100% data ownership</span>
//         </div>
//       </div>
//     </section>
//   )
// }





















// import { Link } from 'react-router-dom'
// import { ArrowRight, CheckCircle2 } from 'lucide-react'
// import heroBg from "../../assets/hero_bg.mov"

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden border-b border-slate-900 min-h-[600px]">
//       {/* Background video */}
//       <div className="absolute inset-0">
//         <video
//           className="h-full w-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           poster="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
//         >
//           <source src={heroBg} type="video/mp4" />
//         </video>

//         {/* Overlays */}
//         <div className="absolute inset-0 bg-slate-950/30" />
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/35 to-slate-950/40" />
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
//       </div>

//       <div className="container-app relative pt-14 md:pt-20 pb-14 md:pb-20">
//         <div className="flex justify-center">
//           {/* Center Content */}
//           <div className="w-full max-w-4xl text-center animate-fade-up">
//             <div className="inline-flex items-center gap-1.5 text-xs tracking-tight">
//               <span className="font-semibold text-blue-500">Pune</span>
//               <span className="text-slate-200">B2B demand specialists</span>
//             </div>

//             <h1 className="mt-5 text-h1 font-bold text-white tracking-tight text-balance">
//               Predictable B2B pipeline.{" "}
//               <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
//                 Built by experts.
//               </span>
//             </h1>

//             <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
//               We help B2B software, fintech and enterprise companies generate
//               qualified leads, book sales meetings, and grow pipeline without
//               inflating headcount or budget.
//             </p>

//             {/* Buttons */}
//             <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
//               <Link to="/contact" className="btn-primary btn-lg">
//                 Book a free consultation <ArrowRight size={16} />
//               </Link>

//               <Link
//                 to="/services"
//                 className="btn-lg inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/20 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/30"
//               >
//                 Explore services
//               </Link>
//             </div>

//             {/* Trust Row */}
//             <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-slate-300">
//               <div className="flex items-center gap-2">
//                 <CheckCircle2 size={16} className="text-indigo-400" />
//                 No long-term lock-in
//               </div>

//               <div className="flex items-center gap-2">
//                 <CheckCircle2 size={16} className="text-indigo-400" />
//                 Pay-for-performance options
//               </div>

//               <div className="flex items-center gap-2">
//                 <CheckCircle2 size={16} className="text-indigo-400" />
//                 100% data ownership
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }












// import { Link } from 'react-router-dom'
// import { ArrowRight, CheckCircle2, Star } from 'lucide-react'

// export default function Hero() {
//   const clientAvatars = [
//   'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80', // Woman corporate portrait
//   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80', // Man professional portrait
//   'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'  // Woman smiling portrait
// ];


//   return (
//     <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/40 via-white to-white border-b border-slate-100">
//       {/* Subtle dot pattern */}
//       <div className="absolute inset-0 grid-fade opacity-50 pointer-events-none" />

//       <div className="container-app relative pt-14 md:pt-20 pb-14 md:pb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
//           {/* Left: copy */}
//           <div className="lg:col-span-7 animate-fade-up">
//           <div className="inline-flex items-center gap-1.5 text-xs tracking-tight">
//             <span className="font-semibold text-indigo-600">Pune</span>
//             <span className="text-slate-600">B2B demand specialists</span>
//           </div>
//             <h1 className="mt-5 text-h1 font-bold text-slate-900 tracking-tight text-balance">
//               Predictable B2B pipeline.{' '}
//               <span className="brand-text">Built by experts.</span>
//             </h1>
//             <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
//               We help B2B software, fintech and enterprise companies generate qualified leads, book sales meetings, and grow pipeline without inflating headcount or budget.
//             </p>

//             <div className="mt-7 flex flex-col sm:flex-row gap-3">
//               <Link to="/contact" className="btn-primary btn-lg">
//                 Book a free consultation <ArrowRight size={16} />
//               </Link>
//               <Link to="/services" className="btn-secondary btn-lg">
//                 Explore services
//               </Link>
//             </div>

//             {/* Trust row */}
//             <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
//               <div className="flex items-center gap-2">
//                 <CheckCircle2 size={16} className="brand-text" />
//                 No long-term lock-in
//               </div>
//               <div className="flex items-center gap-2">
//                 <CheckCircle2 size={16} className="brand-text" />
//                 Pay-for-performance options
//               </div>
//               <div className="flex items-center gap-2">
//                 <CheckCircle2 size={16} className="brand-text" />
//                 100% data ownership
//               </div>
//             </div>
//           </div>

//           {/* Right: visual card */}
//           <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '120ms' }}>
//             <div className="relative">
//               {/* Decorative blob */}
//               <div className="absolute -inset-4 brand-tint-bg rounded-2xl rotate-1" />
//               <div className="relative bg-white rounded-xl border border-slate-200 shadow-card-hover p-6">
//                 {/* Mini dashboard mock */}
//                 <div className="flex items-center justify-between pb-4 border-b border-slate-100">
//                   <div>
//                     <div className="text-xs text-slate-500">Pipeline this quarter</div>
//                     <div className="mt-1 text-2xl font-bold text-slate-900">$2.4M</div>
//                   </div>
//                   <div className="chip-brand">↑ 38%</div>
//                 </div>

//                 <div className="mt-4 space-y-3">
//                   {[
//                     { label: 'Qualified meetings', val: '142', pct: 88 },
//                     { label: 'BANT leads sourced', val: '328', pct: 72 },
//                     { label: 'SQL conversion rate', val: '34%', pct: 60 },
//                   ].map((row) => (
//                     <div key={row.label}>
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-slate-600">{row.label}</span>
//                         <span className="font-semibold text-slate-900">{row.val}</span>
//                       </div>
//                       <div className="mt-1.5 h-1.5 rounded-full bg-slate-100 overflow-hidden">
//                         <div className="h-full rounded-full brand-bg" style={{ width: `${row.pct}%` }} />
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
//                     {/* Avatar Stack */}
//                   <div className="flex -space-x-2">
//                     {clientAvatars.map((src, i) => (
//                       <img
//                         key={i}
//                         src={src}
//                         alt={`Client testimonial ${i + 1}`}
//                         className="w-7 h-7 rounded-full border-2 border-white object-cover bg-slate-100"
//                       />
//                     ))}
//                   </div>
//                   <div className="flex items-center text-amber-500">
//                     {Array.from({length: 5}).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
//                   </div>
//                   <span className="text-xs text-slate-500">Rated 4.9 by clients</span>
//                 </div>
//               </div>

//               {/* Floating mini cards */}
//               <div className="hidden md:block absolute -left-6 -bottom-6 bg-white rounded-lg border border-slate-200 shadow-card p-3 max-w-[180px]">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-md brand-tint-bg flex items-center justify-center">
//                     <CheckCircle2 size={16} className="brand-text" />
//                   </div>
//                   <div>
//                     <div className="text-[11px] text-slate-500">Meeting booked</div>
//                     <div className="text-xs font-semibold text-slate-900">VP, Acme Cloud</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

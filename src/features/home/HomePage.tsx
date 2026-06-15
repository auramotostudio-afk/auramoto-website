import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ImagePanel } from '@/components/ui/ImagePanel';
import { imagery } from '@/lib/site';
import Link from 'next/link';

const previews=[
  ['/services','Craftsmanship','Wash, interiors, correction and protection — built as one refined process.',imagery.wash],
  ['/ceramic','Protection','Hydrophobic gloss and lower-maintenance ownership.',imagery.ceramic],
  ['/studio','Studio','A focused automotive care space near Pichhore Tiraha, Dabra.',imagery.studio]
];

export function HomePage(){return <>
<section className="border-b border-white/10 py-12 sm:py-16 lg:min-h-[calc(100vh-96px)] lg:py-20">
  <Container>
    <div className="grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
      <div className="order-2 lg:order-1">
        <p className="gold-label">Premium automotive studio · Dabra</p>
        <h1 className="display title-xl mt-8 max-w-5xl">Automotive Care. Refined.</h1>
        <p className="bodycopy mt-8">A detail-led experience for paint clarity, interior restoration and ceramic protection — built for owners who notice every reflection.</p>
        <div className="mt-9 grid gap-3 sm:flex sm:gap-4">
          <Button href="/services">Explore Experience</Button>
          <Button href="/contact" variant="gold">Enquire</Button>
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <ImagePanel src={imagery.hero} label="Signature Finish" className="h-[46vh] min-h-[320px] rounded-sm sm:h-[58vh] lg:h-[72vh]"/>
      </div>
    </div>
  </Container>
</section>
<section className="border-b border-white/10 py-20 md:py-32">
  <Container><div className="max-w-6xl"><p className="gold-label">Philosophy</p><h2 className="display title-lg mt-8">We don't clean cars. We preserve them.</h2><p className="bodycopy mt-8">Every wash, polish and coating is approached like surface preservation: controlled process, measured correction and a finish that feels calm, deep and precise.</p></div></Container>
</section>
<section className="py-14 md:py-24">
  <Container><div className="grid gap-5 md:grid-cols-3">{previews.map(([href,title,text,img])=><Link href={href} key={href} className="premium-card group overflow-hidden"><ImagePanel src={img} label={title} className="h-[230px] border-0 shadow-none"/><div className="p-7 md:p-8"><h3 className="font-display text-3xl font-extrabold tracking-[-.055em] md:text-4xl">{title}</h3><p className="mt-4 text-sm leading-7 text-white/58 md:text-base">{text}</p><span className="mt-7 inline-block text-[10px] font-extrabold uppercase tracking-[.34em] text-gold">Discover →</span></div></Link>)}</div></Container>
</section>
</>}

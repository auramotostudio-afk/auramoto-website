import { Mail, MapPin, MessageCircle, Phone, Camera } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { site } from '@/lib/site';
const items=[
  ['WhatsApp','Send photos and requirements',site.whatsapp,MessageCircle],
  ['Call','Speak directly with the studio',`tel:${site.phone}`,Phone],
  ['Email','Share details professionally',`mailto:${site.email}`,Mail],
  ['Instagram','View updates and finishes',site.instagram,Camera]
];
export default function Page(){return <><PageHero kicker="Contact" title="Start with your vehicle." copy="Share your car model, condition, service interest and a few photos. We will guide you toward the right detailing path." bg="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=85"/><section className="section"><div className="container contact-grid">{items.map(([title,copy,href,Icon]:any)=><div className="contact-card" key={title}><div className="icon"><Icon size={22}/></div><div className="kicker">{title}</div><h3><a href={href} target={title==='Instagram'||title==='WhatsApp'?'_blank':undefined}>Open →</a></h3><p>{copy}</p></div>)}</div></section><section className="footer-space"><div className="container footer-grid"><div><div className="footer-brand">AURAMOTO</div><p className="muted">Automotive Care Refined</p></div><div><MapPin size={20}/><p className="section-copy">{site.address}<br/>{site.phoneLabel}<br/>{site.email}</p></div></div></section></>}

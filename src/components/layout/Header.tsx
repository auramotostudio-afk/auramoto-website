'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { nav } from '@/lib/site';

export function Header(){
  const pathname=usePathname(); const [open,setOpen]=useState(false);
  const active=(href:string)=> pathname===href;
  return <header className="site-header">
    <div className="nav-shell">
      <Link href="/" onClick={()=>setOpen(false)} className="brand-lockup" aria-label="AuraMoto Home">
        <img src="/brand/auramoto-signature.png" alt="AuraMoto Detailing Studio" className="brand-logo"/>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(n=><Link key={n.href} className={active(n.href)?'active':''} href={n.href}>{n.label}</Link>)}
      </nav>
      <Link href="/contact" className="enquire">Enquire</Link>
      <button className="menu-button" aria-label="Open menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </div>
    <div className={'mobile-menu '+(open?'open':'')}>
      {nav.map((n,i)=><Link key={n.href} onClick={()=>setOpen(false)} className={active(n.href)?'active':''} href={n.href}><span>0{i+1}</span>{n.label}</Link>)}
      <Link onClick={()=>setOpen(false)} className="mobile-enquire" href="/contact">Start enquiry</Link>
    </div>
  </header>
}

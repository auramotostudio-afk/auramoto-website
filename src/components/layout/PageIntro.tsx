'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
export function PageIntro(){ const path=usePathname(); const [show,setShow]=useState(true); useEffect(()=>{setShow(true); const t=setTimeout(()=>setShow(false),880); return()=>clearTimeout(t)},[path]); return <div className={'page-intro '+(!show?'hide':'')}><div><div className="intro-word">AURAMOTO</div><div className="intro-tag">AUTOMOTIVE CARE REFINED</div></div></div> }

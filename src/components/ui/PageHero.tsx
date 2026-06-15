import { CSSProperties } from 'react';
import { Button } from './Button';
export function PageHero({kicker,title,copy,action,bg}:{kicker:string;title:string;copy:string;action?:{href:string;label:string};bg?:string}){
  const style = bg ? ({'--page-bg': `url(${bg})`} as CSSProperties) : undefined;
  return <section className={'page-hero '+(bg?'has-page-bg':'')} style={style}><div className="container page-hero-inner"><div className="kicker">{kicker}</div><h1 className="page-title">{title}</h1><p className="page-copy">{copy}</p>{action&&<div className="hero-actions"><Button href={action.href}>{action.label}</Button></div>}</div></section>
}

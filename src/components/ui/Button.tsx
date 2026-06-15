import Link from 'next/link';
export function Button({href,children,gold=false}:{href:string;children:React.ReactNode;gold?:boolean}){return <Link className={'button '+(gold?'button-gold':'')} href={href}><span>{children}</span><span>→</span></Link>}

import { ImageReveal } from './ImageReveal';
export function HeroImagePanel({src,alt}:{src:string;alt:string}){return <div className="hero-image-panel"><ImageReveal src={src} alt={alt} className="cinematic-image"/></div>}

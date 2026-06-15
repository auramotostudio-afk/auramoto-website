import { Button } from '@/components/ui/Button';
import { ImageReveal } from '@/components/ui/ImageReveal';
import { images } from '@/lib/site';
export default function Page(){return <>
  <section className="home-hero">
    <div className="home-bg" aria-hidden="true"/>
    <div className="container hero-content">
      <div className="kicker">Premium Automotive Studio · Dabra</div>
      <h1 className="home-title">Automotive Care.<br/>Refined.</h1>
      <p className="home-copy">A detail-led experience for paint clarity, interior restoration and ceramic protection — built for owners who notice every reflection.</p>
      <div className="hero-actions"><Button href="/services">Explore Experience</Button><Button href="/contact" gold>Start Enquiry</Button></div>
    </div>
    <div className="home-signature">AURAMOTO</div>
  </section>
  <section className="section">
    <div className="container split">
      <div><div className="kicker">Craftsmanship</div><h2 className="section-title">We do not wash cars. We preserve them.</h2></div>
      <p className="section-copy">Every service is built around safe contact, measured correction, refined interiors and protective finishing. The result is not loud. It is controlled, clean and deliberately premium.</p>
    </div>
  </section>
  <section className="section"><div className="container service-grid">
    <ImageReveal className="service-tile" src={images.wash} alt="Premium foam wash"><div className="tile-content"><span className="tile-num">01</span><h3>Premium Wash</h3><p>Safe maintenance for gloss, glass and wheels.</p></div></ImageReveal>
    <ImageReveal className="service-tile" src={images.correction} alt="Paint correction"><div className="tile-content"><span className="tile-num">02</span><h3>Paint Correction</h3><p>Swirl reduction and clarity restoration.</p></div></ImageReveal>
    <ImageReveal className="service-tile" src={images.ceramic} alt="Ceramic protection"><div className="tile-content"><span className="tile-num">03</span><h3>Ceramic Protection</h3><p>Long-term gloss and hydrophobic behaviour.</p></div></ImageReveal>
    <ImageReveal className="service-tile" src={images.interior} alt="Interior restoration"><div className="tile-content"><span className="tile-num">04</span><h3>Interior Restoration</h3><p>Deep cabin refresh for daily comfort.</p></div></ImageReveal>
  </div></section>
</>}

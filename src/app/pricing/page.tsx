import { priceGroups, PriceRow as PriceRowType } from '@/lib/pricing';
import { PageHero } from '@/components/ui/PageHero';
import { images } from '@/lib/site';

function PriceItem({ row }: { row: PriceRowType }) {
  const hasVehicles = row.hatch || row.sedan || row.suv;
  return (
    <div className="price-card">
      <div className="price-card-top">
        <strong>{row.service}</strong>
        {row.note ? <span className="price-note">{row.note}</span> : null}
      </div>
      {hasVehicles ? (
        <div className="price-values">
          <span className="price-cell"><span>Hatch</span><b>{row.hatch}</b></span>
          <span className="price-cell"><span>Sedan</span><b>{row.sedan}</b></span>
          <span className="price-cell"><span>SUV</span><b>{row.suv}</b></span>
        </div>
      ) : (
        <div className="price-single"><b>{row.price}</b>{row.note ? <span>{row.note}</span> : null}</div>
      )}
    </div>
  );
}

function DesktopTable({ rows }: { rows: PriceRowType[] }) {
  const vehicleRows = rows.filter((r) => r.hatch || r.sedan || r.suv);
  const singleRows = rows.filter((r) => !(r.hatch || r.sedan || r.suv));
  return (
    <>
      {vehicleRows.length ? (
        <table className="price-table">
          <thead><tr><th>Service</th><th>Hatchback</th><th>Sedan</th><th>SUV</th></tr></thead>
          <tbody>{vehicleRows.map((row) => (
            <tr key={row.service}>
              <td><strong>{row.service}</strong>{row.note ? <span>{row.note}</span> : null}</td>
              <td>{row.hatch}</td><td>{row.sedan}</td><td>{row.suv}</td>
            </tr>
          ))}</tbody>
        </table>
      ) : null}
      {singleRows.length ? (
        <div className="addon-grid">{singleRows.map((row) => <PriceItem key={row.service} row={row} />)}</div>
      ) : null}
    </>
  );
}

export default function Page() {
  return (
    <>
      <PageHero kicker="Pricing" title="Service menu." copy="Clear categories, visible vehicle classes and premium detailing packages for hatchback, sedan and SUV owners." bg={images.sedan} />
      <section className="section pricing-section">
        <div className="container">
          {priceGroups.map((group) => (
            <div className="price-group" key={group.title}>
              <div className="price-group-head"><h2>{group.title}</h2><p>{group.intro}</p></div>
              <div className="desktop-price"><DesktopTable rows={group.rows} /></div>
              <div className="mobile-price">{group.rows.map((row) => <PriceItem key={row.service} row={row} />)}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export type PriceRow = { service: string; hatch?: string; sedan?: string; suv?: string; price?: string; note?: string };
export const priceGroups: { title: string; intro: string; rows: PriceRow[] }[] = [
  { title: 'Express Wash', intro: 'Routine maintenance for a clean exterior and fresh cabin.', rows: [
    { service: 'Exterior Wash', hatch:'₹149', sedan:'₹179', suv:'₹199' },
    { service: 'Wash + Vacuum', hatch:'₹299', sedan:'₹299', suv:'₹349' },
    { service: 'Premium Foam Wash', hatch:'₹399', sedan:'₹399', suv:'₹499' }
  ]},
  { title: 'Interior Care', intro: 'Deep cabin refresh for fabric, plastic, roof liner and odour control.', rows: [
    { service: 'Interior Deep Cleaning', hatch:'₹1,299', sedan:'₹1,499', suv:'₹1,799' },
    { service: 'Seat Shampooing', hatch:'₹899', sedan:'₹1,099', suv:'₹1,299' },
    { service: 'Roof Liner Cleaning', price:'Starting ₹499' },
    { service: 'Odour Removal Treatment', price:'Starting ₹499' },
    { service: 'Engine Bay Cleaning', price:'Starting ₹699' }
  ]},
  { title: 'Detailing Packages', intro: 'Curated multi-step packages for visible improvement and protection.', rows: [
    { service: 'Silver Refresh', hatch:'₹999', sedan:'₹1,199', suv:'₹1,399' },
    { service: 'Gold Detail', hatch:'₹2,299', sedan:'₹2,699', suv:'₹3,199', note:'Most Popular' },
    { service: 'Platinum Detail', hatch:'₹4,499', sedan:'₹5,499', suv:'₹6,499' }
  ]},
  { title: 'Paint Correction', intro: 'Machine polishing and correction for depth, clarity and controlled reflections.', rows: [
    { service: 'Paint Enhancement Polish', hatch:'₹1,999', sedan:'₹2,499', suv:'₹3,499' },
    { service: 'Paint Correction', hatch:'₹4,999', sedan:'₹6,999', suv:'₹8,999' }
  ]},
  { title: 'Ceramic Coating', intro: 'Gloss, hydrophobic behaviour and long-term paint protection.', rows: [
    { service: 'Ceramic Lite', hatch:'₹6,999', sedan:'₹8,999', suv:'₹10,999' },
    { service: 'Premium Ceramic', hatch:'₹12,999', sedan:'₹15,999', suv:'₹18,999' },
    { service: 'Premium Ceramic + Paint Correction', hatch:'₹16,999', sedan:'₹19,999', suv:'₹23,999' }
  ]},
  { title: 'Add-Ons', intro: 'Enhance specific surfaces and problem areas.', rows: [
    { service: 'Headlight Restoration', price:'₹799' },{ service: 'Glass Polishing', price:'₹999' },{ service: 'Water Spot Removal', price:'₹999' },{ service: 'Trim Restoration', price:'₹799' },{ service: 'Alloy Wheel Detailing', price:'₹799' },{ service: 'Rain Repellent Treatment', price:'₹999' },{ service: 'Pet Hair Removal', price:'₹499' },{ service: 'Underbody Cleaning', price:'₹699' }
  ]},
  { title: 'Membership Plans', intro: 'Monthly care plans for consistently maintained vehicles.', rows: [
    { service: 'Silver Care Club', price:'₹999 / month', note:'2 Wash + Vacuum Services' },
    { service: 'Gold Care Club', price:'₹1,499 / month', note:'4 Wash + Vacuum + 10% off detailing' },
    { service: 'Platinum Care Club', price:'₹2,499 / month', note:'4 Premium Foam Washes + Interior Refresh + 15% off detailing' }
  ]}
];

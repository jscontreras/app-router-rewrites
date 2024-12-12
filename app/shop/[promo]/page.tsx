import { notFound } from 'next/navigation'

async function getPromoDetails(promo: string) {
  // This is a mock API call. In a real application, you would fetch from an actual API.
  const promos = {
    'summer-sale': { name: 'Summer Sale', discount: '20%' },
    'winter-clearance': { name: 'Winter Clearance', discount: '30%' },
    'spring-deal': { name: 'Spring Deal', discount: '15%' },
  }

  return promos[promo as keyof typeof promos] || null
}

export default async function ShopPromo({ params }: { params: Promise<{ promo: string }> }) {
  const { promo } = await params;
  const promoDetails = await getPromoDetails(promo);

  if (!promoDetails) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{promoDetails.name}</h1>
      <p className="text-xl mb-4">Discount: {promoDetails.discount}</p>
      <p>Enjoy our {promo.replace('-', ' ')} promotion!</p>
    </div>
  )
}


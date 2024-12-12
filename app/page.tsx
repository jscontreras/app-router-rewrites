import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to our Next.js App Router Example</h1>
      <nav>
        <ul className="flex flex-col space-y-2">
          <li>
            <Link href="/about" className="text-blue-500 hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-blue-500 hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/example-post" className="text-blue-500 hover:underline">
              Sample Blog Post
            </Link>
          </li>
          <li>
            <Link href="/api/revalidate?path=/example-post" className="text-blue-500 hover:underline">
              Revalidate by Path
            </Link>
          </li>
          <li>
            <Link href="/api/revalidate?tag=blog-post" className="text-blue-500 hover:underline">
              Revalidate by Tag
            </Link>
          </li>
          <li>
            <Link href="/shop/summer-sale" className="text-blue-500 hover:underline">
              Summer Sale Promo
            </Link>
          </li>
          <li>
            <Link href="/shop/winter-clearance" className="text-blue-500 hover:underline">
              Winter Clearance Promo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}


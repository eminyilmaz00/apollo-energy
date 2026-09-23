import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl tracking-wider text-green-400 hover:text-green-300 transition-colors">
              APOLLO GREEN
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link href="/products" className="hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Products</Link>
              <Link href="/about" className="hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
              <Link href="/contact" className="hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
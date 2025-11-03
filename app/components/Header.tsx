import Link from 'next/link';
import Button from './Button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-sm flex items-center justify-center">
            <span className="text-black font-bold text-sm">L</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Light<span className="text-green-500">Shift</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
            WHO WE HELP
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
            EQUIPMENT
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
            WHY US
          </Link>
        </div>

        <Button variant="primary" size="sm">
          Inquiry Form
        </Button>
      </nav>
    </header>
  );
}

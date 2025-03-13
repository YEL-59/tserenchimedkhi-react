import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

const navItems = [
  { title: 'Home', url: '/' },
  { title: 'Features', url: '/#' },
  { title: 'Pricing', url: '/pricing' },
  { title: 'Support', url: '/about' },
];

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0">
        <div className="flex items-center gap-2 px-6 py-6">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-primary/10 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
              <path d="M3 12v5h16a2 2 0 0 1 0 4H3v-4" />
            </svg>
          </Link>
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-xl font-bold"
          >
            EasyMigrate
          </Link>
        </div>
        <nav className="space-y-1 px-3">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.url}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <Separator className="my-4" />
        <div className="px-3">
          <Link to="/sign-up">
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setOpen(false)}
            >
              Sign up
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

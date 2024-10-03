import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
// import { ModeToggle } from '@/components/'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="px-6 mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Shudhanshu Singh
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#projects">Projects</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#research">Research</Link>
            <Link href="#datasets">Datasets</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Button variant="ghost" asChild>
              {/* <Link href="/contact">Contact</Link> */}
            </Button>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TfiMenu } from "react-icons/tfi";
import Link from "next/link";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className=" text-black w-10 bg-white text-[15rem]  p-2 ">
          <TfiMenu />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="top"
        className="bg-gradient-to-r from-[#073052] to-[#109085] max-h-[80vh] text-white"
      >
        <SheetHeader className="border-none pb-4 mb-4">
          <SheetTitle className=" text-white text-3xl font-serif font-semibold text-left">
            Hooriya
          </SheetTitle>
        </SheetHeader>
        {/* navigaton links */}
        <nav className="flex flex-col gap-6 px-6 py-4 text-lg text-white">
          <SheetClose asChild>
            <Link
              href="/"
              className="hover:text-[#227B94] transition duration-300"
            >
              Home
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="#About"
              className="hover:text-[#227B94] transition duration-300"
            >
              About
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="#Skills"
              className="hover:text-[#227B94] transition duration-300"
            >
              Skills
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="#Project"
              className="hover:text-[#227B94] transition duration-300"
            >
              Projects
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="#Contact"
              className="hover:text-[#227B94] transition duration-300"
            >
              Contact
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

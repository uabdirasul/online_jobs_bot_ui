"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="mt-5">
      <ul className="flex flex-row justify-around">
        <li className="font-medium">
          <Link
            className={`link pb-1 ${pathname === "/" ? "active" : ""}`}
            href={"/"}
          >
            Jańa daǵaza
          </Link>
        </li>
        <li className="font-medium">
          <Link
            className={`link pb-1 ${pathname === "/my-ads" ? "active" : ""}`}
            href={"/my-ads"}
          >
            Daǵazalarım
          </Link>
        </li>
        <li className="font-medium">
          <Link
            className={`link pb-1 ${pathname === "/profile" ? "active" : ""}`}
            href={"/profile"}
          >
            Profilim
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  const links = pathname.split("/");

  return (
    <div className="flex items-center gap-3 capitalize ">
      {links.slice(0, -1).map((link, index) => (
        <Link
          key={link}
          href={!index ? "/" : links.slice(0, index + 1).join("/")}
        >
          <span className="hover:text-main-200 text-gray-400">
            {link === "" ? "Home" : link.split("-").join(" ")}
          </span>{" "}
          -
        </Link>
      ))}{" "}
      <p className="text-gray-400 capitalize">
        {links.slice(-1).join("").split("-").join(" ")}
      </p>
    </div>
  );
}

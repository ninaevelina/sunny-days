import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-black py-5">
      <div className="w-4/5 mx-auto flex justify-center md:justify-start">
        <nav>
          <ul>
            <li>
              <Link href={"/"}>
                <Image
                  src={"/sunny-days.svg"}
                  alt="Sunny Days Logo"
                  height={100}
                  width={100}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

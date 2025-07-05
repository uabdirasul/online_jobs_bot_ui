import { FileText, HelpCircle, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BizlerLogo from "../public/bizler_logo.png";
import BizlerLogoBlack from "../public/bizler_logo_black.png";
import SiriusLogo from "../public/sirius_logo.png";
import SiriusLogoBlack from "../public/sirius_logo_black.png";

const page = () => {
  return (
    <div className="mt-5 w-[90%] mx-auto flex flex-col justify-around h-[80vh]">
      <p className="text-center text-slate-800 dark:text-white">
        IT Jobs kanalına daǵaza jaylastırıw ushın tómendegi túymege basıń hám
        ondaǵı shablonlardı toltırıw arqalı kanalǵa jiberiń
      </p>

      <div className="grid grid-cols-2 gap-5 p-5">
        {/* Job Search Card */}
        <Link href="/search-worker">
          <div className="active:scale-95 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700/70 rounded-2xl p-6 text-center transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-blue-500 dark:text-blue-400" />
            </div>
            <h3 className="text-blue-500 dark:text-blue-400 text-sm font-medium h-10 text-center">
              Jumısshı izlew (Vakanciya)
            </h3>
          </div>
        </Link>

        {/* Resume Card */}
        <Link href="/resume">
          <div className="active:scale-95 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700/70 rounded-2xl p-6 text-center transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-blue-100 dark:bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-blue-500 dark:text-gray-400" />
            </div>
            <h3 className="text-blue-500 dark:text-gray-400 text-sm font-medium h-10 text-center">
              Rezyume
            </h3>
          </div>
        </Link>

        {/* Project Order Card */}
        <Link href="/order-project">
          <div className="active:scale-95 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700/70 rounded-2xl p-6 text-center transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-blue-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-blue-500 dark:text-yellow-400" />
            </div>
            <h3 className="text-blue-500 dark:text-yellow-400 text-sm font-medium h-10 text-center">
              Proekt buyırtpa qılıw
            </h3>
          </div>
        </Link>

        {/* About Us Card */}
        <Link href="/about">
          <div className="active:scale-95 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700/70 rounded-2xl p-6 text-center transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-blue-100 dark:bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-blue-500 dark:text-red-400" />
            </div>
            <h3 className="text-blue-500 dark:text-red-400 text-sm font-medium h-10 text-center">
              Biz haqqımızda
            </h3>
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-center gap-6 mx-4">
        <a
          href="https://www.bizler.group/"
          target="_blank"
          className="transition-transform active:scale-95"
        >
          {/* Light Mode Logo */}
          <Image
            src={BizlerLogoBlack}
            alt="Bizler logo (light)"
            className="h-12 w-auto block dark:hidden"
          />
          {/* Dark Mode Logo */}
          <Image
            src={BizlerLogo}
            alt="Bizler logo (dark)"
            className="h-12 w-auto hidden dark:block"
          />
        </a>

        <a
          href="https://www.instagram.com/sirius_it_center/"
          target="_blank"
          className="transition-transform active:scale-95"
        >
          {/* Light Mode Logo */}
          <Image
            src={SiriusLogoBlack}
            alt="Sirius logo (light)"
            className="h-12 w-auto block dark:hidden"
          />
          {/* Dark Mode Logo */}
          <Image
            src={SiriusLogo}
            alt="Sirius logo (dark)"
            className="h-12 w-auto hidden dark:block"
          />
        </a>
      </div>
    </div>
  );
};

export default page;

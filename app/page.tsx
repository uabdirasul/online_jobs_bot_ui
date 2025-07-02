import { FileText, HelpCircle, Search, User } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="mt-5 w-[95%] mx-auto flex flex-col justify-around">
      <p className="text-center">
        IT Jobs kanalına daǵaza jaylastırıw ushın tómendegi túymege basıń hám
        ondaǵı shablonlardı toltırıw arqalı kanalǵa jiberiń
      </p>

      <div className="grid grid-cols-2 gap-5 p-5">
        {/* Job Search Card */}
        <div className="bg-slate-700/50 rounded-2xl p-6 text-center hover:bg-slate-700/70 transition-colors cursor-pointer">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-blue-400 text-sm font-medium h-10 text-center">
            Jumısshı izlew (Vakanciya)
          </h3>
        </div>

        {/* Resume Card */}

        <Link href="/resume">
          <div className="bg-slate-700/50 rounded-2xl p-6 text-center hover:bg-slate-700/70 transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-gray-400 text-sm font-medium h-10 text-center">
              Rezyume
            </h3>
          </div>
        </Link>

        {/* Project Order Card */}
        <div className="bg-slate-700/50 rounded-2xl p-6 text-center hover:bg-slate-700/70 transition-colors cursor-pointer">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="text-yellow-400 text-sm font-medium h-10 text-center">
            Proekt buyırtpa qılıw
          </h3>
        </div>

        {/* About Us Card */}
        <Link href="/about">
          <div className="bg-slate-700/50 rounded-2xl p-6 text-center hover:bg-slate-700/70 transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-red-400 text-sm font-medium h-10 text-center">
              Biz haqqımızda
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;

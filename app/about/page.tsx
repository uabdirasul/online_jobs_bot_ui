const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white px-4 mt-10">
      <div className="max-w-xl w-full bg-slate-700/60 rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-blue-400 mb-4 text-center">
          IT Jobs Karakalpakstan
        </h1>
        <p className="mb-4 text-lg text-gray-200 text-center">
          Bul bot arqalı tiykarǵı kanalǵa kompyuter jumısları haqqında daǵaza
          qoyıwıńız múmkin.
        </p>
        <ul className="mb-4 text-gray-300 list-disc list-inside space-y-1">
          <li>Grafik dizayn</li>
          <li>Programmalastırıw</li>
          <li>3D grafika</li>
          <li>Video montaj</li>
          <li>h.t.b.</li>
        </ul>
        <div className="bg-slate-800/70 rounded-lg p-4 mb-4">
          <div className="flex flex-col gap-2 text-sm">
            <span>
              <span className="font-semibold text-blue-300">👨‍💻 From:</span>{" "}
              <a
                href="https://www.bizler.group/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400"
              >
                bizler.group
              </a>
            </span>
            <span>
              <span className="font-semibold text-blue-300">Bot:</span>{" "}
              <a
                href="https://t.me/itjobsland_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400"
              >
                @itjobsland_bot
              </a>
            </span>
            <span>
              <span className="font-semibold text-blue-300">Chat:</span>{" "}
              <a
                href="https://t.me/freelancers_kr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400"
              >
                @freelancers_kr
              </a>
            </span>
            <span>
              <span className="font-semibold text-blue-300">Admin:</span>{" "}
              <a
                href="https://t.me/bizlergroup"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400"
              >
                @bizlergroup
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

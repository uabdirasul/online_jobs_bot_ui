const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-800 dark:text-white px-4 my-5">
      <div className="max-w-xl w-full bg-white dark:bg-slate-700/60 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          Biz haqqımızda
        </h2>
        <div className="text-base space-y-5 text-gray-700 dark:text-gray-200 text-center">
          <p>
            Bizler Group kompaniyası 2020 jıldan baslap hár túrli IT-ónimlerin
            islep shıģarıw menen shuģıllanadı. Yaģnıy tutınıwshılardıń
            sorawlarına bola programmalar, web-saytlar, mobil programmalar,
            telegram botlar, web-dizayn hám grafikalıq dizayn ónimlerin islep
            beremiz.
          </p>
          <p>
            Házirgi kúnde 30 dan artıq joybarlardı tabıslı tamamlap sırt el
            bazarlarına shıģa basladıq. 2024 jıl ózimizdiń "Sirius IT Academy"
            atlı akademiyamızdı ashıp kóplegen jaslarģa keleshek kásiplerin
            úyretip jeke rawajlanıwına járdem kórsetip kelmektemiz.
          </p>
          <p>
            Bizler Grouptıń negizgi maqseti Qaraqalpaqstandı rawajlandırıw
            bolıp, bul jolda kóplegen jaslardıń karyera qurıwına, startap
            joybarların baslawına, óz biznesin jolģa qoyıwda, qosımsha daramat
            tabıwına, IT kásiplerin úyreniwde, IT jarıslar, eń birinshi IT
            Forum, Hakaton, Ideaton, Meet-up, Workshoplar h.t.b kóplegen
            is-ilajlardı shólkemlestiriwde BIYPUL járdem kórsetti.
          </p>

          <div className="bg-gray-100 dark:bg-slate-800/70 rounded-lg p-4 text-sm space-y-4 text-left">
            {/* Socials */}
            <div className="bg-gray-200 dark:bg-slate-700/50 rounded-md p-3">
              <div className="font-semibold text-blue-600 dark:text-blue-300 mb-2">
                🌐 Sociallıq joybarlar
              </div>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://t.me/startup_jaslar"
                    className="underline hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    @startup_jaslar
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/sabaqliqlar_bot"
                    className="underline hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    @sabaqliqlar_bot
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/freelancers_kr"
                    className="underline hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    @freelancers_kr
                  </a>
                </li>
              </ul>
            </div>

            {/* IT Academy */}
            <div className="bg-gray-200 dark:bg-slate-700/50 rounded-md p-3">
              <div className="font-semibold text-blue-600 dark:text-blue-300 mb-2">
                💻 IT akademiyamız
              </div>
              <a
                href="https://t.me/GrowWithSirius"
                className="underline hover:text-blue-500 dark:hover:text-blue-400"
              >
                @GrowWithSirius
              </a>
            </div>

            {/* Portfolio & Contact */}
            <div className="bg-gray-200 dark:bg-slate-700/50 rounded-md p-3">
              <div className="font-semibold text-blue-600 dark:text-blue-300 mb-2">
                📁 Portfolio hám kontaktlar
              </div>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://www.bizler.group"
                    className="underline hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    www.bizler.group
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/bizler_portfolio"
                    className="underline hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    @bizler_portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+998906601020"
                    className="underline hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    90-660-10-20
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

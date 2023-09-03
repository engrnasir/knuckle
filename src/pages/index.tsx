import { useState } from "react";
import Head from "next/head";

import SearchDialog from "~/dialogs/search";
import SummaryDialog from "~/dialogs/summary";
import AboutDialog from "~/dialogs/about";

export default function Home() {
  const [isOpenSearchDialog, setIsOpenSearchDialog] = useState(false);
  const [isOpenSummaryDialog, setIsOpenSummaryDialog] = useState(false);
  const [isOpenAboutDialog, setIsOpenAboutDialog] = useState(false);

  const handleOncloseSearchDialog = () => {
    setIsOpenSearchDialog(false);
  };

  const handleOncloseSummaryDialog = () => {
    setIsOpenSummaryDialog(false);
  };

  const handleOncloseAboutDialog = () => {
    setIsOpenAboutDialog(false);
  };

  return (
    <>
      <Head>
        <title>Knuckle Grid</title>
        <meta name="description" content="The Knuckle Grid game" />
      </Head>
      <div className="w-full text-center p-5 bg-[#ec9093]">
        <span className="text-black">A new grid is posted every day at 9AM EST.</span>
        <span className="text-white"> Click here to be reminded to play tomorrow.</span>

      </div>
      <div className="font-sr flex min-h-screen min-w-max flex-col items-center justify-center bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white">
        <div className="font-display flex w-full items-center justify-between px-4 pt-4 text-xl font-bold uppercase tracking-wide">
          <div className="flex items-center">
            <div className="ml-2 hidden dark:text-white md:inline">
              Knuckle Grid
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="focus-visible:outline-primary -m-1.5 mr-2 rounded-full p-1.5 transition-colors duration-75 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-gray-700"
            >
              Twitter
            </a>
            <button
              className="mx-0.25 focus-visible:outline-primary -m-1.5 rounded-full p-1.5 transition-colors duration-75 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-gray-700 sm:mx-1 md:mx-2"
              onClick={() => setIsOpenSummaryDialog(true)}
            >
              Summary
            </button>
            <button
              className="focus-visible:outline-primary -m-1.5 ml-2 rounded-full p-1.5 transition-colors duration-75 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-gray-700 md:mr-4"
              onClick={() => setIsOpenAboutDialog(true)}
            >
              About
            </button>
          </div>
        </div>
        <main className="w-max flex flex-col items-start justify-center px-5 py-20">
          <div className="grid grid-cols-4 ml-5">
            <p className="grid-item-text"></p>
            <p className="grid-item-text">BRA</p>
            <p className="grid-item-text">USA</p>
            <p className="grid-item-text">WON A CHAMPIONSHIP</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center ">
          <div className="flex items-center justify-center ">
            <div className="grid grid-cols-1 mr-5">
              <p className="grid-item-text">BANTAMWEIGHT</p>
              <p className="grid-item-text">MIDDLEWEIGHT</p>
              <p className="grid-item-text">LIGHTWEIGH</p>
            </div>
            <div className="box-wrapper">
              <button className="grid-item">
                <div className="filled-item">Fighter Name</div>
              </button>
              {Array(8)
                    .fill(null)
                    .map((_, i) => (
                      <button
                        key={i}
                        className="grid-item"
                        onClick={() => {
                          setIsOpenSearchDialog(true);
                        }}
                      >
                    </button>
                    ))}
              {/* <div className="grid-item"></div> */}
            </div>
          </div>
            <div className="text-center mt-5 ">
              <p className=" text-xs sm:text-base font-medium uppercase">You have</p>
              <p className="text-6xl sm:text-8xl font-bold uppercase">7</p>
              <p className=" text-xs sm:text-base font-medium uppercase">Guesses</p>
              <button
                className="text-xs text-blue-600 underline dark:text-blue-400"
                onClick={() => setIsOpenSummaryDialog(true)}
              >
                Show Summary
              </button>        
            </div>
          </div>
          

        </main>












        {/* <main className="mt-6 flex flex-shrink-0 flex-grow flex-col sm:pb-12">
          <div className="mt-4 flex flex-grow items-center">
            <div>
              <div className="flex">
                <div className="flex w-20 items-center justify-center sm:w-36 md:w-48">
                  Logo
                </div>
                <div className="flex h-16 w-24 items-center justify-center sm:h-24 sm:w-36 md:h-36 md:w-48">
                  <div className="font-display flex h-12 items-center px-4 text-center text-sm font-bold uppercase leading-tight text-gray-800 dark:text-white sm:h-20 sm:text-xl md:h-24 md:text-2xl">
                    <div>
                      <div className="leading-tight">BRA</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 w-24 items-center justify-center sm:h-24 sm:w-36 md:h-36 md:w-48">
                  <div className="font-display flex h-12 items-center px-4 text-center text-sm font-bold uppercase leading-tight text-gray-800 dark:text-white sm:h-20 sm:text-xl md:h-24 md:text-2xl">
                    <div>
                      <div className="leading-tight">USA</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 w-24 items-center justify-center sm:h-24 sm:w-36 md:h-36 md:w-48">
                  <div className="font-display flex h-12 items-center px-4 text-center text-sm font-bold uppercase leading-tight text-gray-800 dark:text-white sm:h-20 sm:text-xl md:h-24 md:text-2xl">
                    <div>
                      <div className="leading-tight">Won a Championship</div>
                    </div>
                  </div>
                </div>
                <div className="sm:w-36 md:w-48"></div>
              </div>
              <div className="flex items-center">
                <div>
                  <div className="flex h-24 w-20 items-center justify-center sm:h-36 sm:w-36 md:h-48 md:w-48">
                    <div className="font-display flex h-12 items-center px-4 text-center text-sm font-bold uppercase leading-tight text-gray-800 dark:text-white sm:h-20 sm:text-xl md:h-24 md:text-2xl">
                      <div>
                        <div className="leading-tight">Bantamweight</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-24 w-20 items-center justify-center sm:h-36 sm:w-36 md:h-48 md:w-48">
                    <div className="font-display flex h-12 items-center px-4 text-center text-sm font-bold uppercase leading-tight text-gray-800 dark:text-white sm:h-20 sm:text-xl md:h-24 md:text-2xl">
                      <div>
                        <div className="leading-tight">Middleweight</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-24 w-20 items-center justify-center sm:h-36 sm:w-36 md:h-48 md:w-48">
                    <div className="font-display flex h-12 items-center px-4 text-center text-sm font-bold uppercase leading-tight text-gray-800 dark:text-white sm:h-20 sm:text-xl md:h-24 md:text-2xl">
                      <div>
                        <div className="leading-tight">Lightweight</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 overflow-hidden rounded-xl border bg-white dark:border-gray-950 dark:bg-gray-800">
                  <button className="focus-visible:outline-primary bg-primary flex h-24 w-24 items-center justify-center overflow-hidden border-b border-r bg-green-500 transition-colors duration-75 focus-visible:z-50 focus-visible:outline focus-visible:outline-2 dark:border-gray-950 sm:h-36 sm:w-36 md:h-48 md:w-48">
                    <div className="overflow relative flex h-full w-full items-center justify-center">
                      <div className="text-xxs absolute bottom-0 left-0 right-0 line-clamp-1 bg-gray-900 py-px text-white opacity-95 sm:text-xs md:text-sm">
                        Amanda Nunes
                      </div>
                    </div>
                  </button>
                  {Array(8)
                    .fill(null)
                    .map((_, i) => (
                      <button
                        key={i}
                        className="focus-visible:outline-primary flex h-24 w-24 items-center justify-center overflow-hidden border-b border-r transition-colors duration-75 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 dark:border-gray-950 sm:h-36 sm:w-36 md:h-48 md:w-48"
                        onClick={() => {
                          setIsOpenSearchDialog(true);
                        }}
                      />
                    ))}
                </div>
                <div className="flex h-full justify-center sm:w-36 md:w-48">
                  <div className="hidden sm:block">
                    <div className="text-center text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">
                      Guesses Left
                    </div>
                    <div className="text-center text-7xl font-semibold">
                      <div className="countup-wrap">
                        <span>6</span>
                      </div>
                    </div>
                    <div className="mt-1 flex justify-center">
                      <button
                        className="text-xs text-blue-600 underline dark:text-blue-400"
                        onClick={() => setIsOpenSummaryDialog(true)}
                      >
                        Show Summary
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-8 sm:hidden">
                  <div className="text-center text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">
                    Guesses Left
                  </div>
                  <div className="text-center text-6xl font-semibold sm:text-7xl">
                    <div className="countup-wrap">
                      <span>6</span>
                    </div>
                  </div>
                  <div className="mt-1 flex justify-center">
                    <button
                      className="text-xs text-blue-600 underline dark:text-blue-400"
                      onClick={() => setIsOpenSummaryDialog(true)}
                    >
                      Show Summary
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main> */}
        <footer className="mt-8 flex w-screen flex-shrink-0 justify-center border-t bg-white py-6 text-sm text-gray-900 dark:border-gray-950 dark:bg-gray-800">
          <div className="max-w-5xl px-4 pb-24 text-center sm:px-6">
            <div className="flex flex-wrap justify-center">Footer links</div>
            <div className="mt-4 flex flex-wrap justify-center text-xs">
              More footer links
            </div>
            <div className="mt-4 px-4 text-xs text-gray-400">Notes</div>
          </div>
        </footer>
      </div>
      <SearchDialog
        isOpen={isOpenSearchDialog}
        onClose={handleOncloseSearchDialog}
      />
      <SummaryDialog
        isOpen={isOpenSummaryDialog}
        onClose={handleOncloseSummaryDialog}
      />
      <AboutDialog
        isOpen={isOpenAboutDialog}
        onClose={handleOncloseAboutDialog}
      />
    </>
  );
}
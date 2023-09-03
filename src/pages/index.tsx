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
      <div className="font-sr flex w-full flex-col items-center justify-center bg-[#f3eee7] text-gray-800 dark:bg-gray-900 dark:text-white">
        <div className="font-display flex w-full items-center justify-between px-4 pt-5 font-bold uppercase">
            <a href="#" className="menu-item m-0 mr-5">
              Knuckle Grid
            </a>
          <div className="flex items-center">
            <a  href="#"  className="menu-item">
              Twitter
            </a>
            <button className="menu-item" onClick={() => setIsOpenSummaryDialog(true)}>
              Summary
            </button>
            <button className="menu-item" onClick={() => setIsOpenAboutDialog(true)}>
              About
            </button>
          </div>
        </div>

        <main className="w-full min-h-screen flex flex-col sm:flex-row items-center justify-center px-5 pb-40">
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-4">
              <p className="grid-item-text"></p>
              <p className="grid-item-text">BRA</p>
              <p className="grid-item-text">USA</p>
              <p className="grid-item-text">WON A CHAMPIONSHIP</p>
            </div>
            <div className="flex  items-center justify-center ">
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
            </div>

          </div>
          <div className="text-center mt-5 sm:mt-28 ">
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
          

        </main>

        <footer className="w-full  flex items-center justify-center p-5 bg-white dark:bg-slate-800">
          <div className="menu-item">Footer links</div>
          <div className="menu-item">Footer links</div>
          <div className="menu-item">Footer links</div>
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

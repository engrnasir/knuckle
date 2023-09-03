import { Dialog } from "@headlessui/react";

import CloseButton from "~/design-system/closeButton";

export default function SummaryDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity dark:bg-white   dark:bg-opacity-50" />
      <div className="fixed inset-0 z-10 overflow-y-auto p-10 py-20 md:py-32">
        <Dialog.Panel className="relative w-full md:w-2/3 mx-auto relative overflow-hidden rounded-xl bg-white px-4 py-10 shadow-2xl  transition-all dark:bg-gray-900">
          <CloseButton onClick={onClose} />
          <Dialog.Title className="grid-title">YOUR STATS </Dialog.Title>
          <div className="grid-score-item mb-5">
            <div>
              <p className="grid-score-title">HARDCORE SCORE</p>
              <p className="grid-score">#/#</p>
            </div>
            <div>
              <p className="grid-score-title">GRID SCORE</p>
              <p className="grid-score">#</p>
            </div>
            <div></div>
          </div>
          <Dialog.Title className="grid-title">GLOBAL STATS </Dialog.Title>
          <div className="grid-score-item mb-10">
            <div>
              <p className="grid-score-title">TOTAL GAMES</p>
              <p className="grid-score">#/#</p>
            </div>
            <div>
              <p className="grid-score-title">AVG. GRID SCORE</p>
              <p className="grid-score">#</p>
            </div>
          </div>
          
          <div className="w-full sm:w-max mx-auto text-center text-xs sm:text-sm bg-black text-white dark:bg-white dark:text-black px-3 py-2 rounded-full">
              Notify me about tomorrow&apos;s game
           </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

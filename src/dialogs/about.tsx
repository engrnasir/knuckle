import { Dialog } from "@headlessui/react";

import CloseButton from "~/design-system/closeButton";

// TODO: Create a reusable dialog component so we don't duplicate markup and styles
// Hmm.. Maybe not such a good idea???

// Probably a good solution is to create design system type components that take a children prop
// for e,g, header, body, background etc.
// Then we can compose them together with the headless UI components to create a dialog

export default function AboutDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity dark:bg-[#fff] dark:bg-opacity-70" />
      <div className=" fixed inset-0 z-10 overflow-y-auto p-10 py-20 md:py-32">
        <Dialog.Panel className="w-full md:w-2/3 mx-auto relative overflow-hidden rounded-xl bg-white px-6 py-10 shadow-2xl  transition-all dark:bg-gray-900">
          <CloseButton onClick={onClose}/>
            <Dialog.Title className="text-center text-2xl md:text-3xl mb-2 font-semibold uppercase dark:text-white">
              HOW TO PLAY
            </Dialog.Title>

            <Dialog.Description className="text-center text-xs sm:text-sm font-semibold uppercase text-[#FB0402] dark:text-gray-300 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Dialog.Description>
            <div className="w-full text-center sm:w-max mx-auto bg-black text-white dark:bg-white dark:text-black px-3 py-2 rounded-full">
              Notify me about tomorrow&apos;s game
            </div>
        </Dialog.Panel>
      </div> 
    </Dialog>
  );
}

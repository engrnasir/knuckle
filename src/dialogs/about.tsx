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
      <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity dark:bg-gray-800 dark:bg-opacity-50" />
      <div className="font-sr fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
        <Dialog.Panel className="relative overflow-hidden rounded-xl bg-white px-6 py-4 pb-20 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all dark:bg-gray-900">
          <CloseButton onClick={onClose} />
          <div className="text-center text-2xl font-semibold uppercase dark:text-white">
            <Dialog.Title>About Knuckle Grid</Dialog.Title>
          </div>
          <div className="text-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-300">
            <Dialog.Description>Blah blah...</Dialog.Description>
          </div>
          <div>
            <div className="mt-4">
              <div className="flex items-center justify-center text-center text-sm font-semibold uppercase text-gray-700 dark:text-gray-200 sm:text-base">
                Rules etc. here
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

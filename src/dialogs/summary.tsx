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
      <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity dark:bg-gray-800 dark:bg-opacity-50" />
      <div className="font-sr fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
        <Dialog.Panel className="relative overflow-hidden rounded-xl bg-white px-6 py-4 pb-20 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all dark:bg-gray-900">
          <CloseButton onClick={onClose} />
          <div className="text-center text-2xl font-semibold uppercase dark:text-white">
            <Dialog.Title>Summary</Dialog.Title>
          </div>
          <div className="text-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-300">
            <Dialog.Description>Knuckle Grid</Dialog.Description>
          </div>
          <div>
            <div className="mt-4">
              <div className="flex items-center justify-center text-center text-sm font-semibold uppercase text-gray-700 dark:text-gray-200 sm:text-base">
                Rarity Score{" "}
                <div className="inline-block normal-case">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="ml-1 h-4 w-4 text-gray-500 dark:text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

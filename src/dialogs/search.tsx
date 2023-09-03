import { Dialog } from "@headlessui/react";

export default function SearchDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-[#3d3d3d] bg-opacity-25 transition-opacity dark:bg-gray-900 dark:bg-opacity-25"
        aria-hidden="true"
      />
      <div className=" fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
        <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all dark:divide-gray-800">
          <form>
              <div className="w-full flex items-center ">
                <input className="w-full outline-none py-2 pl-5 pr-12 border-b border-gray-200 text-lg"
                  id="headlessui-combobox-input-:r5:"
                  role="combobox"
                  type="text"
                  aria-expanded="true"
                  aria-autocomplete="list"
                  data-headlessui-state="open"
                  placeholder="Fighter name ..."
                  aria-controls="headlessui-combobox-options-:r7:"
                />
                <svg
                  className="h-4 w-4 -ml-10"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  ></path>
                </svg>  

              </div>
            {/* <input
                className="h-12 w-full border-0 bg-transparent pl-11 pr-9 text-gray-900 placeholder:text-gray-400 focus:ring-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-200 sm:text-sm"
                id="headlessui-combobox-input-:r5:"
                role="combobox"
                type="text"
                aria-expanded="true"
                aria-autocomplete="list"
                data-headlessui-state="open"
                value=""
                aria-controls="headlessui-combobox-options-:r7:"
              />  
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                
              </div> */}
            <ul
              className="z-50 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800 dark:bg-gray-700"
              role="listbox"
              data-headlessui-state="open"
            >
              <li
                // Unused guess
                className="flex cursor-default select-none items-center justify-between px-4 py-2 font-medium"
                role="option"
                aria-selected="false"
                data-headlessui-state=""
              >
                <div className="dark:text-white">Alexander Volkanovski</div>
                <button
                  className="rounded-full bg-black px-2.5 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-green-500 "
                  data-form-type="action"
                >
                  Select
                </button>
              </li>
              <li
                // Already used guess
                className="flex cursor-default select-none items-center justify-between px-4 py-2 font-medium"
                role="option"
                aria-disabled="true"
                aria-selected="false"
                data-headlessui-state="disabled"
              >
                <div className="dark:text-white">Aljamain Sterling</div>
                <div className="text-xs text-gray-500 dark:text-gray-300">
                  Already Used
                </div>
              </li>
              <li
                // Incorrect guess
                className="flex cursor-default select-none items-center justify-between px-4 py-2 font-medium"
                role="option"
                aria-selected="false"
                data-headlessui-state="disabled"
                aria-disabled="true"
              >
                <div className="text-red-600 dark:text-red-400">
                  Amanda Nunes
                </div>
              </li>
            </ul>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

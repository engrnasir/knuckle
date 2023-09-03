export default function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="focus-visible:outline-primary absolute right-1.5 -m-1.5 mr-2 rounded-full p-1.5 transition-colors duration-75 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-gray-300 dark:hover:bg-gray-700"
      // tabindex="0"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

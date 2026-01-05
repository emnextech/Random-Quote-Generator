interface Props {
  onClick: () => void;
}

export default function GenerateButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 active:scale-95 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
    >
      Generate New Quote
    </button>
  );
}

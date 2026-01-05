import type { Quote } from "../types/quote";

interface Props {
  quote: Quote;
}

export default function QuoteCard({ quote }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-2xl w-full text-center transition-all duration-300 hover:shadow-2xl">
      <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed font-medium">
        "{quote.text}"
      </p>
      <span className="text-base md:text-lg text-gray-600 font-light">
        — {quote.author}
      </span>
    </div>
  );
}

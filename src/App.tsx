import QuoteCard from "./components/QuoteCard";
import GenerateButton from "./components/GenerateButton";
import { useRandomQuote } from "./hooks/useRandomQuote";

export default function App() {
  const { quote, generateQuote } = useRandomQuote();

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-8">
      <div className="flex flex-col items-center gap-6 w-full">
        <QuoteCard quote={quote} />
        <GenerateButton onClick={generateQuote} />
      </div>
    </main>
  );
}

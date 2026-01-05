import { useState } from "react";
import type { Quote } from "../types/quote";
import { quotes } from "../assets/quotes";

export function useRandomQuote() {
    const [quote, setQuote] = useState<Quote>(() => {
        return quotes[Math.floor(Math.random() * quotes.length)];
    });

    const generateQuote = () => {
        let randomIndex: number;
        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
        } while (quotes.length > 1 && quotes[randomIndex].text === quote.text);
        setQuote(quotes[randomIndex]);
    };
    return { quote, generateQuote };
}
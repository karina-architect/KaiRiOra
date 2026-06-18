import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";
import { type Lang } from "@/lib/content";

export default function Page({ params }: { params: { lang: Lang } }) {
  return <main><Header lang={params.lang}/><QuoteForm/></main>;
}

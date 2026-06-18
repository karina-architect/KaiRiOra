import Header from "@/components/Header";
import EuropeCoverage from "@/components/EuropeCoverage";
import { type Lang } from "@/lib/content";

export default function Page({ params }: { params: { lang: Lang } }) {
  return <main><Header lang={params.lang}/><EuropeCoverage lang={params.lang}/></main>;
}

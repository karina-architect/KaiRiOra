import Header from "@/components/Header";import SalaryCalculator from "@/components/SalaryCalculator";import QuoteForm from "@/components/QuoteForm";import {type Lang} from "@/lib/content";
export default function Page({params}:{params:{lang:Lang}}){return <main><Header lang={params.lang}/><SalaryCalculator/><QuoteForm/></main>}

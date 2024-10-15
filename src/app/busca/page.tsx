"use client"
import { Header } from "@/components/Header/Header";
import { useSearchParams } from "next/navigation";

export default function Busca(){
    const searchParams = useSearchParams();

    const cep = searchParams.get("cep")

    return <div>
        <Header title={"oi"} userName={"Mariana"} />
        <h1>Busca</h1>
        <p>Pesquisa pelo cep: {cep}</p>
    </div>
}
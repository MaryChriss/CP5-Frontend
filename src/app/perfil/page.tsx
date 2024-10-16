"use client"
import { Header } from "@/components/Header/Header";
import UserContext from "@/context/UserContext";
import { useContext } from "react";
import { useVerifyLogin } from "../../helpers/UseVerifyLogin";

export default function Perfil() {
    useVerifyLogin()
    const { userName } = useContext(UserContext) ?? {};

    return <>
        <Header title="Perfil" userName={userName} />
        <h2>
            <br />Olá, Seja Bem-vindo(a) {userName}</h2>
    </>
}
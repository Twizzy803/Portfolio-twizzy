"use client"
import {AnimasiPatas} from "../components/Animasi";

export default function Banner() {
  return(
    <div className="flex flex-row justify-around bg-tertiary-me p-5 md:text-2xl text-sm font-bold text-primary-me">
        <AnimasiPatas>HTML</AnimasiPatas>
        <AnimasiPatas>CSS</AnimasiPatas>
        <AnimasiPatas>NextJS</AnimasiPatas>
        <AnimasiPatas>Laravel</AnimasiPatas>
        <AnimasiPatas>Flutter</AnimasiPatas>
        <AnimasiPatas>Git</AnimasiPatas>
        <AnimasiPatas>GitHub</AnimasiPatas>
    </div>
  )
}
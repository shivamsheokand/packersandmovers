"use client";
import React from "react";
import HeroSection from "../components/HeroSection";
import { PageContainer } from "../components/ui/page-container";
import ThreeDMarqueePage from "./pages/ThreeDMarqueeDemoSecond";

export default function Home() {
  return (
    <PageContainer className="pt-0">
      <ThreeDMarqueePage />
      <HeroSection />
    </PageContainer>
  );
}

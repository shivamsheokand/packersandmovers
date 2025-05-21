"use client";
import React from "react";
import HeroSection from "../components/HeroSection";
import { PageContainer } from "../components/ui/page-container";
import WorkProcess from "../components/WorkProcess";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import LocationCoverage from "../components/LocationCoverage";
import ThreeDMarqueePage from "./pages/ThreeDMarqueeDemoSecond";

export default function Home() {
  return (
    <PageContainer className="pt-0">
      <ThreeDMarqueePage />
      <HeroSection />
      <WorkProcess />
      <Testimonials />
      <LocationCoverage />
      <BlogSection />
    </PageContainer>
  );
}

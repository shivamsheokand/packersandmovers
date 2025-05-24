"use client";
import React from "react";
import HeroSection from "../components/HeroSection";
import { PageContainer } from "../components/ui/page-container";
import WorkProcess from "../components/WorkProcess";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import LocationCoverage from "../components/LocationCoverage";
import ThreeDMarqueePage from "./pages/ThreeDMarqueeDemoSecond";
import ApiComponent from "./test/page";

export default function Home() {
  return (
    <PageContainer className="pt-0">
      {/* <ApiComponent /> */}
      <ThreeDMarqueePage />
      <HeroSection />
      <WorkProcess />
      <Testimonials />
      <LocationCoverage />
      <BlogSection />
    </PageContainer>
  );
}

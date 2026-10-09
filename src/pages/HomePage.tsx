import React from 'react';
import { IntroAnimation } from '../components/home/IntroAnimation';
import { HeroSection } from '../components/home/HeroSection';
import { BrandManifesto } from '../components/home/BrandManifesto';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { StudioExperience } from '../components/home/StudioExperience';
import { FeaturedTeam } from '../components/home/FeaturedTeam';
import { GalleryTeaser } from '../components/home/GalleryTeaser';
import { FinalCta } from '../components/home/FinalCta';

export const HomePage: React.FC = () => {
  return (
    <>
      <IntroAnimation />
      <HeroSection />
      <BrandManifesto />
      <FeaturedServices />
      <StudioExperience />
      <FeaturedTeam />
      <GalleryTeaser />
      <FinalCta />
    </>
  );
};

import type { ImageMetadata } from "astro";

export type ExperienceMetaData = {
  title: string;
  company?: string;
  location?: string;
  duration?: string;
  description?: string;
  images?: ImageMetadata[];
};

export type Experience = {
  year: number;
  expData: ExperienceMetaData[];
};

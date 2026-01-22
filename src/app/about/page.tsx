import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our studio story and meet our experienced Pilates instructors.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
        About Serene Pilates
      </h1>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Our story and the passionate instructors who bring it to life. Ready for Figma design integration.
      </p>
    </div>
  );
}

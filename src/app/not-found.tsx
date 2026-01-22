import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have taken a peaceful retreat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary text-cream px-8 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/classes"
            className="bg-accent text-cream px-8 py-3 rounded-md font-semibold hover:bg-accent-dark transition-colors"
          >
            Browse Classes
          </Link>
        </div>
      </div>
    </div>
  );
}

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#606C37]/20 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-[#BC6C24] border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
    </div>
  );
}

export function FullPageLoading() {
  return (
    <div className="fixed inset-0 bg-[#FEFAE0] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative inline-block mb-6">
          <div className="w-20 h-20 border-4 border-[#606C37]/20 rounded-full"></div>
          <div className="w-20 h-20 border-4 border-[#BC6C24] border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
        <p className="text-[#606C37] font-light text-lg">Loading...</p>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage({ error = { statusText: "404 Not Found", message: "The page you're looking for doesn't exist" } }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    console.error(error);
  }, [error]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* Main error container */}
      <div
        className={`relative z-10 max-w-2xl w-full transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Error card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-200/50 p-8 md:p-12 text-center relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Animated error icon */}
            <div className="mb-8 relative">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-white text-4xl md:text-5xl font-bold animate-bounce">
                  !
                </div>
              </div>
              <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 mx-auto bg-purple-500/20 rounded-full animate-ping"></div>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent mb-4 animate-pulse">
              Oops!
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Sorry, an unexpected error has occurred.
            </p>

            {/* Error message */}
            <div className="bg-purple-50/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-purple-200/30">
              <p className="text-purple-700 font-medium italic text-sm md:text-base break-words">
                {error?.statusText ||
                  error?.message ||
                  "Unknown error occurred"}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Try Again</span>
              </button>

              <button
                onClick={() => navigate(-1)}
                className="group px-8 py-4 bg-white/80 text-purple-600 font-semibold rounded-2xl border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50/80 transform hover:scale-105 transition-all duration-300"
              >
                Go Back
              </button>
            </div>

            {/* Decorative elements */}
            <div className="mt-12 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>

        {/* Bottom decorative text */}
        <p className="text-center text-purple-400/60 text-sm mt-8 font-medium">
          Don't worry, these things happen sometimes
        </p>
      </div>
    </div>
  );
}
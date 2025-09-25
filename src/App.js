import React from 'react';

const WAITLIST_URL = "https://docs.google.com/forms/d/e/1FAIpQLScCNzSwwgPmUIiZLUOFsRiOtFB73SWvIZy5LkVBiIKKHF2yQA/viewform?usp=dialog";

function App() {
  const currentYear = new Date().getFullYear();

  const handleJoinWaitlist = () => {
    window.open(WAITLIST_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-hippo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="font-silom text-xl sm:text-2xl text-hippo-darkest">
              hippo
            </div>
            <button
              onClick={handleJoinWaitlist}
              className="btn-primary text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3"
              aria-label="Join the waitlist"
            >
              <span className="hidden sm:inline">Join the Waitlist</span>
              <span className="sm:hidden">Join</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-14 sm:pt-16 min-h-screen bg-gradient-to-br from-hippo-light via-hippo-medium to-hippo-dark flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left fade-in order-2 lg:order-1">
              <h1 className="font-silom text-3xl sm:text-4xl md:text-5xl lg:text-display text-hippo-darkest mb-4 sm:mb-6 leading-tight">
                A permanent solution for temporary memorization.
              </h1>
              <p className="text-lg sm:text-xl text-hippo-darker mb-3 sm:mb-4">
                Turn your short-term notes into long term memory
              </p>
              <p className="text-base sm:text-lg text-hippo-dark mb-8 sm:mb-12">
                hippo uses Free+Active Recall combined with spaced repetition to help you retain information permanently.
              </p>
              <button
                onClick={handleJoinWaitlist}
                className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 w-full sm:w-auto"
                aria-label="Join the waitlist"
              >
                Join the Waitlist
              </button>
            </div>
            
            {/* Right Column - Hippo Image */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <div className="w-full max-w-xs sm:max-w-sm p-2 bg-gradient-to-br from-hippo-light/20 via-hippo-medium/30 to-hippo-dark/20 rounded-xl">
                <img 
<<<<<<< HEAD
                  src="/static/images/cute_hippo.png"
=======
                  src="/public/cute_hippo.png"
>>>>>>> cf931c917b68b06142343ddf45db237e39c14949
                  alt="Cute hippo mascot" 
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-hippo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs sm:text-sm text-hippo-dark">
            <div className="font-silom text-base sm:text-lg mb-3 sm:mb-4">
              hippo
            </div>
            <p>© {currentYear} hippo. All rights reserved.</p>
            <p className="mt-1">Privacy-focused learning platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

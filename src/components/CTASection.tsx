
import React from 'react';

const CTASection = () => {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4 text-center max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900">Don't Miss Out!</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Sign up today and start winning exclusive rewards. Join thousands of happy members already participating in our sweepstakes.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-64 w-full"
          />
          <button 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => {
              console.log('Sign Up Free clicked');
            }}
          >
            Sign Up Free
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default CTASection;

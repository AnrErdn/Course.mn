'use client';

import { useEffect } from 'react';
import { animate } from "@motionone/dom";

const companies = [
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Apple", logo: "/logos/apple.svg" },
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Meta", logo: "/logos/meta.svg" },
  { name: "Netflix", logo: "/logos/netflix.svg" },
  { name: "Adobe", logo: "/logos/adobe.svg" },
  { name: "IBM", logo: "/logos/ibm.svg" },
  { name: "Intel", logo: "/logos/intel.svg" },
  { name: "Oracle", logo: "/logos/oracle.svg" },
];

export function TrustedCompanies() {
  useEffect(() => {
    // Create infinite scroll animation for logos
    animate(
      ".company-logos",
      {
        x: ["0%", "-50%"],
      },
      {
        duration: 30,
        repeat: Infinity,
        easing: "linear",
      }
    );
  }, []);

  return (
    <div className="w-full py-16 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 text-lg mb-12">
          Trusted by over 16,000 companies and millions of learners around the world
        </p>
        
        <div className="relative overflow-hidden">
          <div className="company-logos flex items-center space-x-16">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
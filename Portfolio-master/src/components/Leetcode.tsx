import React from 'react';
import { SectionTitle } from './ui/SectionTitle';

export function Leetcode() {
  return (
    <section id="leetcode" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-8">
        <SectionTitle>Leetcode Progress</SectionTitle>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Leetcode Badge Image */}
          <div className="relative w-full h-[25rem] flex justify-center items-center">
            <img
              src="/assets/leetcode-badge.png"  // Ensure this image is in the public folder
              alt="Leetcode Badge"
              className="w-full h-auto max-h-[25rem] object-contain shadow-lg rounded-lg"
            />
          </div>

          {/* Leetcode Journey Text */}
          <div>
            <h3 className="text-center text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              My Leetcode Journey
            </h3>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-4">
              Solving problems on Leetcode has helped me strengthen my Data
              Structures and Algorithms skills. I enjoy tackling challenges that
              push my problem-solving abilities and prepare me for technical
              interviews.
            </p>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300">
              I've completed <strong>500+</strong> problems across a variety of topics,
              including arrays, trees, graphs, and dynamic programming. My goal
              is to keep improving and stay consistent in learning and solving
              new problems daily.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

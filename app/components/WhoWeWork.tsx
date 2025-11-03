'use client';

import Button from './Button';

interface WorkItem {
  icon: string;
  title: string;
  description?: string;
}

const workItems: WorkItem[] = [
  {
    icon: '🎬',
    title: 'Production companies',
  },
  {
    icon: '🎯',
    title: 'Advertising agencies',
  },
  {
    icon: '👥',
    title: 'Independent directors & cinematographers',
  },
  {
    icon: '🎙️',
    title: 'Streaming & social media content teams',
  },
];

export default function WhoWeWork() {
  return (
    <section className="bg-black py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side - Text */}
          <div className="space-y-6">
            <h2 className="heading-xl text-gray-600 uppercase tracking-wider font-bold">
              WHO WE<br />WORK<br />WITH
            </h2>
            <p className="body-lg text-gray-400">
              We support productions of all sizes — from small crews to full-scale cinematic shoots.
            </p>
            <Button variant="primary" size="lg">
              View Our Gear
            </Button>
          </div>

          {/* Right side - Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workItems.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-gray-700 rounded-lg p-6 sm:p-8 hover:border-green-500 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold text-sm sm:text-base leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

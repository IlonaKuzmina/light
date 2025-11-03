'use client';

import { useState } from 'react';
import Button from './Button';
import Image from 'next/image';

interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  specs: {
    label: string;
    value: string;
  }[];
  image: string;
  featured?: boolean;
}

const equipmentData: EquipmentItem[] = [
  {
    id: '1',
    name: 'ARRI ALEXA 35',
    category: 'cameras',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/f1d2dd5451f767c52a1a07f22da10702b01b2298?width=530',
    specs: [
      {
        label: 'Sensor Type',
        value: 'Super 35 format ARRI ALEV 4 CMOS sensor with Bayer pattern color filter array'
      },
      {
        label: 'Sensor Maximum Number of Photosites and Size',
        value: '4608 x 3164 27.99 x 19.22 mm / 1.102 x 0.757" Ø 33.96 mm / 1.337"'
      },
      {
        label: 'Sensor Frame Rates',
        value: '0.75 - 120 fps*'
      },
      {
        label: 'Weight',
        value: '∼2.9 kg / 6.4 lbs (camera body with three antennas and LPL Mount (LBUS))'
      }
    ]
  },
  {
    id: '2',
    name: 'BLACKMAGIC URSA MINI PRO 12K',
    category: 'cameras',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c85a904e47c0c0cb00124b05625540fff7a8eaaa?width=500',
    featured: true,
    specs: [
      {
        label: 'Sensor Type',
        value: 'Super 35 custom sensor (RGBW)'
      },
      {
        label: 'Sensor Maximum Number of Photosites and Size',
        value: '12,288 × 6,480 (12K)'
      },
      {
        label: 'Sensor Frame Rates',
        value: '12K (17:9): up to 60 fps 12K (2.4:1): up to 75 fps 8K / 4K (full sensor): up to 120 fps 4K (Super16 crop): up to 240 fps'
      },
      {
        label: 'Dynamic Range',
        value: '14 stops'
      }
    ]
  },
  {
    id: '3',
    name: 'RED V-RAPTOR XL',
    category: 'cameras',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/658772391c44e301bcd9309ebe5f7b8ecfdf6856?width=500',
    specs: [
      {
        label: 'Sensor Type',
        value: 'V-RAPTOR [X] 8K VV, global shutter CMOS; 35.4 MP'
      },
      {
        label: 'Sensor Maximum Number of Photosites and Size',
        value: '8192 × 4320'
      },
      {
        label: 'Sensor Frame Rates',
        value: 'Up to 120 fps in 8K; 240 fps in 4K mode'
      },
      {
        label: 'Additional  Highlights',
        value: '16-bit REDCODE RAW and/or ProRes recording'
      }
    ]
  },
  {
    id: '4',
    name: 'SONY FX3',
    category: 'cameras',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/0fa5bac42ec2b2731137294e83f9e577f0b89192?width=500',
    specs: [
      {
        label: 'Sensor Type',
        value: 'Full-frame CMOS sensor'
      },
      {
        label: 'Sensor Maximum Number of Photosites and Size',
        value: 'Likely in the order of ~12 MP (for video mode)'
      },
      {
        label: 'Sensor Frame Rates',
        value: 'Up to 120 fps'
      },
      {
        label: 'Weight',
        value: 'Compact body, under ~1 kg'
      }
    ]
  },
  {
    id: '5',
    name: 'BLACKMAGIC POCKET CINEMA CAMERA 6K PRO',
    category: 'cameras',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/0837c5ac211d8e0fcc89866e8a5ee1344bab0870?width=500',
    specs: [
      {
        label: 'Sensor Type',
        value: 'Super 35 / APS-C sized CMOS sensor'
      },
      {
        label: 'Sensor Maximum Number of Photosites and Size',
        value: '6144 × 3456'
      },
      {
        label: 'Sensor Frame Rates',
        value: 'Up to 120 fps in some modes, various frame rates below'
      },
      {
        label: 'Lens Mount',
        value: 'Canon EF mount (native)'
      }
    ]
  },
  {
    id: '6',
    name: 'ARRI ALEXA MINI LF 4.5K',
    category: 'cameras',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/da884a670aebd485015ca7e0c2c338c188352de9?width=500',
    specs: [
      {
        label: 'Sensor Type',
        value: 'Large format ARRI ALEV III (A2X) CMOS sensor with Bayer pattern color filter array'
      },
      {
        label: 'Sensor Maximum Number of Photosites and Size',
        value: '36.70 × 25.54 mm / 1.444 × 1.005″  Ø 44.71 mm / 1.760″'
      },
      {
        label: 'Sensor Frame Rates',
        value: '0.75 – 90 fps'
      },
      {
        label: 'Weight',
        value: '~2.6 kg / ~5.7 lbs (camera body with LPL mount)'
      }
    ]
  },
  {
    id: '7',
    name: 'CANON C70',
    category: 'cameras',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/e3eee98875b0a71a15627e363943d2de968f2785?width=500',
    specs: [
      {
        label: 'Sensor Type',
        value: 'Super 35 DGO (Dual Gain Output) sensor'
      },
      {
        label: 'Sensor Frame Rates',
        value: 'Up to ~120 fps'
      },
      {
        label: 'Other',
        value: 'The C70 is known for its compact body, internal ND filters, RF lens mount, and strong low-light performance.'
      }
    ]
  },
  {
    id: '8',
    name: 'DJI RONIN 4D',
    category: 'cameras',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/966c5b58dbc2ed7125a505efd823965baecf386d?width=500',
    specs: [
      {
        label: 'Camera & Sensor',
        value: 'Cinema 8K sensor (in 4D rig) with integrated stabilization and lens mount system'
      },
      {
        label: 'Unique Feature',
        value: 'Z-axis motion control, 4-axis stabilization, active focus & direct lens control'
      },
      {
        label: 'Other',
        value: 'Used mostly for immersive, stabilized cinematography in a compact rig.'
      }
    ]
  }
];

const categories = [
  { id: 'cameras', label: 'Cameras', count: 13 },
  { id: 'lenses', label: 'Lenses', count: 23 },
  { id: 'lighting', label: 'Lighting & Grip', count: 15 },
  { id: 'sound', label: 'Sound & Monitoring', count: 9 },
  { id: 'accessories', label: 'Accessories & Support Gear', count: 12 }
];

export default function Equipment() {
  const [activeCategory, setActiveCategory] = useState('cameras');

  const filteredEquipment = equipmentData.filter(item => item.category === activeCategory);

  return (
    <section 
      className="py-20 sm:py-32 border-t-4 border-b-4"
      style={{ 
        backgroundColor: '#0D0C0F',
        borderColor: '#211F27'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 sm:mb-16">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-normal"
            style={{ color: '#211F27' }}
          >
            EQUIPMENT
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`h-10 px-4 rounded-full text-base font-normal transition-all ${
                activeCategory === category.id
                  ? 'text-black'
                  : 'border text-white/80 hover:text-white'
              }`}
              style={{
                backgroundColor: activeCategory === category.id ? '#CAE7EA' : 'transparent',
                borderColor: activeCategory === category.id ? 'transparent' : 'rgba(202, 231, 234, 0.2)',
              }}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredEquipment.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl lg:rounded-3xl border"
                style={{
                  backgroundColor: item.featured ? '#211F27' : 'transparent',
                  borderColor: '#211F27'
                }}
              >
                {/* Title */}
                <h3 
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-center uppercase"
                  style={{ color: '#CAE7EA' }}
                >
                  {item.name}
                </h3>

                {/* Image */}
                <div className="w-full aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Specs */}
                <div className="flex flex-col gap-6 sm:gap-8 w-full">
                  {item.specs.map((spec, idx) => (
                    <div key={idx} className="flex gap-4 sm:gap-6 lg:gap-8">
                      <div 
                        className="flex-1 text-sm font-normal"
                        style={{ color: '#706C7B' }}
                      >
                        {spec.label}
                      </div>
                      <div 
                        className="flex-1 text-sm font-normal"
                        style={{ color: '#CAE7EA' }}
                      >
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 lg:gap-6 w-full">
                  <Button variant="ghost" size="sm" className="flex-1 !text-sm !h-12 !px-4 !font-bold">
                    Request Pricing
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 !text-sm !h-12 !px-4 !font-normal">
                    Technical Data
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          {filteredEquipment.length > 4 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredEquipment.slice(4, 8).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl lg:rounded-3xl border"
                  style={{
                    backgroundColor: item.featured ? '#211F27' : 'transparent',
                    borderColor: '#211F27'
                  }}
                >
                  {/* Title */}
                  <h3 
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-center uppercase"
                    style={{ color: '#CAE7EA' }}
                  >
                    {item.name}
                  </h3>

                  {/* Image */}
                  <div className="w-full aspect-square relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Specs */}
                  <div className="flex flex-col gap-6 sm:gap-8 w-full">
                    {item.specs.map((spec, idx) => (
                      <div key={idx} className="flex gap-4 sm:gap-6 lg:gap-8">
                        <div 
                          className="flex-1 text-sm font-normal"
                          style={{ color: '#706C7B' }}
                        >
                          {spec.label}
                        </div>
                        <div 
                          className="flex-1 text-sm font-normal"
                          style={{ color: '#CAE7EA' }}
                        >
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 lg:gap-6 w-full">
                    <Button variant="ghost" size="sm" className="flex-1 !text-sm !h-12 !px-4 !font-bold">
                      Request Pricing
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 !text-sm !h-12 !px-4 !font-normal">
                      Technical Data
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <Button 
            variant="secondary" 
            size="lg"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L12 21M12 21L5 14M12 21L19 14" stroke="#51FF48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            Show more
          </Button>
        </div>
      </div>
    </section>
  );
}

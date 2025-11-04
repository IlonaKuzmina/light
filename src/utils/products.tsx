export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  specs?: {
    label: string;
    value: string;
  }[];
  image: string;
  featured?: boolean;
}

export const categories = [
  { id: "cameras", label: "Cameras", count: 13 },
  { id: "lenses", label: "Lenses", count: 23 },
  { id: "lighting", label: "Lighting & Grip", count: 15 },
  { id: "sound", label: "Sound & Monitoring", count: 9 },
  { id: "accessories", label: "Accessories & Support Gear", count: 12 },
];

export const equipmentData: EquipmentItem[] = [
  {
    id: "1",
    name: "ARRI ALEXA 35",
    category: "Cameras",
    image: "/cameras/img_1.png",
    specs: [
      {
        label: "Sensor Type",
        value:
          "Super 35 format ARRI ALEV 4 CMOS sensor with Bayer pattern color filter array",
      },
      {
        label: "Sensor Maximum Number of Photosites and Size",
        value:
          '4608 x 3164 27.99 x 19.22 mm / 1.102 x 0.757" Ø 33.96 mm / 1.337"',
      },
      {
        label: "Sensor Frame Rates",
        value: "0.75 - 120 fps*",
      },
      {
        label: "Weight",
        value:
          "∼2.9 kg / 6.4 lbs (camera body with three antennas and LPL Mount (LBUS))",
      },
    ],
  },
  {
    id: "2",
    name: "BLACKMAGIC URSA MINI PRO 12K",
    category: "Cameras",
    image: "/cameras/img_2.png",
    featured: true,
    specs: [
      {
        label: "Sensor Type",
        value: "Super 35 custom sensor (RGBW)",
      },
      {
        label: "Sensor Maximum Number of Photosites and Size",
        value: "12,288 × 6,480 (12K)",
      },
      {
        label: "Sensor Frame Rates",
        value:
          "12K (17:9): up to 60 fps 12K (2.4:1): up to 75 fps 8K / 4K (full sensor): up to 120 fps 4K (Super16 crop): up to 240 fps",
      },
      {
        label: "Dynamic Range",
        value: "14 stops",
      },
    ],
  },
  {
    id: "3",
    name: "RED V-RAPTOR XL",
    category: "Cameras",
    image: "/cameras/img_3.png",
    specs: [
      {
        label: "Sensor Type",
        value: "V-RAPTOR [X] 8K VV, global shutter CMOS; 35.4 MP",
      },
      {
        label: "Sensor Maximum Number of Photosites and Size",
        value: "8192 × 4320",
      },
      {
        label: "Sensor Frame Rates",
        value: "Up to 120 fps in 8K; 240 fps in 4K mode",
      },
      {
        label: "Additional  Highlights",
        value: "16-bit REDCODE RAW and/or ProRes recording",
      },
    ],
  },
  {
    id: "4",
    name: "SONY FX3",
    category: "Cameras",
    image: "/cameras/img_4.png",
    specs: [
      {
        label: "Sensor Type",
        value: "Full-frame CMOS sensor",
      },
      {
        label: "Sensor Maximum Number of Photosites and Size",
        value: "Likely in the order of ~12 MP (for video mode)",
      },
      {
        label: "Sensor Frame Rates",
        value: "Up to 120 fps",
      },
      {
        label: "Weight",
        value: "Compact body, under ~1 kg",
      },
    ],
  },
  {
    id: "5",
    name: "BLACKMAGIC POCKET CINEMA CAMERA 6K PRO",
    category: "Cameras",
    image: "/cameras/img_1.png",
    specs: [
      {
        label: "Sensor Type",
        value: "Super 35 / APS-C sized CMOS sensor",
      },
      {
        label: "Sensor Maximum Number of Photosites and Size",
        value: "6144 × 3456",
      },
      {
        label: "Sensor Frame Rates",
        value: "Up to 120 fps in some modes, various frame rates below",
      },
      {
        label: "Lens Mount",
        value: "Canon EF mount (native)",
      },
    ],
  },
  {
    id: "6",
    name: "ARRI ALEXA MINI LF 4.5K",
    category: "Cameras",
    image: "/cameras/img_1.png",
    specs: [
      {
        label: "Sensor Type",
        value:
          "Large format ARRI ALEV III (A2X) CMOS sensor with Bayer pattern color filter array",
      },
      {
        label: "Sensor Maximum Number of Photosites and Size",
        value: "36.70 × 25.54 mm / 1.444 × 1.005″  Ø 44.71 mm / 1.760″",
      },
      {
        label: "Sensor Frame Rates",
        value: "0.75 – 90 fps",
      },
      {
        label: "Weight",
        value: "~2.6 kg / ~5.7 lbs (camera body with LPL mount)",
      },
    ],
  },
  {
    id: "7",
    name: "CANON C70",
    category: "Cameras",
    image: "/cameras/img_1.png",
    specs: [
      {
        label: "Sensor Type",
        value: "Super 35 DGO (Dual Gain Output) sensor",
      },
      {
        label: "Sensor Frame Rates",
        value: "Up to ~120 fps",
      },
      {
        label: "Other",
        value:
          "The C70 is known for its compact body, internal ND filters, RF lens mount, and strong low-light performance.",
      },
    ],
  },
  {
    id: "8",
    name: "DJI RONIN 4D",
    category: "Cameras",
    image: "/cameras/img_1.png",
    specs: [
      {
        label: "Camera & Sensor",
        value:
          "Cinema 8K sensor (in 4D rig) with integrated stabilization and lens mount system",
      },
      {
        label: "Unique Feature",
        value:
          "Z-axis motion control, 4-axis stabilization, active focus & direct lens control",
      },
      {
        label: "Other",
        value:
          "Used mostly for immersive, stabilized cinematography in a compact rig.",
      },
    ],
  },
  {
    id: "9",
    name: "RED RANGER HELIUM 8K",
    category: "Cameras",
    image: "/images/redHelium8k.png",
    specs: [
      { label: "Sensor Type", value: "HELIUM 35.4 megapixel CMOS" },
      { label: "Sensor Resolution", value: "8192 × 4320" },
      { label: "Frame Rates", value: "60 fps at 8K full format" },
      { label: "Weight", value: "3.5–3.8 kg / 7.7–8.4 lbs" },
    ],
  },
  {
    id: "10",
    name: "RED MONSTRO 8K VV",
    category: "Cameras",
    image: "/images/redMonstro8k.png",
    specs: [
      { label: "Sensor Type", value: "Full-frame 8K VV CMOS" },
      { label: "Sensor Resolution", value: "8192 × 4320" },
      { label: "Frame Rates", value: "Up to 60 fps at 8K full resolution" },
      { label: "Weight", value: "1.9 kg / 3.8 lbs" },
    ],
  },
  {
    id: "11",
    name: "SONY FX6",
    category: "Cameras",
    image: "/images/sonyFx6.png",
    specs: [
      { label: "Sensor Type", value: "Full-frame Exmor R CMOS" },
      { label: "Sensor Resolution", value: "4K 10.2MP" },
      { label: "Frame Rates", value: "Up to 120 fps 4K (10-bit)" },
      { label: "Weight", value: "0.89 kg (body only)" },
    ],
  },
  {
    id: "12",
    name: "SONY FX9",
    category: "Cameras",
    image: "/images/sonyFx9.png",
    specs: [
      { label: "Sensor Type", value: "Full-frame 6K Exmor R CMOS" },
      {
        label: "Unique Feature",
        value: "4-axis stabilization, Dual Base ISO, fast hybrid AF",
      },
    ],
  },
  {
    id: "13",
    name: "CANON EOS C300 MARK III",
    category: "Cameras",
    image: "/images/canonC300m3.png",
    specs: [
      { label: "Sensor Type", value: "Super 35mm Dual Gain Output CMOS" },
      { label: "Sensor Resolution", value: "4096 × 2160 (4K DCI)" },
      { label: "Frame Rates", value: "Up to 120 fps" },
      { label: "Lens Mount", value: "EF mount" },
      { label: "Weight", value: "1.77 kg (body)" },
    ],
  },
  {
    id: "14",
    name: "CANON EOS R5 C",
    category: "Cameras",
    image: "/images/canonRsC.png",
    specs: [
      { label: "Sensor Type", value: "Full-frame CMOS (Dual Pixel AF)" },
      { label: "Sensor Resolution", value: "8192 × 4320 (8K DCI)" },
      { label: "Frame Rates", value: "Up to 120 fps (4K)" },
      { label: "Weight", value: "680 g (body only)" },
    ],
  },
  {
    id: "15",
    name: "PANASONIC EVA1",
    category: "Cameras",
    image: "/images/panasonicEva1.png",
    specs: [
      { label: "Sensor Type", value: "Super 35mm CMOS" },
      { label: "Sensor Resolution", value: "5720 × 3016 (approx. 5.7K)" },
      { label: "Frame Rates", value: "Up to 240 fps" },
      { label: "Weight", value: "1.2 kg (body only)" },
    ],
  },
  {
    id: "16",
    name: "PANASONIC LUMIX DC–S5 II",
    category: "Cameras",
    image: "/images/lumixS5ii.png",
    specs: [
      { label: "Sensor Type", value: "Full-frame CMOS, 6.2K 3:2" },
      { label: "Sensor Resolution", value: "6000 × 4000 (24.2 MP effective)" },
      { label: "Frame Rates", value: "4K/120p, 6K/30p" },
      { label: "Weight", value: "740 g (body only)" },
    ],
  },
  // --- LENSES ---
  {
    id: "17",
    name: "ARRI Signature Primes",
    category: "Lenses",
    image: "/images/lenses/arri-signature-primes.jpg",
    specs: [
      { label: "Mount", value: "LPL" },
      { label: "Focal Length Range", value: "12mm – 280mm" },
      { label: "T-Stop", value: "T1.8 – T2.8" },
      { label: "Coverage", value: "Full Frame / Large Format" },
      {
        label: "Special Feature",
        value: "Magnetic rear filter holder, soft skin tones",
      },
    ],
  },
  {
    id: "18",
    name: "Cooke S4/i & Panchro/i Classics",
    category: "Lenses",
    image: "/images/lenses/cooke-s4i.jpg",
    specs: [
      { label: "Mount", value: "PL" },
      { label: "Focal Length Range", value: "12mm – 300mm" },
      { label: "T-Stop", value: "T2 – T2.8" },
      { label: "Coverage", value: "Super 35" },
      { label: "Special Feature", value: "Classic Cooke Look, /i metadata" },
    ],
  },
  {
    id: "19",
    name: "Zeiss Supreme Primes / CP.3 / Ultra Primes / Master Primes",
    category: "Lenses",
    image: "/images/lenses/zeiss-supreme-primes.jpg",
    specs: [
      { label: "Mount", value: "PL / E / EF" },
      { label: "Focal Length Range", value: "15mm – 200mm" },
      { label: "T-Stop", value: "T1.3 – T2.1" },
      { label: "Coverage", value: "Full Frame & Super 35" },
      {
        label: "Special Feature",
        value: "Color-matched sets across Zeiss lines",
      },
    ],
  },
  {
    id: "20",
    name: "Canon CN-E / L-Series / K35 Vintage",
    category: "Lenses",
    image: "/images/lenses/canon-cne.jpg",
    specs: [
      { label: "Mount", value: "EF / PL" },
      { label: "Focal Length Range", value: "14mm – 135mm" },
      { label: "T-Stop", value: "T1.3 – T2.8" },
      { label: "Coverage", value: "Full Frame" },
      { label: "Special Feature", value: "Vintage flare and warm skin tones" },
    ],
  },
  {
    id: "21",
    name: "Sigma Cine Primes / Zooms",
    category: "Lenses",
    image: "/images/lenses/sigma-cine.jpg",
    specs: [
      { label: "Mount", value: "PL / EF / E" },
      {
        label: "Focal Length Range",
        value: "14mm – 135mm (Primes) / 18–35mm, 50–100mm (Zooms)",
      },
      { label: "T-Stop", value: "T1.5 – T3" },
      { label: "Coverage", value: "Full Frame" },
      {
        label: "Special Feature",
        value: "Compact cine design, consistent color",
      },
    ],
  },
  {
    id: "22",
    name: "DZOFilm, Meike, Atlas Orion Anamorphics",
    category: "Lenses",
    image: "/images/lenses/atlas-orion.jpg",
    specs: [
      { label: "Mount", value: "PL / EF" },
      { label: "Focal Length Range", value: "32mm – 100mm" },
      { label: "T-Stop", value: "T2 – T2.8" },
      { label: "Coverage", value: "Super 35 / Full Frame" },
      { label: "Special Feature", value: "Anamorphic flares and oval bokeh" },
    ],
  },
  {
    id: "23",
    name: "Angénieux EZ / Optimo Zooms",
    category: "Lenses",
    image: "/images/lenses/angenieux-optimo.jpg",
    specs: [
      { label: "Mount", value: "PL / EF" },
      { label: "Zoom Range", value: "15–40mm / 45–135mm / 24–290mm" },
      { label: "T-Stop", value: "T2 – T2.8" },
      { label: "Coverage", value: "Super 35 / Full Frame (EZ series)" },
      { label: "Special Feature", value: "Cinematic look with soft roll-off" },
    ],
  },
  {
    id: "24",
    name: "Laowa, Sirui, Viltrox, Fujinon MK / Cabrio",
    category: "Lenses",
    image: "/images/lenses/laowa-fujinon.jpg",
    specs: [
      { label: "Mount", value: "PL / E / EF" },
      { label: "Focal Length Range", value: "9mm – 135mm" },
      { label: "T-Stop", value: "T1.5 – T3.5" },
      { label: "Coverage", value: "Super 35 / APS-C / Full Frame" },
      {
        label: "Special Feature",
        value: "Affordable cine options with sharp performance",
      },
    ],
  },

  // --- LIGHTING & GRIP ---
  {
    id: "25",
    name: "ARRI Skypanel S60/S120 / Orbiter / M18 / M40",
    category: "Lighting & Grip",
    image: "/images/lighting/arri-skypanel.jpg",
    specs: [
      { label: "Type", value: "LED & HMI Lighting Systems" },
      { label: "Power Output", value: "575W – 4000W (varies by model)" },
      { label: "Color Temperature", value: "2800K – 10000K (variable)" },
      {
        label: "Special Feature",
        value: "Industry standard, full RGB control, high CRI",
      },
    ],
  },
  {
    id: "26",
    name: "Aputure 600D / 600X / 1200D / Nova P600C",
    category: "Lighting & Grip",
    image: "/images/lighting/aputure-600d.jpg",
    specs: [
      { label: "Type", value: "LED COB & Panel Lights" },
      { label: "Power Output", value: "600W – 1200W" },
      { label: "Color Temperature", value: "2700K – 6500K (Bi-color / RGB)" },
      {
        label: "Special Feature",
        value: "Lightweight, app control via Sidus Link",
      },
    ],
  },
  {
    id: "27",
    name: "Nanlite Forza / Pavotube / Mixpanel Series",
    category: "Lighting & Grip",
    image: "/images/lighting/nanlite-forza.jpg",
    specs: [
      { label: "Type", value: "LED Tube & Panel Lights" },
      { label: "Power Output", value: "60W – 500W" },
      { label: "Color Temperature", value: "2700K – 7500K" },
      {
        label: "Special Feature",
        value: "Portable, battery-powered options, RGBWW",
      },
    ],
  },
  {
    id: "28",
    name: "Godox VL / SL / UL Series",
    category: "Lighting & Grip",
    image: "/images/lighting/godox-vl.jpg",
    specs: [
      { label: "Type", value: "LED Video Lights" },
      { label: "Power Output", value: "150W – 300W" },
      {
        label: "Color Temperature",
        value: "5600K (Daylight) / 2800–6500K (Bi-color)",
      },
      {
        label: "Special Feature",
        value: "Affordable, quiet fanless UL series",
      },
    ],
  },
  {
    id: "29",
    name: "Astera Titan & Helios Tubes",
    category: "Lighting & Grip",
    image: "/images/lighting/astera-titan.jpg",
    specs: [
      { label: "Type", value: "Wireless RGB Tubes" },
      { label: "Battery Life", value: "Up to 20 hours" },
      { label: "Color Range", value: "RGB, Tungsten, Daylight" },
      {
        label: "Special Feature",
        value: "DMX / CRMX / App control, waterproof",
      },
    ],
  },
  {
    id: "30",
    name: "Grip Equipment & Accessories",
    category: "Lighting & Grip",
    image: "/images/lighting/grip-gear.jpg",
    specs: [
      {
        label: "Includes",
        value: "C-stands, flags, scrims, frames, gels, diffusers",
      },
      {
        label: "Additional",
        value: "Generators, dimmers, and distribution boxes",
      },
      {
        label: "Grip Tools",
        value: "Sliders, jibs, dollies, tripods, rigs, hi-hats",
      },
      {
        label: "Special Feature",
        value: "Full on-set support gear for all productions",
      },
    ],
  },

  // --- SOUND & MONITORING ---
  {
    id: "31",
    name: "Sound Devices / Zoom F8 / MixPre Series",
    category: "Sound & Monitoring",
    image: "/images/sound/sound-devices.jpg",
    specs: [
      { label: "Type", value: "Field Recorders & Mixers" },
      { label: "Inputs", value: "8–12 XLR/TRS combo" },
      { label: "Recording Format", value: "24-bit / 192kHz WAV, polyphonic" },
      { label: "Special Feature", value: "Timecode sync, dual SD recording" },
    ],
  },
  {
    id: "32",
    name: "Sennheiser / Rode / Deity / DPA Microphones",
    category: "Sound & Monitoring",
    image: "/images/sound/sennheiser-mic.jpg",
    specs: [
      { label: "Type", value: "Shotgun & Lavalier Microphones" },
      { label: "Polar Pattern", value: "Cardioid / Supercardioid / Omni" },
      { label: "Connectivity", value: "XLR / 3.5mm / Wireless" },
      {
        label: "Special Feature",
        value: "Professional dialogue and ambient capture",
      },
    ],
  },
  {
    id: "33",
    name: "Boom Poles, Blimps & Wireless Kits",
    category: "Sound & Monitoring",
    image: "/images/sound/boom-pole.jpg",
    specs: [
      {
        label: "Included Gear",
        value: "Boom poles, shock mounts, wind protection",
      },
      { label: "Wireless Systems", value: "Rode, Sennheiser, Deity" },
      {
        label: "Special Feature",
        value: "Lightweight carbon poles, pro wind isolation",
      },
    ],
  },
  {
    id: "34",
    name: "SmallHD / Atomos / Blackmagic Monitors",
    category: "Sound & Monitoring",
    image: "/images/sound/smallhd.jpg",
    specs: [
      { label: "Screen Size", value: '5" – 7"' },
      { label: "Resolution", value: "Full HD / 4K (depending on model)" },
      { label: "Inputs", value: "HDMI / SDI" },
      {
        label: "Special Feature",
        value: "Touchscreen control, LUT preview, HDR",
      },
    ],
  },
  {
    id: "35",
    name: "Teradek Wireless Video Systems",
    category: "Sound & Monitoring",
    image: "/images/sound/teradek.jpg",
    specs: [
      { label: "Type", value: "Wireless Video Transmitters & Receivers" },
      { label: "Range", value: "Up to 1000 ft (300m)" },
      { label: "Latency", value: "< 1ms" },
      { label: "Special Feature", value: "HD/4K zero-delay video monitoring" },
    ],
  },
  {
    id: "36",
    name: "Timecode Systems (Tentacle Sync / Ambient)",
    category: "Sound & Monitoring",
    image: "/images/sound/tentacle-sync.jpg",
    specs: [
      { label: "Type", value: "Timecode Generators & Sync Devices" },
      { label: "Compatibility", value: "Camera / Audio recorders / Monitors" },
      {
        label: "Special Feature",
        value: "Multi-device synchronization for post",
      },
    ],
  },

  // --- ACCESSORIES & SUPPORT GEAR ---
  {
    id: "37",
    name: "Rigging Kits, Shoulder Mounts, Rails, Cages",
    category: "Accessories & Support Gear",
    image: "/images/accessories/rigging-kit.jpg",
    specs: [
      { label: "Type", value: "Camera Rigging Systems" },
      { label: "Compatibility", value: "DSLR / Cinema / Mirrorless" },
      {
        label: "Special Feature",
        value: "Modular design for flexible configurations",
      },
    ],
  },
  {
    id: "38",
    name: "Batteries & Power Systems (V-Mount / Gold / B-Mount)",
    category: "Accessories & Support Gear",
    image: "/images/accessories/vmount-battery.jpg",
    specs: [
      { label: "Type", value: "Power Solutions" },
      { label: "Output", value: "14.4V – 26V" },
      {
        label: "Special Feature",
        value: "Swappable packs with D-Tap & USB-C outputs",
      },
    ],
  },
  {
    id: "39",
    name: "Memory Cards & Media Readers",
    category: "Accessories & Support Gear",
    image: "/images/accessories/memory-cards.jpg",
    specs: [
      { label: "Type", value: "CFexpress / CFast 2.0 / SDXC" },
      { label: "Capacity", value: "64GB – 2TB" },
      {
        label: "Special Feature",
        value: "High-speed read/write for 8K workflows",
      },
    ],
  },
  {
    id: "40",
    name: "Gimbals: DJI RS3 Pro / Ronin 2 / Freefly Movi Pro",
    category: "Accessories & Support Gear",
    image: "/images/accessories/dji-ronin.jpg",
    specs: [
      { label: "Type", value: "3-Axis Camera Stabilizers" },
      { label: "Payload", value: "Up to 12kg" },
      {
        label: "Special Feature",
        value: "Smooth cinematic motion, wireless control",
      },
    ],
  },
  {
    id: "41",
    name: "Drones: DJI Mavic 3 Cine / Inspire 2 / Air 3",
    category: "Accessories & Support Gear",
    image: "/images/accessories/dji-inspire2.jpg",
    specs: [
      { label: "Type", value: "Aerial Cinematography Drones" },
      { label: "Camera Resolution", value: "5.1K – 8K (depending on model)" },
      {
        label: "Special Feature",
        value: "ProRes recording, long flight times",
      },
    ],
  },
  {
    id: "42",
    name: "Cases, Carts & Transport Equipment",
    category: "Accessories & Support Gear",
    image: "/images/accessories/case.jpg",
    specs: [
      {
        label: "Includes",
        value: "Pelican / Peli Air cases, on-set carts, prep stations",
      },
      {
        label: "Special Feature",
        value: "Durable, modular transport for travel and production",
      },
    ],
  },
];

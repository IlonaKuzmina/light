"use client";

import { EquipmentItem } from "@/src/utils/products";

interface EquipmentModalProps {
  item: EquipmentItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const EquipmentModal = ({ item, isOpen, onClose }: EquipmentModalProps) => {
  if (!isOpen || !item) return null;

  return (
    <div
      className="bg-card/90 fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="border-dark relative max-h-[90vh] w-11/12 overflow-y-auto rounded-[20px] border-2 bg-[#0D0C0F] p-8 sm:max-w-10/12 md:max-w-[50%]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-3"
          >
            <path
              d="M1 1L17 17"
              stroke="#6D6D6D"
              strokeWidth="2"
              stroke-linecap="round"
            />
            <path
              d="M17 1L1 17"
              stroke="#6D6D6D"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <h2 className="text-light mb-2 text-center text-xl font-bold">
          {item.name}
        </h2>
        <p className="text-light mb-8 text-center text-base">
          Technical Specifications
        </p>

        <div className="space-y-4">
          {item.specs &&
            item.specs.map((spec, i) => (
              <div
                key={i}
                className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4"
              >
                <p className="text-secondary text-sm">{spec.label}</p>
                <p className="text-light text-sm font-medium uppercase">
                  {spec.value}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default EquipmentModal;

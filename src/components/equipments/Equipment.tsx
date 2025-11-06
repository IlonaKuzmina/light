"use client";

import { useEffect, useState } from "react";

import { equipmentData } from "../../utils/products";
import Button from "../ui/Button";
import EquipmentCard from "./EquipmentCard";
import { useRouter, useSearchParams } from "next/navigation";
import EquipmentCardSkeleton from "./EquipmentCardSkeleton";

const Equipment = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categories = Array.from(
    new Set(equipmentData.map((item) => item.category)),
  );
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams, categories]);

  const filteredEquipment = equipmentData.filter(
    (item) => item.category === activeCategory,
  );

  const visibleEquipment = filteredEquipment.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const handleCategoryClick = (category: string) => {
    if (category === activeCategory) return; 
    setLoading(true);

    setTimeout(() => {
      setActiveCategory(category);
      setVisibleCount(8);
      setLoading(false);
      router.replace(`/?category=${encodeURIComponent(category)}#equipment`);
    }, 1500); 
  };

  return (
    <section
      id="equipment"
      className="section-top-padding border-dark border-t-3 border-b-3 bg-[#0D0C0F]"
    >
      <div className="container">
        <div className="mb-12 sm:mb-16">
          <h2 className="section-title">EQUIPMENT</h2>
        </div>

        <div className="mb-12 flex flex-wrap gap-4 sm:mb-16 sm:gap-6">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`hover:bg-light h-10 cursor-pointer rounded-full px-4 text-base font-normal transition-all duration-300 hover:text-[#070707] ${
                activeCategory === category
                  ? "bg-light text-[#070707]"
                  : "text-light/80 border bg-transparent"
              }`}
            >
              {category} (
              {
                equipmentData.filter((item) => item.category === category)
                  .length
              }
              )
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <EquipmentCardSkeleton key={i} />
                ))
              : visibleEquipment.map((item) => (
                  <EquipmentCard key={item.id} item={item} />
                ))}
          </div>
        </div>

        {visibleCount < filteredEquipment.length && (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Button
              variant="secondary"
              size="lg"
              onClick={handleShowMore}
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3L12 21M12 21L5 14M12 21L19 14"
                    stroke="#51FF48"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              Show more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Equipment;

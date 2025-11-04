import { EquipmentItem } from "@/src/utils/products";
import Image from "next/image";
import { useState } from "react";
import Button from "../ui/Button";
import EquipmentModal from "./EquipmentModal";

const EquipmentCard = ({ item }: { item: EquipmentItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="border-dark hover:bg-dark group relative flex flex-col gap-8 rounded-[20px] border-2 bg-[#0D0C0F] p-6 sm:p-8 duration-300">
        <h3 className="text-light mb-2 text-center text-xl font-bold">
          {item.name}
        </h3>

        <div className="relative mx-auto size-[180px] sm:size-[200px] lg:size-[265px]">
          <Image
            src={`/products${item.image}`}
            alt={item.name}
            width={265}
            height={250}
            className="relative z-10 block h-auto w-full"
          />

          <div className="img-shadow absolute right-0 bottom-4 left-0 z-0 mx-auto opacity-0 duration-300 group-hover:opacity-100"></div>
        </div>

        <div className="space-y-8">
          {item.specs &&
            item.specs.map((spec, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                <p className="text-secondary text-base">{spec.label}</p>
                <p className="text-light text-base font-medium uppercase">
                  {spec.value}
                </p>
              </div>
            ))}
        </div>

        <div className="mt-auto flex flex-col sm:flex-row gap-6">
          <Button
            variant="ghost"
            size="sm"
            link="mailto:info@lightshift.com"
            className="flex-1 !text-sm !capitalize"
          >
            Request Pricing
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(true)}
            className="flex-1 !text-sm !capitalize"
          >
            Technical Data
          </Button>
        </div>
      </div>

      <EquipmentModal
        item={item}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default EquipmentCard;

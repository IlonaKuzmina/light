const EquipmentCardSkeleton = () => {
  return (
    <div className="border-dark group relative flex animate-pulse flex-col gap-8 rounded-[20px] border-2 bg-[#0D0C0F] p-6">
      <div className="mx-auto h-6 w-2/4 rounded bg-gray-800"></div>

      <div className="relative mx-auto size-[180px] rounded bg-gray-800 sm:size-[200px] lg:size-[235px]"></div>

      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4"
          >
            <div className="h-4 w-2/3 rounded bg-gray-700"></div>
            <div className="h-4 w-1/3 rounded bg-gray-600"></div>
          </div>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-6 sm:flex-row">
        <div className="h-10 flex-1 rounded bg-gray-700"></div>
        <div className="h-10 flex-1 rounded bg-gray-600"></div>
      </div>
    </div>
  );
};

export default EquipmentCardSkeleton;

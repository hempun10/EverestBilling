import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="w-full h-full p-8 mt-32">
      <Skeleton className="h-10 w-[100] sm:w-[500px] mx-auto" />
      <Skeleton className="h-10 w-[150] sm:w-[700px] mt-2 mx-auto mb-8" />
      <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
      <div className="flex items-center">
        <Skeleton className="h-4 w-[70px] mx-auto" />
        <Skeleton className="h-4 w-[70px]  mx-auto " />
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
      </div>
    </div>
  );
};

export default Loading;

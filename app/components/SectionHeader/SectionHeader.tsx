import React, { memo } from "react";

const SectionHeader: React.FC<{ title: string }> = memo(({ title }) => {
  return (
    <div className="h-10 w-full  flex justify-center items-center my-10 ">
      <p className="w-fit bg-basicColor px-6 py-1 text-3xl shadow-sm rounded-sm text-whiteColor shadow-blackColor/50 text-shadow-md dark:shadow-greyColor/50 dark:shadow-sm">
        {title}
      </p>
    </div>
  );
});

export default SectionHeader;

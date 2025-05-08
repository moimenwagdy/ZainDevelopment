import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="relative bg-basicColor h-fit hidden md:block w-7/8 lg:w-[64%] mx-auto rounded-lg my-2 shadow-md">
      <ul className="w-full container flex flex-wrap text-lg justify-around gap-x-1  items-center h-fit px-5 text-white font-bold mx-auto">
        <NavItem title="الرئيسية" />
        <NavItem
          key="خدماتنا"
          title="خدماتنا"
          childList={["المقاولات", "التكييف", "الصيانة"]}
        />
        <NavItem
          key="اقسام المتجر"
          title="اقسام المتاجر"
          childList={[
            "مكيفات سبليت",
            "أدوات مطبخ",
            "إنارة رحلات",
            "الاجهزة المنزلية",
            "العناية بالسيارة",
            "عدد كهربائية",
            "عدد يدوية",
            "عقود الصيانة",
          ]}
        />
        <NavItem title="من نحن" />
        <NavItem title="الصيانة" />
        <NavItem title="اتصل بنا" />
        <NavItem
          key="تواصل اجتماعى"
          title="تواصل اجتماعى"
          childList={["Facebook", "Instagram", "Snapchat", " Tiktok"]}
        />
      </ul>
    </nav>
  );
};

export default Navbar;

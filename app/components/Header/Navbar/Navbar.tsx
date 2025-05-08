import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="relative bg-basicColor h-fit hidden md:block  mx-auto rounded-lg my-2 shadow-md w-fit ">
      <ul className=" container flex flex-wrap text-lg justify-center gap-x-6 px-6 lg:px-18  items-center h-fit  text-white font-bold mx-auto">
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

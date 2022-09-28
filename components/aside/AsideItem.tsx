import { menuItemType } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AsideBarItem({ title, iconName, url }: menuItemType) {
  const [isSelected, SetIsSelected] = useState<string>("init");
  const router = useRouter();

  useEffect(() => {
    //get current path and add to state as selected menu item
    SetIsSelected(router.pathname.slice(1).toString());
  }, [router.pathname]);

  const makeMenuItemSelected = () => {
    SetIsSelected(url.slice(1));
  };

  return (
    <>
      <Link href={url}>
        <a
          href="#"
          className={`flex items-center gap-2 h-[4rem] hover:text-colorPrimary relative group ${
            url.slice(1) === isSelected ? "active-menu" : "text-colorGrayLight"
          }`}>
          <i
            className={`bi text-xl ${iconName} text-[1.2rem] ml-12 group-hover:ml-8 transition-all duration-300 ease-out`}></i>
          <h4 className="font-medium">{title}</h4>
        </a>
      </Link>
    </>
  );
}

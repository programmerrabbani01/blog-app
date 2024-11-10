import {
  ChartBarStacked,
  LayoutDashboard,
  NotebookTabs,
  UserRoundCog,
} from "lucide-react";
import Link from "next/link";

export default function SideBar() {
  const link = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <LayoutDashboard />,
    },
    {
      name: "Posts",
      link: "/admin/posts",
      icon: <NotebookTabs />,
    },
    {
      name: "Categories",
      link: "/admin/categories",
      icon: <ChartBarStacked />,
    },
    {
      name: "Authors",
      link: "/admin/authors",
      icon: <UserRoundCog />,
    },
  ];

  return (
    <>
      <section className="w-52 border-r h-screen bg-blue-100">
        <ul className="w-full flex-col">
          {link.map((item, index) => (
            <Link key={index} href={item?.link}>
              <li className="flex items-center gap-3  px-5 py-6 border-b border-blue-300 hover:bg-blue-400 transition-all duration-300 hover:text-white font-bold ">
                {item?.icon}
                <span>{item?.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
}

import Link from "next/link";

import { List } from "postcss/lib/list";

const AppSidebar = () => {
  return (
    <div className="hidden lg:flex fixed left-0 top-0 w-40 h-full p-3 pt-6 justify-between flex-col items-center bg-[#EFEFF2]">
      <div className="text-center flex-1">
        <h1 className="text-2xl">Docker Desktop</h1>
      </div>
      <div>
        <ul>
          <li className="text-center"><Link href="#">Settings</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default AppSidebar;

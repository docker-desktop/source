import Link from "next/link";

const AppSidebar = () => {
  return (
    <div className="hidden fixed left-0 top-0 w-40 h-full p-3 lg:flex justify-between flex-col items-center bg-[#EFEFF2]">
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
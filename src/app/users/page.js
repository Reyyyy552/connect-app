import {
  IconLogout2,
  IconUser,
  IconUserBolt,
  IconUserCog,
} from "@tabler/icons-react";

export default function UserPages() {
  return (
    <div id="container" className="flex h-[100vh] text-black">
      <section
        id="navigation"
        className="bg-white p-10 w-[220px] border-r flex flex-col"
      >
        <h1 className="text-3xl font-bold text-center">Connect</h1>
        <div className="flex flex-col gap-3 mt-15">
          <button className="p-2.5 text-left text-base cursor-pointer flex items-center gap-2 rounded-lg font-bold">
            {" "}
            <IconUser /> Users
          </button>
          <button className="p-2.5 text-left text-base cursor-pointer flex items-center gap-2 rounded-lg font-bold">
            {" "}
            <IconUserCog /> Hak akses
          </button>
          <button className="p-2.5 text-left text-base cursor-pointer flex items-center gap-2 rounded-lg font-bold">
            {" "}
            <IconLogout2 /> Logout
          </button>
        </div>
      </section>
      <section
        id="content"
        className="bg-white w-[85%] flex-1 p-[30px] overflow-y-auto"
      >
        <input
          type="search"
          placeholder="Cari User"
          className="w-full p-3 border rounded-lg mb-7 text-base"
        ></input>
        <div className="flex flex-col gap-4">
          <div className="border rounded-lg p-2 flex justify-between items-center">
            <div>
              <h2 className="text-[18px] font-bold mb-[1px]">
                Rahmat Saudi Al Fathir As
              </h2>
              <p className="text-base text-black mb-2">
                rahmatsaudi@universitasmulia.ac.id
              </p>
              <span className="bg-black text-white text-[11px] px-[9px] py-[5px] rounded mr-[6px]">
                Admin
              </span>
              <span className="bg-black text-white text-[11px] px-[9px] py-[5px] rounded">
                Employee
              </span>
            </div>
            <span className="bold-text status text-[16px] font-bold">
              Aktif
            </span>
          </div>

          <div className="border rounded-lg p-2 flex justify-between items-center">
            <div>
              <h2 className="text-[18px] font-bold mb-[1px]">Lintang</h2>
              <p className="text-base text-black mb-2">
                lintang@universitasmulia.ac.id
              </p>
              <span className="bg-black text-white text-[11px] px-[9px] py-[5px] rounded">
                Employee
              </span>
            </div>
            <span className="bold-text status text-[16px] font-bold">
              Aktif
            </span>
          </div>

          <div className="border rounded-lg p-2 flex justify-between items-center">
            <div>
              <h2 className="text-[18px] font-bold mb-[1px]">Shafira</h2>
              <p className="text-base text-black mb-2">
                shafira@universitasmulia.ac.id
              </p>
              <span className="bg-black text-white text-[11px] px-[9px] py-[5px] rounded">
                Employee
              </span>
            </div>
            <span className="bold-text status text-[16px] font-bold">
              Aktif
            </span>
          </div>

          <div className="border rounded-lg p-2 flex justify-between items-center">
            <div>
              <h2 className="text-[18px] font-bold mb-[1px]">Lebah Ganteng</h2>
              <p className="text-base text-black mb-2">
                lebahganteng@universitasmulia.ac.id
              </p>
              <span className="bg-black text-white text-[11px] px-[9px] py-[5px] rounded">
                Employee
              </span>
            </div>
            <span className="bold-text status text-[16px] font-bold">
              Suspended
            </span>
          </div>
        </div>
      </section>
      <button className="fixed right-5 bottom-5 w-[42px] h-[42px] rounded-lg text-[26px] bg-[#e0e0e0] cursor-pointer">
        +
      </button>
    </div>
  );
}
import { IconLogout2, IconUser, IconUserCog } from "@tabler/icons-react";

export default function UserPage() {
    return (
        <div id="container" className="flex h-[100vh]">
            <section id="navigation" className="bg-gray-300 p-4 w-[200px]">
                <h1 className="text-3xl font-bold text-center">connect</h1>
                <div className="flex flex-col gap-2 mt-4">
                    <button className="flex"><IconUser />  users</button>
                    <button className="flex"><IconUserCog />Hak Akses</button>
                    <button className="flex"><IconLogout2 />Logout</button>
                </div>
            </section>
            <section id="content">
                <input type="text" placeholder="Cari User"></input>
                <div id="list-users"></div>
            </section>
        </div>
    );
}
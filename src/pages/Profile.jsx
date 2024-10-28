import { useEffect, useState } from "react";

import Button from "./../components/ui/Button/Button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/Tabs";
import { useAuthContext } from "../hooks/useAuthContext";
import AddressModal from "../components/AddressModal";

export default function Profile() {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [open, setOpen] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    setUserData({ name: user.name, email: user.email });
  }, [user]);

  function userChange(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 md:px-8">
      <div className="relative rounded-md bg-white p-4 shadow">
        <Tabs defaultValue="tab1">
          <TabsList className="">
            <TabsTrigger value="tab1">Profile</TabsTrigger>
            <TabsTrigger value="tab2">Address</TabsTrigger>
            <TabsTrigger value="tab3">Orders</TabsTrigger>
          </TabsList>

          <TabsContent value="tab1">
            <div>
              <header className="mb-4 flex gap-2">
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                </svg>
                <h2 className="text-md font-bold">User Profile</h2>
              </header>

              <form className="flex flex-col gap-4 text-sm [&_input]:rounded-md [&_input]:border-2 [&_input]:border-slate-200 [&_input]:p-2 [&_label]:font-medium">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={userData.name}
                    onChange={userChange}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={userData.email}
                    onChange={userChange}
                  />
                </div>

                <div className="flex gap-4">
                  <Button size="sm" variant="outline">
                    Cancel
                  </Button>
                  <Button size="sm">Update</Button>
                </div>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div>
              <header className="mb-4 flex gap-2">
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                </svg>
                <h2 className="text-md font-bold">My Address</h2>
              </header>

              <div className="mb-4">
                <Button
                  size="custom"
                  className="px-2 py-1.5 text-sm shadow"
                  onClick={() => setOpen(true)}
                >
                  <svg
                    className="mr-1 size-3 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                  </svg>
                  Add Address
                </Button>
              </div>

              <div>
                <div className="flex cursor-pointer items-center justify-between rounded-md bg-slate-100 p-4">
                  <div>
                    <p className="text-sm font-semibold">
                      Burhanu Sultan Ramadan
                    </p>
                    <p className="text-sm">
                      Jl. Stadion Dalam, RT 01/ RW 28, Desa Baning Kota, Kec.
                      Sintang
                    </p>
                  </div>
                  <div className="flex gap-2 [&_svg]:size-4">
                    <Button size="sm" variant="outline" className="group">
                      <svg
                        className="group-hover:fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                      </svg>
                    </Button>
                    <Button>
                      <svg
                        className="fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <AddressModal open={open} onClose={() => setOpen(false)} />
          </TabsContent>

          <TabsContent value="tab3">
            <div>
              <header className="mb-4 flex gap-2">
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z" />
                </svg>
                <h2 className="text-md font-bold">My Orders</h2>
              </header>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

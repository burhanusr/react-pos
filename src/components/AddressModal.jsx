import { useEffect, useState } from "react";

import Button from "./../components/ui/Button/Button";
import {
  getAllDistricts,
  getAllProvinces,
  getAllRegencies,
  getAllVillages,
} from "../api/regionApi";
import { ComboBox } from "./ui/Combobox";

const rawData = [
  { code: "11", name: "Aceh" },
  { code: "51", name: "Bali" },
  { code: "36", name: "Banten" },
  { code: "17", name: "Bengkulu" },
  { code: "34", name: "Daerah Istimewa Yogyakarta" },
  { code: "31", name: "DKI Jakarta" },
];

export default function AddressModal({ open, onClose }) {
  //   const [regionData, setRegionData] = useState({
  //     provinsi: null,
  //     kabupaten: null,
  //     kecamatan: null,
  //     kelurahan: null,
  //   });
  const [provinces, setProvinces] = useState(null);
  const [regencies, setRegencies] = useState(null);
  const [districts, setDistricts] = useState(null);
  const [villages, setVillages] = useState(null);
  const [regionId, setRegionId] = useState({
    provinsi: null,
    kabupaten: null,
    kecamatan: null,
    kelurahan: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const provinces = await getAllProvinces();
        // setProvinces(provinces);
        // // setRegionData({ ...regionData, provinsi: provinces });
        // if (regionId.provinsi) {
        //   const regencies = await getAllRegencies(regionId.provinsi);
        //   setRegencies(regencies);
        //   //   setRegionData({ ...regionData, kabupaten: regencies });
        // }
        // if (regionId.kabupaten) {
        //   const districts = await getAllDistricts(regionId.kabupaten);
        //   setDistricts(districts);
        //   //   setRegionData({ ...regionData, kecamatan: districts });
        // }
        // if (regionId.kecamatan) {
        //   const villages = await getAllVillages(regionId.kecamatan);
        //   setVillages(villages);
        //   //   setRegionData({ ...regionData, kelurahan: villages });
        // }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [regionId]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex w-1/2 flex-col gap-4 rounded-md bg-white p-4 shadow ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <header className="flex gap-2">
          <h2 className="text-md font-bold">New Address</h2>
        </header>

        <form className="relative flex flex-col gap-4 text-sm">
          <div className="rounded-md bg-slate-100 p-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-4">
            <ComboBox
              name="Provinsi"
              data={provinces}
              dependency={regionId}
              setDependency={setRegionId}
            />
            <ComboBox
              name="Kabupaten"
              disabled={regencies ? false : true}
              data={regencies}
              dependency={regionId}
              setDependency={setRegionId}
            />
            <ComboBox
              name="Kecamatan"
              disabled={districts ? false : true}
              data={districts}
              dependency={regionId}
              setDependency={setRegionId}
            />
            <ComboBox
              name="Kelurahan"
              disabled={villages ? false : true}
              data={villages}
              dependency={regionId}
              setDependency={setRegionId}
            />
          </div>

          <div className="rounded-md bg-slate-100 p-4">
            <textarea
              id="detail"
              name="detail"
              placeholder="Detail"
              className="h-full w-full resize-none bg-transparent focus:outline-none"
            ></textarea>
          </div>

          <div className="flex gap-4">
            <Button type="button" size="sm" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button size="sm">Add Address</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

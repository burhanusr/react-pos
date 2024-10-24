import Button from "./ui/Button/Button";

export default function CartItem() {
  return (
    <div className="flex items-stretch gap-4 text-sm [&_svg]:size-3 [&_svg]:shrink-0 [&_svg]:fill-gray-800">
      <div className="w-20">
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
          alt=""
          className="aspect-square rounded-md"
        />
      </div>

      <div className="flex w-full flex-col justify-between gap-2">
        <h3 className="font-semibold">
          Almond Blackberry Superberyy berry bery{" "}
        </h3>

        <div className="flex items-center justify-between">
          <p className="font-semibold">Rp. 15.000</p>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="custom" className="group p-0.5">
              <svg
                className="group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M200-440v-80h560v80H200Z" />
              </svg>
            </Button>
            <input
              type="text"
              className="w-4 border-none text-center font-bold outline-none"
              value={10}
            />
            <Button variant="outline" size="custom" className="group p-0.5">
              <svg
                className="group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const MudaReserveCard:React.FC= () => {
  return (
<div className="w-80 rounded-b-3xl shadow-lg bg-[#fbf2c0] text-black overflow-hidden backdrop-filter backdrop-blur-md bg-opacity-70 border border-white border-opacity-20">
      <div className="relative">
        <img
          src="https://imgs.search.brave.com/Mx8oJjtCnoug5n-9T4tDzW78woYfBYfkv1tdt3femTg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWtlYS5jb20vZXh0/L2luZ2thZGFtL20v/MzMyMDI3MjBiZTVm/NGQwL29yaWdpbmFs/L1BIMTg0OTM2LWNy/b3AwMDEuanBnP2Y9/cw"
          alt="Muda Reserve"
          className="w-full h-48 object-cover"
        />
        <button className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 bg-white text-black font-semibold py-1 px-4 rounded-full shadow-md hover:bg-gray-300 duration-300 ease-linear">
          View
        </button>
      </div>
      <div className="p-6 text-center">
        <p className="text-sm uppercase tracking-widest">Exclusive</p>
        <h3 className="text-2xl font-bold mt-1">Luxury Sofa</h3>
        <p className="text-black text-sm mt-2">
          Közōwood engineered this ambitious project exclusively with mixed mass timber construction techniques.
        </p>
      </div>
</div>
  );
};

export default MudaReserveCard;
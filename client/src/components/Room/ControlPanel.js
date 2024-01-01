import React from "react";

const ControlPanel = () => {
  return (
    <div className="w-full bg-gray-800 rounded-2xl">
      <div className="w-full rounded-t-2xl bg-gray-900 text-slate-200 py-2 text-center">
        Connected Users
      </div>
      <div className="grid grid-cols-2 grid-rows-2 w-1/3 ml-5 mt-5">
        <button
          type="button"
          class="text-slate-100 bg-slate-500 hover:bg-slate-600 font-medium rounded-3xl text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Microphone
        </button>

        <button
          type="button"
          class="text-slate-100 bg-slate-500 hover:bg-slate-600 font-medium rounded-3xl text-sm px-5 py-2.5 mr-2 mb-2"
        >
          COPY RoomID
        </button>
        <button
          type="button"
          class="text-slate-100 bg-slate-500 hover:bg-slate-600 font-medium rounded-3xl text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Room Audio
        </button>
        <button
          type="button"
          class="text-slate-100 bg-red-700 hover:bg-red-800 font-medium rounded-3xl text-sm px-5 py-2.5 mr-2 mb-2"
        >
          END CALL
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;

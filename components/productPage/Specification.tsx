import React from "react";

type Props = {
  specification: unknown;
};

const placeholderSpec = {
  ram: {
    index: 3,
    value: "8 GB",
    shortIndex: 3,
  },
  color: {
    index: 15,
    value: "black",
  },
  width: {
    index: 17,
    value: "76 mm",
  },
  height: {
    index: 16,
    value: "166 mm",
  },
  memory: {
    index: 4,
    value: "256 GB",
    shortIndex: 4,
  },
  weight: {
    index: 19,
    value: "189 g",
  },
  processor: {
    index: 1,
    value: "Qualcomm Snapdragon 695",
    shortIndex: 2,
  },
  thickness: {
    index: 18,
    value: "8 mm",
  },
  connection: {
    index: 13,
    value: "5G\nWi-Fi\nNFC\nBluetooth 5.1",
  },
  screen_size: {
    index: 8,
    value: '6,67"',
    shortIndex: 1,
  },
  screen_type: {
    index: 6,
    value: "Touch, AMOLED",
  },
  graphics_card: {
    index: 2,
    value: "Adreno 619",
  },
  charging_power: {
    index: 14,
    value: "33 W",
  },
  operating_system: {
    index: 5,
    value: "Android 13",
  },
  screen_resolution: {
    index: 9,
    value: "2400 x 1080",
  },
  fingerprint_reader: {
    index: 12,
    value: "In frame",
  },
  screen_refresh_rate: {
    index: 7,
    value: "120 Hz",
  },
  "camera_resolution_ - rear": {
    index: 10,
    value: "48.0 Mpix\n8.0 Mpix - ultra-wide angle\n2.0 Mpix - macro",
  },
  "camera_resolution_ - front": {
    index: 11,
    value: "13 Mpix",
  },
};

const placeholderArrSorted = Object.entries(placeholderSpec).sort((a, b) => {
  return a[1].index - b[1].index;
});

const Specification = (props: Props) => {
  return (
    <div id="specification" className="scroll-m-16">
      <h2 className="text-2xl font-medium pb-4 pt-2">Specification</h2>
      <div className="">
        {placeholderArrSorted.map((spec) => {
          return (
            <div className="grid grid-cols-[7.5rem_auto] gap-x-2  md:grid-cols-[15rem_auto] lg:grid-cols-[20rem_auto] pl-[5%] sm:pl-[10%] md:pl-[15%] lg:pl-[20%] 2xl:pl-[30%] odd:bg-gray-100 py-2 border-t-2 text-sm last:border-b-2 hover:bg-gray-200">
              <p className="font-medium">
                {spec[0].split("_").join(" ").charAt(0).toUpperCase() +
                  spec[0].split("_").join(" ").slice(1)}
              </p>
              <p className="whitespace-pre-line">{spec[1].value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Specification;

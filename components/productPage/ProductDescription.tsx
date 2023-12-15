import Image from "next/image";
import React from "react";

type Props = {
  description: {
    icon: string;
    header: string;
    images: string[];
    content: string;
  }[];
};

const ProductDescription = (props: Props) => {
  return (
    <div id="description" className="py-5 relative scroll-m-16">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] justify-items-center">
        <Image
          src={
            "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/icons/smartfon1.svg"
          }
          height={95}
          width={95}
          alt="Smartphone icon"
          fetchPriority="low"
          className="md:mx-5 lg:mx-14 mb-5 md:mb-0"
        />
        <div className="flex flex-col items-center gap-5">
          <h2 className="w-full text-3xl font-medium text-center md:text-left">
            Smartphone Xiaomi POCO X5 5G 256 GB Black
          </h2>
          <p>
            What has been prepared for you in the new Xiaomi POCO X5 5G 256 GB
            Black? As usual, you can count on high quality and modern
            components. These include a 120 Hz AMOLED screen, a triple camera
            system, and an efficient processor. There are also many valuable
            functions waiting for you that will certainly have a positive impact
            on your user experience. All this accompanied by a large capacity
            5000 mAh battery with a 33 W fast charging function.
          </p>
          <Image
            src={
              "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/poco_x5_black/12.webp"
            }
            width={900}
            height={900}
            alt=""
            className="rounded-2xl mb-10"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] justify-items-center">
        <Image
          src={
            "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/icons/dotykowyekran.svg"
          }
          height={95}
          width={95}
          alt="Smartphone icon"
          fetchPriority="low"
          className="md:mx-5 lg:mx-14 mb-5 md:mb-0"
        />
        <div className="flex flex-col items-center gap-5">
          <h2 className="w-full text-3xl font-medium">120 Hz AMOLED</h2>
          <p>
            Xiaomi POCO X5 5G is equipped with a 6.67-inch AMOLED screen. In
            addition, this wonderful screen offers a refresh rate of 120 Hz.
            This will make everything you watch super smooth, enhancing your
            smartphone experience. However, you will discover its true potential
            while watching movies or playing games. Such great fluidity will
            allow you to notice every important detail. And thanks to support
            for a wide color gamut in the DCI-P3 standard, all colors will be
            more vivid and properly saturated.
          </p>
          <Image
            src={
              "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/poco_x5_black/13.webp"
            }
            width={900}
            height={900}
            alt=""
            className="rounded-2xl mb-10"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] justify-items-center">
        <Image
          src={
            "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/icons/wydajnosc.svg"
          }
          height={95}
          width={95}
          alt="Smartphone icon"
          fetchPriority="low"
          className="md:mx-5 lg:mx-14 mb-5 md:mb-0"
        />
        <div className="flex flex-col items-center gap-5">
          <h2 className="w-full text-3xl font-medium">
            POCO X5 5G does not disappoint
          </h2>
          <p>
            The black Xiaomi POCO X5 5G 256 GB meets fans' expectations. It
            surprises again with its price, while maintaining high quality.
            Users of this smartphone can count on high performance no matter
            what they do. The modern Snapdragon® 695 processor will meet your
            challenges. POCO X5 also offers Dynamic RAM Expansion Technology
            3.0. This is why your smartphone can run so smoothly and perform
            well even when multiple apps are running in the background at the
            same time.
          </p>
          <Image
            src={
              "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/poco_x5_black/14.webp"
            }
            width={900}
            height={900}
            alt=""
            className="rounded-2xl mb-10"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] justify-items-center">
        <Image
          src={
            "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/icons/kamera.svg"
          }
          height={95}
          width={95}
          alt="Smartphone icon"
          fetchPriority="low"
          className="md:mx-5 lg:mx-14 mb-5 md:mb-0"
        />
        <div className="flex flex-col items-center gap-5">
          <h2 className="w-full text-3xl font-medium">Triple camera system</h2>
          <p>
            The camera system of the black Xiaomi POCO X5 5G has advanced,
            dynamic functions. With their help, taking stylish photos will
            become much easier. See how interesting shots you can take with the
            main camera with a resolution of 48 Mpix. Be sure to use the
            available filters and diversify your work. Of course, in addition to
            unforgettable photos, your smartphone can record high-quality
            videos. In Xiaomi POCO X5 5G you will find everything you need to
            commemorate every important moment in life.
          </p>
          <Image
            src={
              "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/poco_x5_black/15.webp"
            }
            width={900}
            height={900}
            alt=""
            className="rounded-2xl mb-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

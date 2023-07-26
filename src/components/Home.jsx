import React from "react";
import "../styles/home.scss";
import { FaPlay } from "react-icons/fa";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { places } from "../assets/places";
import { memories } from "../assets/memories";
import kenyaImg from "../assets/img/kenya_safari.jpg";

export const Home = () => {
  return (
    <div className="">
      {/* sec1 */}
      <section className="container mx-auto flex flex-col justify-center py-16">
        <h1 className="text-8xl font-montserrat font-bold uppercase mb-16">
          Explore Diversity Around the World
        </h1>
        <div className="banner h-[40rem] w-full relative">
          <svg
            className="absolute top-[50%]  -translate-y-[50%] right-10 rotate-180"
            width="24"
            height="302"
            viewBox="0 0 24 402"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0L0.452994 20L23.547 20L12 0ZM9.99998 400C9.99998 401.105 10.8954 402 12 402C13.1046 402 14 401.105 14 400L9.99998 400ZM10 18L9.99998 400L14 400L14 18L10 18Z"
              fill="white"
            />
          </svg>
          {/* video layer */}
          <div className="absolute bottom-0 left-10 translate-y-[50%] flex w-[32rem] gap-8 bg-gtBlack/80">
            <div className="thumbnail h-32 w-48 flex justify-center items-center">
              <div className="bg-gtBlack/50 p-4 rounded-full">
                <FaPlay className="text-white" />
              </div>
            </div>
            <div className="id-info flex flex-col gap-2 justify-center">
              <p className="text-2xl font-semibold text-white">
                Matterhorn Mountain
              </p>
              <p className="text-white">Pennine Alps, Switzerland</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5 pb-16">
          <p className="w-[30rem] text-end text-gtGray">
            Learn and fell the diversity of culture all over the world and find
            unforgettable experiences that can't be found elsewhere.
          </p>
        </div>
      </section>
      {/* sec2 */}
      <section className="py-16 bg-gtBlack text-white">
        <div className="container mx-auto flex flex-col items-center">
          <div className="id-texts w-1/2 text-center mb-16">
            <h1 className="text-6xl font-bold mb-8">
              We Only Provide Best Destination For You
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              eaque odit in sapiente! Nulla ipsum eos veniam architecto a id sed
              quia. Sapiente iusto odio voluptatibus velit deleniti, est unde
              illo, facilis distinctio quasi dicta eos repellat suscipit cum
              voluptate.
            </p>
          </div>
          {/* destinations */}
          <div className="flex gap-8 mb-16">
            {places.map((place, idx) => (
              <div
                className="h-[36rem] location flex items-end"
                style={{
                  backgroundImage: `linear-gradient(
                  to top,
                  rgba(15, 16, 20, 1) 0%,
                  rgba(15, 16, 20, 0.2) 100%
                ),
                url(${place.img})`,
                }}
              >
                {/* destination info */}
                <div className="id-info w-2/3 flex flex-col gap-2 pl-8 pb-8">
                  <p className="text-lg">
                    {"Best-" + (idx + 1).toString().padStart(2, 0)}
                  </p>
                  <p className="text-2xl font-semibold">{place.name}</p>
                  <p className="text-lg">{place.location}</p>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit dignissimos fuga culpa cumque voluptatibus magni.
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* custom section break */}
          <div className="flex items-center w-full">
            <div className="w-2 h-2 rounded-full bg-gtDarkGray"></div>
            <div className="w-full h-0.5 bg-gtDarkGray"></div>
            <div className="w-2 h-2 rounded-full bg-gtDarkGray"></div>
          </div>
        </div>
      </section>
      {/* sec3 */}
      <section className="py-16 bg-gtBlack text-white">
        <div className="container mx-auto flex flex-col items-center">
          <div className="id-texts w-1/2 text-center mb-16">
            <h1 className="text-6xl font-bold mb-8">
              We Make Your Dream Trips Come True
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              eaque odit in sapiente! Nulla ipsum eos veniam architecto a id sed
              quia. Sapiente iusto odio voluptatibus velit deleniti, est unde
              illo, facilis distinctio quasi dicta eos repellat suscipit cum
              voluptate.
            </p>
          </div>
          {/* trips */}
          <div className="flex gap-16 mb-16">
            <div className="id-starred-trip basis-1/2 border-r-2 border-gtDarkGray pr-16">
              <div className="id-card flex flex-col items-start gap-4 mb-8">
                <p className="font-montserrat">
                  12 April - 19 April 2023 | 7 day 6 night
                </p>
                <p className="text-2xl font-bold">
                  Journey Through the Wilds of Africa
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi suscipit totam esse impedit animi vero incidunt iusto
                  nulla culpa cupiditate illo ipsa dicta, veritatis a.
                </p>
                <div className="flex gap-4">
                  <button className="btn">Get Started</button>
                  <button className="btn bg-transparent border-2 border-gtGray">
                    Explore More
                  </button>
                </div>
              </div>
              <div className="id-img">
                <img src={kenyaImg} alt="" />
              </div>
            </div>
            <div className="id-trips basis-1/2 flex flex-col gap-12">
              <div className="id-card flex flex-col items-start gap-8">
                <p className="font-montserrat">
                  12 April - 19 April 2023 | 7 day 6 night
                </p>
                <p className="text-2xl font-bold">
                  Journey Through the Wilds of Africa
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi suscipit totam esse impedit animi vero incidunt iusto
                  nulla culpa cupiditate illo ipsa dicta, veritatis a.
                </p>
                {/* custom section break */}
                <div className="w-full h-0.5 bg-gtDarkGray relative">
                  <div className="bg-gtDarkGray p-2 rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <FaLessThan className="text-xs" />
                  </div>
                </div>
              </div>
              <div className="id-card flex flex-col items-start gap-8">
                <p className="font-montserrat">
                  12 April - 19 April 2023 | 7 day 6 night
                </p>
                <p className="text-2xl font-bold">
                  Journey Through the Wilds of Africa
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi suscipit totam esse impedit animi vero incidunt iusto
                  nulla culpa cupiditate illo ipsa dicta, veritatis a.
                </p>
                {/* custom section break */}
                <div className="w-full h-0.5 bg-gtDarkGray relative">
                  <div className="bg-gtDarkGray p-2 rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <FaLessThan className="text-xs" />
                  </div>
                </div>
              </div>
              <div className="id-card flex flex-col items-start gap-8">
                <p className="font-montserrat">
                  12 April - 19 April 2023 | 7 day 6 night
                </p>
                <p className="text-2xl font-bold">
                  Journey Through the Wilds of Africa
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi suscipit totam esse impedit animi vero incidunt iusto
                  nulla culpa cupiditate illo ipsa dicta, veritatis a.
                </p>
                {/* custom section break */}
                <div className="w-full h-0.5 bg-gtDarkGray relative">
                  <div className="bg-gtDarkGray p-2 rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <FaLessThan className="text-xs" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* sec4 */}
      <section className="container mx-auto flex flex-col items-center py-16">
        <div className="id-texts w-1/2 text-center mb-16">
          <h1 className="text-6xl font-bold mb-8">
            Let's Buy Your Unforgettable Memories
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eaque
            odit in sapiente! Nulla ipsum eos veniam architecto a id sed quia.
            Sapiente iusto odio voluptatibus velit deleniti, est unde illo,
            facilis distinctio quasi dicta eos repellat suscipit cum voluptate.
          </p>
        </div>
        <div>
          {/* memories */}
          <div className="grid grid-cols-4 gap-x-8 gap-y-16 mb-16">
            {memories.map((memory) => (
              <div className="flex flex-col gap-4">
                <img loading="lazy" src="https://picsum.photos/600" alt="" />
                <div className="flex justify-between">
                  <p className="font-semibold">{memory.name}</p>
                  <p className="text-gtBlue">{"$" + memory.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-16">
            <button className="btn">Load More</button>
          </div>
        </div>
      </section>
      {/* sec5 */}
      <section className="py-16 bg-gtBlack text-white">
        <div className="container mx-auto flex flex-col items-center">
          <div className="id-texts w-1/2 text-center mb-16">
            <h1 className="text-6xl font-bold mb-8">
              What Our Customers Say About Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              eaque odit in sapiente! Nulla ipsum eos veniam architecto a id sed
              quia. Sapiente iusto odio voluptatibus velit deleniti, est unde
              illo, facilis distinctio quasi dicta eos repellat suscipit cum
              voluptate.
            </p>
          </div>
          {/* testimonials */}
          <div className="flex items-center gap-16 mb-16">
            <div className="id-testi-photo basis-2/5">
              <img src={kenyaImg} alt="" />
            </div>
            <div className="id-testi-info basis-3/5">
              <p className="text-4xl font-bold mb-16">
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur delectus, possimus at aut nihil vitae"
              </p>
              <div className="mb-8">
                <p className="text-2xl">- Hans Christian</p>
                <p className="text-2xl text-gtGray">
                  Professional Photographer
                </p>
              </div>
              <div className="flex gap-4">
                <div className="p-4 border-2 rounded-full">
                  <FaLessThan />
                </div>
                <div className="p-4 border-2 rounded-full">
                  <FaGreaterThan />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

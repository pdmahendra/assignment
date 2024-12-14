import React from "react";

const EventCard = ({ img, location, time, date, eventTitle, description }) => {
  return (
    <div className="border border-[#D9D9D9] p-5 bg-[#F9F9F9] rounded-2xl max-w-[400px]">
      <img src={img} alt="Event Image" />
      <div className="font-outfit space-y-2 mt-3">
        <div className="flex items-center text-[#4E4E4E] gap-x-2">
          <img src="./pin.jpg" alt="Location pin" className="h-[20px]" />
          <p className="text-sm md:text-base">{location}</p>

          <img
            src="./pin.jpg"
            alt="Location pin"
            className="pl-4 md:pl-6 h-[20px]"
          />
          <p className="text-sm md:text-base">{time}</p>
        </div>

        <p className="text-[#E03737] text-xl font-medium">{date}</p>

        <p className="text-[#202020] text-2xl font-medium">{eventTitle}</p>

        <p className="text-[#4E4E4E] text-base w-[70%]">{description}</p>

        <div className="flex text-xl justify-between pt-4 max-w-[358px]">
          <button className="bg-[#E03737] text-[#FFFFFF] px-4 md:px-8 py-2 border border-2 rounded">
            Book Ticket
          </button>
          <button className="text-[#202020] px-4 md:px-8 py-2 border border-2  rounded">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

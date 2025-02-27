import {
  FiX,
  FiShare2,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { RiFireLine, RiFlashlightLine, RiSnowflakeLine } from "react-icons/ri";
import { Calendar } from "react-calendar";

export default function StreakPage() {
  return (
    <div className="fixed inset-0 bg-white max-w-[414px] mx-auto flex flex-col">
      {/* Header Section */}
      <div className="bg-[#FFA600]">
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <FiX className="w-6 h-6 text-white" />
          <h1 className="text-xl font-bold text-white">Streak</h1>
          <FiShare2 className="w-6 h-6 text-white" />
        </div>
        {/* Tabs */}
        <div className="flex border-b border-white/20">
          <div className="flex-1 py-3 text-center font-bold text-white border-b-2 border-white">
            PERSONAL
          </div>
          <div className="flex-1 py-3 text-center font-bold text-white font-nunito">
            FRIENDS
          </div>
        </div>
        {/* Current Streak */}
        <div className="flex justify-between items-center px-4 py-6">
          <div>
            <span className="text-6xl font-bold text-white">2</span>
            <p className="text-white font-bold mt-1">day streak!</p>
          </div>
          <RiFireLine className="w-16 h-16 text-white" />
        </div>
        {/* XP Message Box */}
        <div className="mx-4 bg-white p-4 rounded-xl flex items-center gap-3 mb-4">
          <RiFlashlightLine className="w-6 h-6 text-[#FFA600] flex-shrink-0" />
          <p className="text-sm text-gray-700">
            You earned more XP yesterday than your average.
          </p>
        </div>
      </div>
      {/* White background section */}
      <div className="bg-white pt-4 flex-1 overflow-y-auto">
        {/* Month Header with Navigation Arrows */}
        <div className="flex items-center justify-between mb-4 mx-4">
          <h2 className="text-xl font-bold">February 2025</h2>
          <div className="flex items-center gap-3">
            <button className="text-gray-400 hover:text-gray-600">
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Stats Boxes */}
        <div className="grid grid-cols-2 gap-4 mb-6 mx-4">
          <div className="border-2 border-gray-300 p-4 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="bg-[#FFA600] w-6 h-6 rounded-full flex items-center justify-center">
                <FiCheck className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">2</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Days practiced</p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="bg-[#1CB0F6]/20 w-8 h-8 rounded-full flex items-center justify-center">
                <RiSnowflakeLine className="w-5 h-5 text-[#1CB0F6]" />
              </div>
              <span className="text-xl font-bold">0</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Freezes used</p>
          </div>
        </div>
        {/* Calendar */}
        <div className="mx-4 px-8 align-center border-2 border-gray-300 rounded-2xl">
          <Calendar value={new Date(2025, 1)} view="month" />
        </div>
      </div>
    </div>
  );
}

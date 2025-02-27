import { FiPlus } from "react-icons/fi";
import { SiMusicbrainz } from "react-icons/si";
import { TbMathSymbols } from "react-icons/tb";
const currentCourses = [
  { id: 1, name: "Italian", flag: "it", active: false },
  { id: 2, name: "Spanish", flag: "es", active: false },
  { id: 3, name: "French", flag: "fr", active: false },
];
export default function LanguagePage() {
  return (
    <div className="fixed inset-0 bg-white max-w-[414px] mx-auto h-[50vh] p-4 overflow-y-auto">
      {/* Current Courses */}
      <div className="mb-4">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {currentCourses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col items-center gap-2 p-3 min-w-[100px]"
            >
              <div className="relative w-16 h-12">
                <img
                  src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${course.flag}.svg`}
                  alt={`${course.name} Flag`}
                  className="w-16 h-12 rounded-xl shadow-sm"
                />
                {course.active && (
                  <div className="absolute inset-0 rounded-xl border-2 border-[#1CB0F6] pointer-events-none"></div>
                )}
              </div>
              <span className="text-sm font-bold">{course.name}</span>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center gap-2 p-3 min-w-[100px]">
            <div className="w-16 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
              <FiPlus className="w-8 h-8 text-gray-500" />
            </div>
            <span className="text-sm font-bold text-gray-500">Add</span>
          </div>
        </div>
      </div>
      {/* New Courses */}
      <div>
        <h3 className="text-lg font-bold mb-4">New Courses</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-full aspect-[4/3] rounded-xl bg-purple-500 flex items-center justify-center">
              <SiMusicbrainz className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm font-bold">Music</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-full aspect-[4/3] rounded-xl bg-blue-500 flex items-center justify-center">
              <TbMathSymbols className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm font-bold">Math</span>
          </div>
        </div>
      </div>
    </div>
  );
}

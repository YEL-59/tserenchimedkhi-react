// import Chatlogo from '@/assets/Chatlogo';
// import Icon4 from '@/assets/Icon4';
// import { ArrowRight, Mic, Paperclip } from 'lucide-react';

// export default function Chat() {
//   const cardData = [
//     {
//       title: 'Quick Queries',
//       description: 'Instant answers to common migration-related questions.',
//     },
//     {
//       title: 'Application Assistance',
//       description: 'Help with forms, GTE writing, and submission tracking',
//     },
//     {
//       title: 'Details Pathway',
//       description:
//         'Comprehensive migration guidance, including visa assistance, job search, and legal advice.',
//     },
//     {
//       title: 'Migration Pathway Plans',
//       description:
//         'Explore Tailored Migration Pathway Plans to Achieve Your Dream Destination with AI',
//     },
//   ];

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-1 flex flex-col justify-center items-center p-10">
//         <div className="text-center flex flex-col justify-center items-center">
//           <Chatlogo className="flex justify-center items-center" />
//           <h1 className="text-black text-[38px] font-semibold leading-normal">
//             How can we <span className="text-red-600">assist</span> you today?
//           </h1>
//           <p className="text-[#767676] text-[20px] font-normal leading-[164%] max-w-4xl mx-auto">
//             Get expert migration guidance powered by AI agents specializing in
//             Visa Processing, Study Abroad, and Job Relocation. Choose the agent
//             that fits your needs and start your journey with ease.
//           </p>

//           <div className="flex flex-wrap justify-center gap-5 mt-10">
//             {cardData.map((card, index) => (
//               <div
//                 key={index}
//                 className="rounded-xl p-5 border w-[320px] text-left"
//               >
//                 <div className="flex justify-between gap-5 mb-5">
//                   <h1 className="text-[#666] text-[24px] font-medium leading-normal tracking-[-1.68px] max-w-11">
//                     {card.title}
//                   </h1>
//                   <Icon4 />
//                 </div>
//                 <p className="max-w-sm">{card.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="w-full max-w-7xl flex items-center border border-gray-300 bg-[#1E1F22] rounded-full p-2 shadow-md mb-5 mx-auto">
//         <div className="bg-[#424346] h-10 w-10 rounded-full flex justify-center items-center">
//           <Paperclip className="text-white w-6 h-6 cursor-pointer" />
//         </div>

//         <input
//           type="text"
//           placeholder="Type your prompt here"
//           className="flex-1 outline-none text-lg px-3 bg-transparent text-white placeholder-gray-400"
//         />
//         <Mic className="text-gray-500 w-6 h-6 cursor-pointer mx-3" />
//         <button className="bg-red-600 p-3 rounded-full">
//           <ArrowRight className="w-6 h-6 text-white" />
//         </button>
//       </div>
//     </div>
//   );
// }


import Chatlogo from '@/assets/Chatlogo';
import Icon4 from '@/assets/Icon4';
import { ArrowRight, Mic, Paperclip } from 'lucide-react';

export default function Chat() {
  const cardData = [
    {
      title: 'Quick Queries',
      description: 'Instant answers to common migration-related questions.',
    },
    {
      title: 'Application Assistance',
      description: 'Help with forms, GTE writing, and submission tracking',
    },
    {
      title: 'Details Pathway',
      description:
        'Comprehensive migration guidance, including visa assistance, job search, and legal advice.',
    },
    {
      title: 'Migration Pathway Plans',
      description:
        'Explore Tailored Migration Pathway Plans to Achieve Your Dream Destination with AI',
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-10">
        <div className="text-center flex flex-col justify-center items-center">
          {/* Chat Logo */}
          <Chatlogo className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />

          {/* Heading */}
          <h1 className="text-black text-[28px] sm:text-[32px] lg:text-[38px] font-semibold leading-normal mt-4 sm:mt-6 lg:mt-8">
            How can we <span className="text-red-600">assist</span> you today?
          </h1>

          {/* Description */}
          <p className="text-[#767676] text-sm sm:text-base lg:text-lg xl:text-xl font-normal leading-[164%] max-w-4xl mx-auto mt-4 sm:mt-6 lg:mt-8">
            Get expert migration guidance powered by AI agents specializing in
            Visa Processing, Study Abroad, and Job Relocation. Choose the agent
            that fits your needs and start your journey with ease.
          </p>

          {/* Cards Section */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-8 sm:mt-10 lg:mt-12">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="rounded-xl p-4 sm:p-5 border w-full sm:w-[300px] lg:w-[320px] text-left hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between gap-4 sm:gap-5 mb-4 sm:mb-5">
                  <h1 className="text-[#666] text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium leading-normal tracking-[-1.68px] max-w-11">
                    {card.title}
                  </h1>
                  <Icon4 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
                <p className="text-sm sm:text-base lg:text-lg max-w-sm">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="w-full max-w-7xl flex items-center border border-gray-300 bg-[#1E1F22] rounded-full p-2 sm:p-3 lg:p-4 shadow-md mb-5 mx-auto">
        {/* Attachment Icon */}
        <div className="bg-[#424346] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex justify-center items-center">
          <Paperclip className="text-white w-4 h-4 sm:w-6 sm:h-6 cursor-pointer" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Type your prompt here"
          className="flex-1 outline-none text-sm sm:text-base lg:text-lg px-3 bg-transparent text-white placeholder-gray-400"
        />

        {/* Microphone Icon */}
        <Mic className="text-gray-500 w-4 h-4 sm:w-6 sm:h-6 cursor-pointer mx-2 sm:mx-3" />

        {/* Send Button */}
        <button className="bg-red-600 p-2 sm:p-3 rounded-full hover:bg-red-700 transition-colors duration-300">
          <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
import {
  User,
  Search,
  CheckCircle,
  List,
  HelpCircle,
  LogOut,
  Github,
  Settings,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import Link from "next/link";

import { UserButton } from "@clerk/nextjs";

export function Sidebar() {
  return (
    <div className="flex flex-col h-full shadow-md">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            <div className="hover:bg-gray-200">
              <Link href={"/dashboard"}>
                <CommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span className="font-bold">Home</span>
                </CommandItem>
              </Link>
            </div>

            <div className="hover:bg-gray-200">
              <Link href={"/dashboard/findUserVerification"}>
                <CommandItem>
                  <Search className="mr-2 h-4 w-4" />
                  <span className="font-bold">
                    Find Other User Verification Detail
                  </span>
                </CommandItem>
              </Link>
            </div>

            <div className="hover:bg-gray-200">
              <Link href={"/dashboard/verify"}>
                <CommandItem>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  <span className="font-bold">Verify</span>
                </CommandItem>
              </Link>
            </div>

            <div className="hover:bg-gray-200">
              <Link href={"/dashboard/myVerifications"}>
                <CommandItem>
                  <List className="mr-2 h-4 w-4" />
                  <span className="font-bold">My Verifications</span>
                </CommandItem>
              </Link>
            </div>

            <div className="hover:bg-gray-200">
              <Link href={"/dashboard/howToUse"}>
                <CommandItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span className="font-bold">How to Use This</span>
                </CommandItem>
              </Link>
            </div>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Information">
            <div className="hover:bg-gray-200">
              <Link href={"https://github.com/preetsinghmakkar/proofify"}>
                <CommandItem>
                  <Github className="mr-2 h-4 w-4" />
                  <span className="font-bold">Github</span>
                </CommandItem>
              </Link>
            </div>
          </CommandGroup>
        </CommandList>
      </Command>
      <div className="mt-auto p-4 border-t">
        <div className="flex items-center space-x-2">
          <UserButton showName />
        </div>
      </div>
    </div>
  );
}

// import {
//   User,
//   Search,
//   CheckCircle,
//   List,
//   HelpCircle,
//   LogOut,
//   Github,
//   Settings,
// } from "lucide-react";

// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
// } from "@/components/ui/command";
// import Link from "next/link";

// import { UserButton } from "@clerk/nextjs";

// export function Sidebar() {
//   return (
//     <div className="flex flex-col h-full shadow-md bg-blue-600 text-white">
//       <Command>
//         <CommandInput
//           placeholder="Type a command or search..."
//           className="bg-blue-700 text-white"
//         />
//         <CommandList>
//           <CommandEmpty>No results found.</CommandEmpty>

//           <CommandGroup heading="Navigation">
//             <div className="hover:bg-blue-500 rounded-md p-2">
//               <Link href={"/dashboard"}>
//                 <CommandItem className="flex items-center space-x-2">
//                   <User className="mr-2 h-4 w-4" />
//                   <span>Home</span>
//                 </CommandItem>
//               </Link>
//             </div>

//             <div className="hover:bg-blue-500 rounded-md p-2">
//               <Link href={"/dashboard/findUserVerification"}>
//                 <CommandItem className="flex items-center space-x-2">
//                   <Search className="mr-2 h-4 w-4" />
//                   <span>Find Other User Verification Detail</span>
//                 </CommandItem>
//               </Link>
//             </div>

//             <div className="hover:bg-blue-500 rounded-md p-2">
//               <Link href={"/dashboard/verify"}>
//                 <CommandItem className="flex items-center space-x-2">
//                   <CheckCircle className="mr-2 h-4 w-4" />
//                   <span>Verify</span>
//                 </CommandItem>
//               </Link>
//             </div>

//             <div className="hover:bg-blue-500 rounded-md p-2">
//               <Link href={"/dashboard/myVerifications"}>
//                 <CommandItem className="flex items-center space-x-2">
//                   <List className="mr-2 h-4 w-4" />
//                   <span>My Verifications</span>
//                 </CommandItem>
//               </Link>
//             </div>

//             <div className="hover:bg-blue-500 rounded-md p-2">
//               <Link href={"/dashboard/howToUse"}>
//                 <CommandItem className="flex items-center space-x-2">
//                   <HelpCircle className="mr-2 h-4 w-4" />
//                   <span>How to Use This</span>
//                 </CommandItem>
//               </Link>
//             </div>
//           </CommandGroup>

//           <CommandSeparator />

//           <CommandGroup heading="Information">
//             <div className="hover:bg-blue-500 rounded-md p-2">
//               <Link href={"https://github.com/preetsinghmakkar/proofify"}>
//                 <CommandItem className="flex items-center space-x-2">
//                   <Github className="mr-2 h-4 w-4" />
//                   <span>Github</span>
//                 </CommandItem>
//               </Link>
//             </div>
//           </CommandGroup>
//         </CommandList>
//       </Command>
//       <div className="mt-auto p-4 border-t border-blue-400">
//         <div className="flex items-center space-x-2">
//           <UserButton showName />
//         </div>
//       </div>
//     </div>
//   );
// }

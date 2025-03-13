import AttachmentModal from '@/components/dashboard/attachment-modal';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';

export default function Chatscreen4() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <AttachmentModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <div className="flex-1">
          {/* Content Section */}
          <div>
            <div className="flex gap-2 pb-2 max-w-7xl mx-auto py-10">
              <div className="flex gap-2 pb-2 py-10">
                <ChevronLeft />
                back
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[#1E1F22] font-montserrat text-[24px] font-semibold leading-[164%] text-start max-w-7xl mx-auto">
              Compare Universities
            </h1>
            <div className="mt-10">
              <Table className="max-w-7xl mx-auto">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow className="bg-[#FFEFED]">
                    <TableHead className="w-[200px]"></TableHead>
                    <TableHead>University of Toronto</TableHead>
                    <TableHead>University of Melbourne</TableHead>
                    <TableHead>University of Newcastle</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Master of Computer Science
                    </TableCell>
                    <TableCell>Yes</TableCell>
                    <TableCell>No</TableCell>
                    <TableCell>No</TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Button Section - Always at the bottom */}
        <div className="w-full max-w-7xl mx-auto flex gap-5 mb-5">
          <div className="flex-1">
            <Button className="w-full">Download Comparison</Button>
          </div>
          <div className="flex-1">
            <Button className="w-full">Schedule Consultation</Button>
          </div>
        </div>
      </div>
    </>
  );
}

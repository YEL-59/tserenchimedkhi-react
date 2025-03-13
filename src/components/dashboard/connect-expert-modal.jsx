import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Clock4, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ConnectExpertModal({ isDialogOpen, setIsDialogOpen }) {
  // const params = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState('');

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="max-w-2xl">
        <div className="flex gap-5 justify-between">
          <div>
            <div className="h-12 w-12 rounded bg-red-500"></div>
            <h3>EasyMigrate Inc.</h3>
            <h1>Product Demo</h1>
            <div className="flex gap-2 justify-start items-center text-gray-400">
              <Clock4 size={15} /> <span>30 Min</span>
            </div>
            <div className="flex gap-2 justify-start items-center text-gray-400">
              <Phone size={15} /> <span>Phone call</span>
            </div>

            <p className="text-[#1A1A1A] font-montserrat text-[16px] not-italic font-normal leading-[150%]">
              This is an example of a meeting you would have with a potential
              customer to demonstrate your product.
            </p>

            <div className="flex justify-between gap-10 text-xs truncate bottom-2 absolute">
              <p>Cookie settings</p>
              <p>Report abuse</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 border-l-2 p-2">
            <DialogHeader>
              <DialogTitle>Select a Date & Time</DialogTitle>
            </DialogHeader>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="border rounded-lg p-4"
            />

            {selectedDate && (
              <p className="text-gray-700">
                {/* Selected Date: {format(selectedDate, 'PPP')} */}
              </p>
            )}

            <div className="text-start">
              <h1 className="text-start font-bold text-black">Time Zone</h1>
              <select
                value={selectedTimeZone}
                onChange={(e) => setSelectedTimeZone(e.target.value)}
                className="border p-2 rounded-md"
              >
                <option value="">Select Time Zone</option>
                <option value="GMT">GMT</option>
                <option value="EST">Eastern Standard Time (EST)</option>
                <option value="PST">Pacific Standard Time (PST)</option>
              </select>
              <Button className="rounded-full bg-transparent text-black border mt-2">
                Troubleshooting
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

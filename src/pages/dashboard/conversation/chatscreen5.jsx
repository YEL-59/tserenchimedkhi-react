import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Chatscreen5() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Button to Open Modal */}
      <Button
        className="bg-[#FF5241] text-white"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </Button>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modal Title</DialogTitle>
          </DialogHeader>
          <p>This is the modal content.</p>
        </DialogContent>
      </Dialog>
    </>
  );
}

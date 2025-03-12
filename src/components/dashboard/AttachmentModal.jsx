import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { X, Pause, UploadCloud, CirclePause, CircleX } from "lucide-react";
import Folder1 from "@/assets/folder1";

export default function AttachmentModal({ open, onClose }) {
  const [uploadProgress, setUploadProgress] = useState(65);
  const [timeRemaining, setTimeRemaining] = useState("30 seconds remaining");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-6">
        <DialogHeader>
          <DialogHeader className="font-semibold">Media Upload</DialogHeader>
          <DialogTitle className="text-sm font-normal">
            Add your documents here, and you can upload up to 5 files max
          </DialogTitle>
        </DialogHeader>

        <div className="border-2 border-dashed border-[#FF5241] rounded-lg p-6 text-center bg-gray-100 hover:bg-gray-200 transition">
          <div className="flex justify-center">
            <Folder1 className="text-gray-500 w-12 h-12 mb-3" />
          </div>

          <p className="text-gray-700 font-medium">
            Drag your file(s) to start uploading
          </p>
          <div className="flex items-center gap-2 my-2">
            <div className="flex-1 border-t border-gray-400"></div>
            <p className="text-sm text-gray-500">or</p>
            <div className="flex-1 border-t border-gray-400"></div>
          </div>

          <label className="cursor-pointer text-[#FF5241] font-semibold border border-[#FF5241] rounded px-3 p-1 mt-2 ">
            Browse files
            <input
              type="file"
              multiple
              accept=".jpg,.png,.svg,.zip"
              className="hidden"
            />
          </label>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Only supports <b>.jpg, .png, .svg</b> and <b>.zip</b> files
        </p>

        {/* Upload Progress */}
        <div className="mt-4  rounded-lg border border-[#FF5241] p-5">
          <h1 className="font-semibold">Uploading...</h1>
          <div className="flex justify-between text-sm text-gray-600 mt-1 mb-1">
            <div>
              <span>{uploadProgress}%</span>
              <span>.{timeRemaining}</span>
            </div>
            <div className="flex gap-2">
              <CirclePause />
              <CircleX />
            </div>
          </div>
          <Progress value={uploadProgress} className="h-2 rounded-full" />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            className="bg-red-500 px-4 py-2 rounded flex items-center gap-2 text-white hover:bg-red-600 transition"
            onClick={onClose}
          >
            <X size={16} /> Cancel
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

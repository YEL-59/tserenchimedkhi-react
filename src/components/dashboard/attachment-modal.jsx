/* eslint-disable no-unused-vars */
import Folder1 from '@/assets/folder1';
import pdfIcon from '@/assets/pdf-icon.svg';
import successIcon from '@/assets/success-icon.svg';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { CirclePause, CircleX } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Loading from './loading';

export default function AttachmentModal({ open, onClose }) {
  const [uploadProgress, setUploadProgress] = useState(65);
  const [timeRemaining, setTimeRemaining] = useState('30 seconds remaining');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 3000);
    }
  }, [loading]);

  return (
    <>
      {loading && <Loading />}
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
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="default"
              onClick={() => {
                setLoading(true);
                onClose();
              }}
            >
              Next
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={success} onOpenChange={setSuccess}>
        <DialogContent className="w-full max-w-[420px] aspect-[420/220] rounded-lg flex flex-col justify-center items-center gap-4">
          <div className="size-12">
            <img src={pdfIcon} alt="PDF Icon" className="w-full" />
          </div>
          <div className="text-center">
            <p className="mb-1">phoenix-document.pdf</p>
            <div className="flex gap-2 items-center justify-center">
              <img src={successIcon} alt="PDF Icon" className="size-4" />
              <p className="text-primary">Download complete</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

import docIcon from '@/assets/document-icon.svg';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[99999999] bg-black/10 backdrop-blur-sm">
      <div className="bg-background w-full max-w-[420px] aspect-[420/220] rounded-lg flex flex-col justify-center items-center gap-4">
        <div className="size-12">
          <img src={docIcon} alt="Document Icon" className="w-full" />
        </div>
        <div className="text-center">
          <p className="mb-1">Please wait for some moment</p>
          <p className="text-primary">Analyzing your Documents</p>
        </div>
      </div>
    </div>
  );
}

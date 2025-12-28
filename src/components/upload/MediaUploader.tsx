import React, { useRef } from 'react';

type MediaUploaderProps = {
  onChange: (file: File) => void;
  accept?: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
};

const MediaUploader: React.FC<MediaUploaderProps> = ({
  onChange,
  accept = 'image/*',
  disabled = false,
  children,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!disabled) {
      inputRef.current?.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div className={className}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        hidden
        onChange={handleFileChange}
      />

      <div onClick={handleClick} className="cursor-pointer">
        {children}
      </div>
    </div>
  );
};

export default MediaUploader;

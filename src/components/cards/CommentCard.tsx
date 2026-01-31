import StarRating from '../global/StarRating';

interface CommentCardProps {
  // You can define props here if needed in the future
  userIcon: React.ReactNode;
  userName: string;
  commentDate: string;
  ratingValue: number;
  commentText: string;
}

export default function CommentCard({
  userIcon,
  userName,
  commentDate,
  ratingValue,
  commentText,
}: CommentCardProps) {
  return (
    <div className="border border-global-3 px-4 py-3 rounded-2xl">
      <div className="flex justify-between mb-1">
        <div className="flex items-center gap-x-3">
          {userIcon}
          <div>
            <p className="mb-1">{userName}</p>
            <p className="text-xs font-light">{commentDate}</p>
          </div>
        </div>
        <StarRating value={ratingValue} />
      </div>
      <p className="font-light text-text-secondary">{commentText}</p>
    </div>
  );
}

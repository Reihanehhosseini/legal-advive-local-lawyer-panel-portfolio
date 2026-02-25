import { person_1 } from '../../assets/images/dev';
import QuestionCard from '../../components/cards/QuestionCard';
// import ReviewCard from '../../components/cards/ReviewCard';
import {
  CommentsIcon,
  EditIcon,
  EyeIcon,
  QuestionIcon,
  StarIcon,
  VerifiedIcon,
} from '../../components/ui/icons';

export default function AnswersPage() {
  return (
    <div className="p-4">
      <QuestionCard
        title="شکایت به خاطر استفاده از ملک تجاری به جای ملک مسکونی"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
        timeLabel="10 دقیقه پیش"
        answersCount={3}
        viewsCount={5}
        QuestionIcon={<QuestionIcon className="text-text-secondary" />}
        EyeIcon={<EyeIcon width={18} height={18} />}
        EditIcon={<EditIcon className="text-global-5" />}
        CommentsIcon={
          <CommentsIcon width={20} height={20} className="text-global-5" />
        }
        onEdit={() => console.log('edit')}
        onComments={() => console.log('comments')}
      />

      {/* <ReviewCard
        avatar={person_1}
        name="مژگان موفقی"
        role="وکیل پایه یک کانون وکلای دادگستری"
        rating={4.1}
        content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی ."
        isVerified
        VerifiedIcon={<VerifiedIcon className="text-accent-blue" />}
        StarIcon={<StarIcon className="text-global-5" />}
      /> */}
    </div>
  );
}

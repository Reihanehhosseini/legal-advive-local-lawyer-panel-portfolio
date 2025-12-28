import { Link } from 'react-router-dom';
import { UserIcon } from '../../../../ui/icons';

export default function Login() {
  return (
    <Link
      to={`/login`}
      className="hidden lg:flex px-5 py-2 bg-primary text-white rounded-full   items-center gap-2.5 hover:bg-secondary tr-200"
    >
      <UserIcon strokeWidth={1.5} />
      <span>ورود / ثبت نام</span>
    </Link>
  );
}

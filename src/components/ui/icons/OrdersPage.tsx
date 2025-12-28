import { SearchInput } from '../components/ui/inputs';

export default function OrdersPage() {
  return (
    <div>
      <p className="text-base font-bold text-primary mb-4">سفارش ها</p>

      <div className="flex items-center gap-x-2.5">
        <SearchInput onChange={(e) => console.log(e.target.value)} />
          <button type='button' className=''></button>
      </div>
    </div>
  );
}

interface ButtonFormikProps {
  active?:boolean
}
const ButtonFormik: React.FC<ButtonFormikProps> = ({active}) => {
  return (
    <div className="w-full flex flex-col justify-between items-center gap-6 lg:flex-row">
      <button
        className="bg-[#9DC88D] text-white w-full rounded-[25px] h-10"
        type="button"
        
      >
        لغو
      </button>
      <button
        type="submit"
        className="bg-[#4D774E] text-white w-full rounded-[25px] h-10"
        disabled={active}
        onClick={() => {
          alert("submit shod");
        }}
      >
        بروز رسانی
      </button>
    </div>
  );
};
export default ButtonFormik;

import { Formik, Form } from "formik";
import MainAreasCard from "../../components/cards/MainAreasCard";
import ButtonFormik from "../inputs/ButtonFormik";
import { mainCategories, subCategory } from "../../utils/Abilities";
import { type WorkSkillValue } from "../../types/formValues/FormValues";

const initialValues: WorkSkillValue = {
  mainAbility: [],
  subAbility: [],
  accepted: false,
};

export default function MainAreaOfWork() {
  return (
    <div className="w-full">
      <Formik<WorkSkillValue>
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("SUBMIT RESULT 👉", values);
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => {
          const toggleMainArea = (
            item: { id: number; title: string },
            checked: boolean,
          ) => {
            setFieldValue(
              "mainAbility",
              checked
                ? [
                    ...values.mainAbility,
                    { id: item.id, title: item.title, ability: [] },
                  ]
                : values.mainAbility.filter((i) => i.id !== item.id),
            );
          };

          const toggleMainAbility = (id: number, ability: string) => {
            setFieldValue(
              "mainAbility",
              values.mainAbility.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      ability: item.ability.includes(ability)
                        ? item.ability.filter((a) => a !== ability)
                        : [...item.ability, ability],
                    }
                  : item,
              ),
            );
          };

          const toggleSubArea = (
            item: { id: number; title: string },
            checked: boolean,
          ) => {
            setFieldValue(
              "subAbility",
              checked
                ? [
                    ...values.subAbility,
                    { id: item.id, title: item.title, ability: [] },
                  ]
                : values.subAbility.filter((i) => i.id !== item.id),
            );
          };

          const toggleSubAbility = (id: number, ability: string) => {
            setFieldValue(
              "subAbility",
              values.subAbility.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      ability: item.ability.includes(ability)
                        ? item.ability.filter((a) => a !== ability)
                        : [...item.ability, ability],
                    }
                  : item,
              ),
            );
          };
          return (
            <Form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-normal">حوزه‌های کاری اصلی</h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {mainCategories.map((cat) => (
                    <MainAreasCard
                      topAccardeon="flex-wrap gap-2 h-0 hidden flex lg:flex lg:h-auto"
                      bottomAccardeon="flex-wrap gap-2 h-auto flex lg:flex lg:h-auto"
                      key={cat.id}
                      {...cat}
                      checked={values.mainAbility.some((i) => i.id === cat.id)}
                      selectedAbility={
                        values.mainAbility.find((i) => i.id === cat.id)
                          ?.ability || []
                      }
                      onToggle={(checked) => toggleMainArea(cat, checked)}
                      onToggleAbility={(ability) =>
                        toggleMainAbility(cat.id, ability)
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-normal">
                  حوزه‌های کاری فرعی (حداکثر ۴ مورد)
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {subCategory.map((cat) => (
                    <MainAreasCard
                      topAccardeon="flex-wrap gap-2 h-0 hidden"
                      bottomAccardeon="flex-wrap gap-2 h-auto flex"
                      key={cat.id}
                      {...cat}
                      checked={values.subAbility.some((i) => i.id === cat.id)}
                      selectedAbility={
                        values.subAbility.find((i) => i.id === cat.id)
                          ?.ability || []
                      }
                      onToggle={(checked) => toggleSubArea(cat, checked)}
                      onToggleAbility={(ability) =>
                        toggleSubAbility(cat.id, ability)
                      }
                    />
                  ))}
                </div>
              </div>
              <label className="flex gap-2 items-start">
                <input
                  type="checkbox"
                  checked={values.accepted}
                  onChange={(e) => setFieldValue("accepted", e.target.checked)}
                />
                <span className="text-sm">
                  اینجانب تأیید می‌نمایم که در حوزه‌های کاری انتخاب‌شده دارای
                  تخصص بوده و مسئولیت پاسخگویی را بر عهده دارم.
                </span>
              </label>
              <div className="flex justify-end">
                <div className="w-full lg:w-[70%]">
                  <ButtonFormik active={!values.accepted} />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

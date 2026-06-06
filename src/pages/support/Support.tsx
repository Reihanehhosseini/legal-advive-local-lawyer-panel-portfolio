import { useState } from "react";
import SupportS2 from "../../components/support/SupportS2";
import SupportS1 from "../../components/support/SupportS1";
import { type supportValue } from "../../types/formValues/FormValues";

export default function Support() {
  const [supportCard, setSupportCard] = useState<boolean>(false);
  const [allValues, setAllValues] = useState<supportValue[]>([]);

  const addRequest = ()=>{
    setSupportCard(true)
  }

  const subbmitValue = (values: supportValue) => {
    setSupportCard(false);
    setAllValues((prev) => [...prev, values]);
  };
  return (
    <>
      {!supportCard && (
        <SupportS1 addRequest={addRequest} allValues={allValues} />
      )}
      {supportCard && <SupportS2 subbmitValue={subbmitValue} />}
    </>
  );
}

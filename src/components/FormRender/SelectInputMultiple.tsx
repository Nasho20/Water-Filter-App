import Select from "react-select";
import { useEffect, useState } from "react";
import { useController } from "react-hook-form";
import { errorToast } from "../../helpers/toasts";

interface SelectInputProps {
  input: any;
  isReadOnly: any;
  control: any;
  defaultValues?: any;
  setSelectedDepartment?: any;
  getValues: (key: string) => void;
}

export default function SelectInputMultiple({
  input,
  isReadOnly,
  control,
  defaultValues,
  setSelectedDepartment,
  getValues,
}: SelectInputProps) {

  const mappedDefaultValues = defaultValues?.users.map((dataItem: any) => ({
    label: dataItem.full_name,
    value: dataItem.id,
    role: dataItem?.role,
  }));

  const [value, setValue] = useState<any>(mappedDefaultValues);

  useEffect(() => {
    setValue(mappedDefaultValues);
  }, [defaultValues]);

  const handleChange = async (selectedOption: any, e: any) => {
    // try {
    //   if (e.removedValue && e.removedValue.value) {
    //     await removeEmployee(e.removedValue.value).unwrap();
    //   }
    //   field.onChange(selectedOption);
    //   setValue(selectedOption);
    //   const transformedSelectedOption = selectedOption.map((item: any) => ({
    //     id: item.value,
    //     full_name: item.label,
    //     role: item.role,
    //   }));
    //   const updatedDefaultValues = {
    //     ...defaultValues,
    //     name: getValues("name"),
    //     description: getValues("description"),
    //     users: transformedSelectedOption,
    //   };
    //   setSelectedDepartment(updatedDefaultValues);
    // } catch (error: any) {
    //   errorToast(error.data.error.message);
    //   return;
    // }
  };

  return (
    <Select
      value={value}
      isMulti={input.multiple}
      options={input.options}
      onChange={handleChange}
      className="basic-single"
      classNamePrefix="select"
      isDisabled={isReadOnly}
      isSearchable={true}
    />
  );
}

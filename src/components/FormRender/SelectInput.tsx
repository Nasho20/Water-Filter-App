import Select from "react-select";
import { useEffect, useState } from "react";
import { useController } from "react-hook-form";

interface SelectInputProps {
  input: any;
  isReadOnly: any;
  control: any;
}

export default function SelectInput({
  input,
  isReadOnly,
  control,
}: SelectInputProps) {
  const { field } = useController({
    control,
    name: input?.name ?? input.label,
  });

  const [value, setValue] = useState(
    input?.options?.find((opt: any) => opt.value === field.value)
  );

  useEffect(() => {
    setValue(input?.options?.find((opt: any) => opt.value === field?.value));
  }, [field?.value, input.options]);

  return (
    <Select
      value={value}
      isMulti={input?.multiple}
      options={input?.options}
      onChange={(selectedOption: any) => {
        if (input?.multiple) {
          field.onChange(selectedOption);
          setValue(selectedOption);
        } else {
          field.onChange(selectedOption?.value);
          setValue(selectedOption?.value);
        }
      }}
      className="basic-single"
      classNamePrefix="select"
      isDisabled={isReadOnly}
      isSearchable={true}
    />
  );
}

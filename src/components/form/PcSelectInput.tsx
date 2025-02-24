import { Form, Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TPcSelactprops = {
  name: string;
  label?: string;
  requiredField?: "true" | "false";
  options: { value: string | number | boolean; label: string }[];
  placeholder?: string;
  disabled?: boolean;
};
const PcSelactInput = ({
  name,
  label,
  options,
  placeholder,
  disabled,
}: TPcSelactprops) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Select
              disabled={disabled}
              placeholder={placeholder}
              {...field}
              options={options}
            />
            {error && <span style={{ color: "red" }}>{error.message}</span>}
          </Form.Item>
        )}
      ></Controller>
    </>
  );
};

export default PcSelactInput;

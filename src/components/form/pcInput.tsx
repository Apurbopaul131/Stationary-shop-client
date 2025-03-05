import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TPcInput = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
};
const PcInput = ({ type, name, label, placeholder }: TPcInput) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control} //optional because use form provider
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input
              placeholder={placeholder}
              size="large"
              type={type}
              {...field}
            />
            {error && <span style={{ color: "red" }}>{error.message}</span>}
          </Form.Item>
        )}
      ></Controller>
    </>
  );
};

export default PcInput;

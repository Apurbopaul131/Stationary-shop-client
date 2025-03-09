import { Form, InputNumber } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TPcNumberInput = {
  name: string;
  label?: string;
  placeholder?: string;
};
const PcNumberInput = ({ name, label, placeholder }: TPcNumberInput) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control} //optional because use form provider
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <InputNumber
              style={{ width: "100%" }}
              placeholder={placeholder}
              size="large"
              min={1}
              {...field}
            />
            {error && <span style={{ color: "red" }}>{error.message}</span>}
          </Form.Item>
        )}
      ></Controller>
    </>
  );
};

export default PcNumberInput;

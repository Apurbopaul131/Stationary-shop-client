import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Controller, useFormContext } from "react-hook-form";

type TPcTextarea = {
  name: string;
  label?: string;
  rows: number;
  placeholer?: string;
};
const PcTextarea = ({ name, label, rows, placeholer }: TPcTextarea) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control} //optional because use form provider
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <TextArea
              placeholder={placeholer}
              size="large"
              rows={rows}
              {...field}
            />
            {error && <span style={{ color: "red" }}>{error.message}</span>}
          </Form.Item>
        )}
      ></Controller>
    </>
  );
};

export default PcTextarea;

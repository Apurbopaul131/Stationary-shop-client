import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TFileinputprops = {
  name: string;
  label: string;
};
const PcFileinput = ({ name, label }: TFileinputprops) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, ...field },
        fieldState: { error },
      }) => {
        return (
          <Form.Item label={label}>
            <Input
              {...field}
              type="file"
              onChange={(e) => onChange(e.target.files?.[0])}
              value={value?.fileName}
            />
            {error && <span style={{ color: "red" }}>{error.message}</span>}
          </Form.Item>
        );
      }}
    ></Controller>
  );
};

export default PcFileinput;

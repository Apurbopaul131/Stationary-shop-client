/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TpcFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};
type TPcFormprops = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  style?: Record<string, unknown>;
} & TpcFormConfig;

const PcForm = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
  style,
}: TPcFormprops) => {
  const phformConfig: TpcFormConfig = {};
  //handle default value props
  if (defaultValues) {
    phformConfig["defaultValues"] = defaultValues;
  }
  //resolve the validation
  if (resolver) {
    phformConfig["resolver"] = resolver;
  }

  //use reack-hook form
  const methods = useForm(phformConfig);

  //use an wrapper function is used to submit data and reset the form after submit
  const submit: SubmitHandler<FieldValues> = (data) => {
    //This function is used for submit data into server
    onSubmit(data);
    //reset the form
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form
        style={style}
        layout="vertical"
        onFinish={methods.handleSubmit(submit)}
      >
        {children}
      </Form>
    </FormProvider>
  );
};

export default PcForm;

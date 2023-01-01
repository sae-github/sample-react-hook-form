import {
  Button,
  Input,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const FormProviderForm = () => {
  const textForm = useForm();
  const emailForm = useForm();

  const { register } = textForm;

  return (
    <CustomBox>
      <FormProvider {...textForm}>
        <Stack
          component="form"
          noValidate
          onSubmit={textForm.handleSubmit((data) => console.log(data))}
        >
          <Box>
            <TextField
              {...register("firstName", {
                required: "必須項目です",
                maxLength: {
                  value: 6,
                  message: "タイトルは6文字以内で入力してください",
                },
              })}
            />
            <ErrorMessage
              name="firstName"
              errors={textForm.formState.errors}
              render={({ message }) => <p>{message}</p>}
            />
          </Box>
          <Box mt={2}>
            <CustomTextareaAutosize
              {...register("textarea", {
                required: "必須項目です",
                maxLength: {
                  value: 10,
                  message: "テキストは10文字以内で入力してください",
                },
              })}
            />
            <ErrorMessage
              name="textarea"
              errors={textForm.formState.errors}
              render={({ message }) => <p>{message}</p>}
            />
          </Box>
          <Box mt={2}>
            <Button variant="outlined" type="submit">
              保存する
            </Button>
          </Box>
        </Stack>
      </FormProvider>
      <Stack
        component="form"
        noValidate
        onSubmit={emailForm.handleSubmit((data) => console.log(data))}
      >
        <EmailWrapper mt={3} pt={3}>
          <TextField
            {...emailForm.register("email", {
              required: "必須項目です",
              pattern: {
                value:
                  /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
                message: "メールアドレス形式で入力してください",
              },
            })}
          />
          <ErrorMessage
            name="email"
            errors={emailForm.formState.errors}
            render={({ message }) => <p>{message}</p>}
          />
          <Button type="submit" variant="outlined">
            テスト配信する
          </Button>
        </EmailWrapper>
      </Stack>
    </CustomBox>
  );
};

const CustomBox = styled(Box)`
  border: 1px solid #ccc;
  padding: 20px;
`;

const EmailWrapper = styled(Box)`
  border-top: 1px solid #ececec;
`;

const CustomTextareaAutosize = styled(TextareaAutosize)`
  resize: vertical;
  width: 80%;
  min-height: 200px;
`;

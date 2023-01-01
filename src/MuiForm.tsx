import {
  Button,
  Input,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const MuiForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      textarea: "",
    },
  });

  const { handleSubmit: handleEmailSend, control: emailControl } = useForm({
    defaultValues: {
      email: "",
    },
  });

  return (
    <CustomBox>
      <Stack
        component="form"
        noValidate
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <Box>
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: "必須項目です",
              maxLength: {
                value: 6,
                message: "タイトルは6文字以内で入力してください",
              },
            }}
            render={({ field }) => {
              return <TextField {...field} />;
            }}
          />
          <ErrorMessage
            errors={errors}
            name="firstName"
            render={({ message }) => <p>{message}</p>}
          />
        </Box>
        <Box mt={2}>
          <Controller
            name="textarea"
            control={control}
            rules={{
              required: "必須項目です",
              maxLength: {
                value: 10,
                message: "テキストは10文字以内で入力してください",
              },
            }}
            render={({ field, formState }) => {
              return (
                <>
                  <CustomTextareaAutosize {...field} />
                  <ErrorMessage
                    errors={formState.errors}
                    name="textarea"
                    render={({ message }) => <p>{message}</p>}
                  />
                </>
              );
            }}
          />
        </Box>
        <Box mt={2}>
          <Button variant="outlined" type="submit">
            保存する
          </Button>
        </Box>
      </Stack>
      <Stack
        component="form"
        noValidate
        onSubmit={handleEmailSend((data) => console.log(data))}
      >
        <EmailWrapper mt={3} pt={3}>
          <Controller
            name="email"
            control={emailControl}
            rules={{
              required: "必須項目です",
              pattern: {
                value:
                  /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
                message: "メールアドレス形式で入力してください",
              },
            }}
            render={({ field, fieldState }) => {
              return (
                <TextField
                  id="email"
                  label="メールアドレス"
                  variant="outlined"
                  {...field}
                  helperText={fieldState.error?.message}
                />
              );
            }}
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

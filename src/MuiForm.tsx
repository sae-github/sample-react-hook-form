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

export const MuiForm = () => {
  const { handleSubmit, control } = useForm({
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
            rules={{ required: true }}
            render={({ field }) => {
              return <Input {...field} />;
            }}
          />
        </Box>
        <Box mt={2}>
          <Controller
            name="textarea"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return <CustomTextareaAutosize {...field} />;
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
            render={({ field }) => {
              return (
                <TextField
                  id="email"
                  label="メールアドレス"
                  variant="outlined"
                  {...field}
                />
              );
            }}
          />
          <Button type="submit">テスト配信する</Button>
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

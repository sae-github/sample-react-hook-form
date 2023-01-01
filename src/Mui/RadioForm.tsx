import { ErrorMessage } from "@hookform/error-message";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

const data = {
  survey: {
    questions: [
      {
        question: "毎日よく眠れているか",
        options: [
          {
            questionMappingOptionId: 1,
            description: "とても当てはまる",
          },
          {
            questionMappingOptionId: 2,
            description: "当てはまる",
          },
          {
            questionMappingOptionId: 3,
            description: "当てはまらない",
          },
          {
            questionMappingOptionId: 4,
            description: "どちらとも言えない",
          },
        ],
      },
      {
        question: "毎日よくご飯を食べているか",
        options: [
          {
            questionMappingOptionId: 1,
            description: "とても当てはまる",
          },
          {
            questionMappingOptionId: 2,
            description: "当てはまる",
          },
          {
            questionMappingOptionId: 3,
            description: "当てはまらない",
          },
          {
            questionMappingOptionId: 4,
            description: "どちらとも言えない",
          },
        ],
      },
      {
        question: "毎日楽しいと思うか",
        options: [
          {
            questionMappingOptionId: 1,
            description: "とても当てはまる",
          },
          {
            questionMappingOptionId: 2,
            description: "当てはまる",
          },
          {
            questionMappingOptionId: 3,
            description: "当てはまらない",
          },
          {
            questionMappingOptionId: 4,
            description: "どちらとも言えない",
          },
        ],
      },
    ],
  },
};

export const RadioForm = () => {
  const { register, handleSubmit, control } = useForm();

  return (
    <CustomContainer>
      <Stack
        component="form"
        noValidate
        onSubmit={handleSubmit((data) => console.log(data))}
        mt={6}
      >
        {data.survey.questions.map((question) => {
          return (
            <QuestionSection key={question.question}>
              <QuestionTitle>
                {question.question}
                <RequireLabel>必須</RequireLabel>
              </QuestionTitle>
              <Box mt={2}>
                <FormControl>
                  <Controller
                    name={question.question}
                    control={control}
                    rules={{
                      required: { value: true, message: "必須項目です" },
                    }}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <>
                          <RadioGroup
                            aria-labelledby="answer-radio-buttons-group-label"
                            row
                          >
                            {question.options.map((option) => {
                              return (
                                <FormControlLabel
                                  {...field}
                                  key={
                                    question.question +
                                    option.questionMappingOptionId
                                  }
                                  value={option.questionMappingOptionId}
                                  control={<Radio />}
                                  label={option.description}
                                />
                              );
                            })}
                          </RadioGroup>
                          {error && (
                            <p style={{ color: "red", fontSize: "12px" }}>
                              {error.message}
                            </p>
                          )}
                        </>
                      );
                    }}
                  />
                </FormControl>
              </Box>
            </QuestionSection>
          );
        })}
        <Box mt={8} textAlign="center" maxWidth={300} mx="auto">
          <CustomSubmitButton
            variant="contained"
            size="large"
            fullWidth={true}
            type="submit"
          >
            送信
          </CustomSubmitButton>
        </Box>
      </Stack>
    </CustomContainer>
  );
};

const QuestionTitle = styled.h2`
  margin: 0;
  background-color: #f7f7f7;
  padding: 10px;
  color: #333;
  font-size: 16px;
`;

const QuestionSection = styled.section`
  margin-bottom: 30px;
`;

const CustomContainer = styled(Container)`
  padding: 30px 20px;
`;

const CustomSubmitButton = styled(Button)`
  background-color: #eb8435;
  &:hover {
    opacity: 0.8;
    background-color: #eb8435;
  }
`;

const RequireLabel = styled.span`
  background-color: #e6553a;
  color: #fff;
  padding: 5px 8px;
  font-size: 12px;
  border-radius: 10px;
  margin-left: 10px;
`;

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function StandardForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  // 引数には登録したfieldの値が渡る
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // 入力値の名前を渡すとinput毎に値を監視できる
  console.log(watch("example")); 

  return (
    // "handleSubmit "は "onSubmit "が起こる前に入力の検証を行う
    <form onSubmit={handleSubmit(onSubmit)}>
     {/* "register "関数を呼び出して、入力をHookに登録する */}
      <input defaultValue="test" {...register("example")} />
      {/* requiredなど、標準的なHTML検証ルールで検証を行う */}
      <input {...register("exampleRequired", { required: true })} />
      {/* フィールドのバリデーションに失敗するとエラーが返される*/}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}

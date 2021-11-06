import React from "react";
import { useForm } from "react-hook-form";
import DefaultTemp from "../components/DefaultTemp";
import styled from "styled-components";
const WafComponent = styled.div``;
function Waf() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <WafComponent>
      <DefaultTemp>
        <form onSubmit={handleSubmit(onSubmit)}>
          firstName:
          <input {...register("firstName")} /> {/* register an input */}
          lastName:
          <input {...register("lastName", { required: true })} />
          {errors.lastName && <p>Last name is required.</p>}
          age:
          <input {...register("age", { pattern: /\d+/ })} />
          {errors.age && <p>Please enter number for age.</p>}
          <input type="submit" />
        </form>
      </DefaultTemp>
    </WafComponent>
  );
}

export default Waf;

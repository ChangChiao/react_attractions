import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import { useForm } from "react-hook-form";
function BlackListPopup(props) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [age, setAge] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAge(22);
    }, 3000);
  }, []);

  useEffect(() => {
    setValue("age", age);
  }, [age, setValue]);

  return (
    <Popup
      closePop={props.closePop}
      size=""
      header={<h1>Here might be a page title</h1>}
      footer={
        <>
          <button className="btn red">取消</button>
          <button type="submit" form="black-form" className="btn blue">
            送出
          </button>
        </>
      }
    >
      <form id="black-form" onSubmit={handleSubmit(onSubmit)}>
        <ul className="popup-list">
          <li>
            <span class="list-title">Time</span>
            <input {...register("Time", { valueAsNumber: true, validate: (value) => value === 2 })} />
            {errors.Time && <p>time is positive</p>}
            {/* register an input */}
          </li>
          <li>
            <span class="list-title">Auth</span>
            <input defaultValue="test" {...register("Auth", { required: true, maxLength: 10 })} />
            {errors.Auth && <p>auth is required.</p>}
          </li>
          <li>
            <span class="list-title">Action</span>
            <input placeholder="Action" {...register("age", { pattern: /\d+/, max: 100 })} />
            {errors.age && <p>Please enter number for age.</p>}
          </li>
          <li>
            <span class="list-title">Status</span>
            <input {...register("Status", { required: true })} defaultChecked type="radio" id="Active" value="Active" />
            <label for="Active">Active</label>
            <input {...register("Status", { required: true })} type="radio" id="Inactive" value="Inactive" />
            <label for="Inactive">Inactive</label>
          </li>
          <li>
            <span class="list-title">IP</span>
            <select defaultValue={"請選擇ip"} {...register("Title", { required: true })}>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </li>
          <li>
            <span class="list-title">CONTENT</span>
            <textarea {...register("content")} />
          </li>
        </ul>
      </form>
    </Popup>
  );
}

export default BlackListPopup;

"use client";

import { signIn } from "next-auth/react";
import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { Heading } from "../Heading";
import { InputDefault } from "../Inputs/InputDefault";
import { Modal } from "./Modal";
import toast from "react-hot-toast";
import { Button } from "../Button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/navigation";

export function LoginModal() {
  const router = useRouter();
  const registerModel = useRegisterModal();
  const loginModel = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const email = watch("email");
  const password = watch("password");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((response) => {
      setIsLoading(false);

      if (response?.ok) {
        toast.success("Logged in");
        router.refresh();
        loginModel.onClose();
      }

      if (response?.error) {
        toast.error(response.error);
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome comeback" subtitle="Login to your account!" />
      <InputDefault
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        value={email}
      />
      <InputDefault
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
        value={password}
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        onClick={() => {}}
        label="Continue with Google"
        icon={FcGoogle}
        outline
      />
      <Button
        onClick={() => {}}
        label="Continue with Github"
        icon={AiFillGithub}
        outline
      />
      <div
        className="
          text-neutral-500
          text-center
          mt-4
          font-light
        "
      >
        <div className="justify-center flex flex-row items-center gap-2">
          <div>Already have an account?</div>
          <div
            onClick={registerModel.onClose}
            className="
            text-neutral-950
            cursor-pointer
            hover:underline
          "
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModel.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModel.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

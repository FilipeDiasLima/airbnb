"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { Heading } from "../Heading";
import { InputDefault } from "../Inputs/InputDefault";
import { Modal } from "./Modal";
import toast from "react-hot-toast";
import { Button } from "../Button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import useLoginModal from "@/app/hooks/useLoginModal";

export function RegisterModal() {
  const registerModel = useRegisterModal();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const email = watch("email");
  const name = watch("name");
  const password = watch("password");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Registered!");
        registerModal.onClose();
        loginModal.onOpen();
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggle = useCallback(() => {
    loginModal.onOpen();
    registerModel.onClose();
  }, [loginModal, registerModel]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Bem-vindo ao Airbnb" subtitle="Faça seu cadastro!" />
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
        id="name"
        label="Nome"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        value={name}
      />
      <InputDefault
        id="password"
        label="Senha"
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
        onClick={() => signIn("google")}
        label="Continue com o Google"
        icon={FcGoogle}
        outline
      />
      <Button
        onClick={() => signIn("github")}
        label="Continue com o Github"
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
          <div>Já possui uma conta?</div>
          <div
            onClick={toggle}
            className="
            text-neutral-950
            cursor-pointer
            hover:underline
          "
          >
            Entrar
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModel.isOpen}
      title="Cadastro"
      actionLabel="Continuar"
      onClose={registerModel.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

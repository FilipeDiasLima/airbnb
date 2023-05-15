"use client";

import { useEffect } from "react";
import { EmptyState } from "./components/EmptyState";

interface ErrorStateProps {
  error: Error;
}

export default function Error({ error }: ErrorStateProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
}
"use client";

import { Range } from "react-date-range";
import { Calendar } from "../Inputs/Calendar";
import { Button } from "../Button";

interface ListingReservationProps {
  price: number;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  dateRange: Range;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

export function ListingReservation({
  dateRange,
  disabledDates,
  onChangeDate,
  onSubmit,
  price,
  totalPrice,
  disabled,
}: ListingReservationProps) {
  return (
    <div
      className="
        bg-white
        rounded-xl
        border-[1px]
        border-neutral-100
        overflow-hidden
      "
    >
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">R$ {price}</div>
        <div className="font-light text-neutral-600">noite</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reservar" onClick={onSubmit} />
      </div>
      <div
        className="
          p-4
          flex
          flex-row
          items-center
          justify-between
          font-semibold
          text-lg
        "
      >
        <div>Total</div>
        <div>R$ {totalPrice}</div>
      </div>
    </div>
  );
}

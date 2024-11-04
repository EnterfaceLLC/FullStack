"use client";

//* GLUESTACK//
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";

//* ACTION//
import { updateOrderStatus } from "../actions";

//* STATUS CONST//
const orderStatus = [
  {
    value: "NEW",
    label: "New",
  },
  {
    value: "PAID",
    label: "Paid",
  },
  {
    value: "SHIPPED",
    label: "Shipped",
  },
  {
    value: "DELIVERED",
    label: "Delivered",
  },
];

//* STATUS SELECTOR//
export default function Selector({
  status,
  id,
}: {
  status: string;
  id: number;
}) {
  return (
    <Select
      defaultValue={status}
      onValueChange={(value) => updateOrderStatus(id, value)}
    >
      <SelectTrigger>
        <SelectInput placeholder="Select option" />
        <SelectIcon className="mr-3" />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>

          {orderStatus.map((status) => (
            <SelectItem
              key={status.value}
              label={status.label}
              value={status.value}
            />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}

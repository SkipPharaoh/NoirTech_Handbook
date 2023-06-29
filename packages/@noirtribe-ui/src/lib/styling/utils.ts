import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pick(beingPicked: string, ...inputs: string[]) {
  const beingPickedArray = beingPicked.split(" ");
  const inputsArray = inputs.flatMap((input) => input.split(" "));

  const filtered = beingPickedArray.filter(
    (classValue) => !inputsArray.includes(classValue)
  );

  const joinedFiltered = filtered.join(" ");

  return joinedFiltered;
}

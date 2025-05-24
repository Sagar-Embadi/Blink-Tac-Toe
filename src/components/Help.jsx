import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import React from "react";

export default function Help() {
  return (
    <Dialog>
      <DialogTrigger>Help</DialogTrigger>
      <DialogContent>
        <DialogTitle>How to Play</DialogTitle>
        <DialogDescription>
          <li>Choose an emoji category for each player.</li>
          <li>Each player can place only 3 emojis.</li>
          <li>The oldest disappears if a 4th is placed.</li>
          <li>
            Form a line of 3 of your emojis to win (horizontally, vertically, or
            diagonally).
          </li>
          <li>Turn alternates between players.</li>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

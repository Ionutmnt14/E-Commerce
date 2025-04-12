"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

const SortByBtn = () => {
  const [btn, setBtn] = useState(false);

  return (
    <DropdownMenu onOpenChange={(prev) => setBtn(!prev)}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full">
          Sort By
          {btn ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
        <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
        <DropdownMenuItem>Recomended</DropdownMenuItem>
        <DropdownMenuItem>Name: A-Z</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortByBtn;

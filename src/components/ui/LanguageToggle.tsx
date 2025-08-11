"use client";

import { useLanguage } from "@/context/LanguageProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Select defaultValue={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-[60px] md:w-[70px] border-white/50 dark:">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 hidden md:block" />
          <SelectValue>{language.toUpperCase()}</SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="de">Deutsch</SelectItem>
      </SelectContent>
    </Select>
  );
}

"use client";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./tooltip";
import { useState } from "react";
import { Moon, MoonIcon, SunIcon } from "lucide-react";

type Props = {
	className?: string;
};

export function LightDarkToggle({ className }: Props) {
	const [isDark, setIsDark] = useState(true);

	function toggleTheme() {
    setIsDark(!isDark);
		document.body.classList.toggle("dark");
	}

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger className={className} onClick={toggleTheme}>
					{isDark ? <MoonIcon /> : <SunIcon />}
				</TooltipTrigger>
				<TooltipContent sideOffset={4} align="center" side="top">
					{isDark ? "Light Mode" : "Dark Mode"}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

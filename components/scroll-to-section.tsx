"use client";

import { useEffect } from "react";
import type { SectionId } from "./sections";

export function ScrollToSection({ sectionId }: { sectionId: SectionId }) {
	useEffect(() => {
		document.getElementById(sectionId)?.scrollIntoView();
	}, [sectionId]);

	return null;
}

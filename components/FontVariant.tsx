"use client";

import { useEffect } from "react";

const variants = new Set(["trebuchet", "manrope", "space", "dm", "editorial"]);

export default function FontVariant() {
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("font");
    document.documentElement.dataset.font = value && variants.has(value) ? value : "space";
  }, []);

  return null;
}

import type { Config } from "tailwindcss";
import Typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [Typography],
} satisfies Config;

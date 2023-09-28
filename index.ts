import mdx from "@mdx-js/esbuild";

Bun.build({
	entrypoints: ["index.tsx"],
	outdir: "build",
	plugins: [mdx()],
});

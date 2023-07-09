import { config, collection, fields, LocalConfig, GitHubConfig } from "@keystatic/core";

const storage: LocalConfig["storage"] | GitHubConfig["storage"] =
  process.env.NODE_ENV === "development"
    ? { kind: "local" }
    : {
        kind: "github",
        repo: {
          owner: process.env.OWNER ? process.env.OWNER : "arufars",
          name: "keystatic-landing-page",
        },
      };

export default config({
  storage,
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "posts/*",

      format: { contentField: "content", data: "yaml" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/images/avatars",
            publicPath: "/images/avatars/",
            schema: {
              alt: fields.text({ label: "Alt" }),
            },
          },
        }),
      },
    }),
  },
});

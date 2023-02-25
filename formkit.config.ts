import { DefaultConfigOptions } from "@formkit/vue";
import { createAutoAnimatePlugin } from "@formkit/addons";
import createTooltipPlugin from "@/formkit-plugins/tooltip-plugin";
import "@/formkit-plugins/tooltip-plugin/style.css";
import { generateClasses } from "@formkit/themes";

const config: DefaultConfigOptions = {
  plugins: [createAutoAnimatePlugin(), createTooltipPlugin()],
  config: {
    classes: generateClasses({
      global: {
        label: "text-red-400 formkit-invalid:text-red-900",
      },
      "family:box": {},
      "family:button": {},
      "family:dropdown": {},
      "family:text": {
        inner: "bg-blue-500",
      },
      text: { label: "bg-blue-500" },
      password: {},
      url: {},
    }),
  },
  messages: {
    en: {
      validation: {
        username_is_unique({ args, name, node }) {
          return `${node.value} is already taken`;
        },
      },
    },
  },
  rules: {
    username_is_unique(node) {
      const usernames = ["zlarkisz", "admin", "root"];
      return !usernames.includes(node.value as string);
    },
  },
};

export default config;

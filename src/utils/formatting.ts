interface FormatData {
  [key: string]: string | boolean;
}

export function formatTemplate(template: string, data: FormatData): string {
  let formatted = template;

  Object.keys(data).forEach((key) => {
    if (typeof data[key] === "string") {
      formatted = formatted.replace(new RegExp(`{${key}}`, "g"), data[key] as string);
    }
  });

  formatted = formatted.replace(/{#hasChildren}(.+?){\/hasChildren}/g, (_, content) => {
    return data.hasChildren ? content : "";
  });

  return formatted;
}

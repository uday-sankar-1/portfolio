export const downloadFile = async () => {
  const response = await fetch(`https://localhost:7124/api/Resume/download/2`);
  if (!response.ok) throw new Error("Failed to download file");

  const cd = response.headers.get("Content-Disposition") || "";
  const match = cd.match(/filename\*=UTF-8''([^;]+)|filename="([^"]+)"/);
  const fileName = match?.[1] ? decodeURIComponent(match[1]) : match?.[2] || "resume.pdf";

  const url = URL.createObjectURL(await response.blob());
  const link = Object.assign(document.createElement("a"), { href: url, download: fileName });
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};
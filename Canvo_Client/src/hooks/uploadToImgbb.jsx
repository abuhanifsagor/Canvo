export async function uploadToImgbb(file, apiKey) {
  if (!file) return null;

  const toBase64 = (f) =>
    new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = () => res(reader.result.split(",")[1]);
      reader.onerror = rej;
      reader.readAsDataURL(f);
    });

  const base64 = await toBase64(file);

  const form = new FormData();
  form.append("image", base64);

  const resp = await fetch(
    `https://api.imgbb.com/1/upload?key=${apiKey}`,
    { method: "POST", body: form }
  );

  const json = await resp.json();
  return json.data?.url || null;
}

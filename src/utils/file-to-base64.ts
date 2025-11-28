export default async function fileToBase64(file: File): Promise<string | null> {
  if (!(file instanceof File)) {
    return null;
  }

  const reader = new FileReader();
  reader.readAsDataURL(file);

  return new Promise((resolve) => {
    reader.addEventListener('load', () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      }
    });
  });
}

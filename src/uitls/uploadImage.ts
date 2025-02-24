export const uploadImageToCloudinary = async (imageFile: File) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", "g3wftqry");
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dvqqxighm/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );
  const result = await res.json();
  return result.secure_url;
};

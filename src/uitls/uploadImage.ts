export const uploadImageToCloudinary = async (imageFile: File) => {
  const preset_key = "g3wftqry";
  const cloud_name = "dvqqxighm";
  const formData = new FormData();
  // const file = data:${fileInput1.files[0].type};base64,` + ${fileInput.value[0]}
  formData.append("file", imageFile);
  formData.append("upload_preset", preset_key);
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const result = await res.json();
  return result.secure_url;
};

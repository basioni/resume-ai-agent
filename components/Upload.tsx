"use client";

export default function Upload() {
  const handleUpload = async (e: any) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="p-6 border rounded-xl">
      <input type="file" onChange={handleUpload} />
    </div>
  );
}
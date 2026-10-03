export function CardComponent({ gambar, deskripsi, judul }) {
  return (
    <div className="max-w-5m bg-blue-200 rounded-xl p-2.5">
      <img src={gambar} alt="gambar" className="rounded-t-x1" />
      <div className="p-2">
        <h1 className="font-bold text-x1">{judul}</h1>
        <p className="text-lg text-blue-600">{deskripsi}</p>
      </div>
    </div>
  );
}

export default function StatusBadge({ status }: { status: string }) {
  const colors: any = {
    pending: "bg-yellow-500",
    running: "bg-blue-500",
    completed: "bg-green-500",
  };

  return (
    <span className={`px-2 py-1 text-white rounded ${colors[status]}`}>
      {status}
    </span>
  );
}

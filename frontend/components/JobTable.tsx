import StatusBadge from "./StatusBadge";

export default function JobTable({ jobs, onRun }: any) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Task</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job: any) => (
          <tr key={job.id}>
            <td>{job.taskName}</td>
            <td>{job.priority}</td>
            <td><StatusBadge status={job.status} /></td>
            <td>
              <button onClick={() => onRun(job.id)}>Run</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

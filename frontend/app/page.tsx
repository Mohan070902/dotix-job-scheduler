"use client";

import { useEffect, useState } from "react";
import { getJobs, runJob } from "../services/api";

export default function Dashboard() {
  const [jobs, setJobs] = useState<any[]>([]);

  const loadJobs = async () => {
    const res = await getJobs();
    setJobs(res.data);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Job Dashboard</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Task</th>
            <th className="p-2">Priority</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border-t">
              <td className="p-2">{job.taskName}</td>
              <td className="p-2">{job.priority}</td>
              <td className="p-2">{job.status}</td>
              <td className="p-2">
                <button
                  onClick={() => runJob(job.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Run Job
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import {
  EllipsisVerticalIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export const FILTER_ALL = "All";
export const FILTER_ACTIVE = "Active";
export const FILTER_COMPLETED = "Completed";

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

export const tasks: Task[] = [
  {
    id: 1,
    title: "Do homework",
    description: "Complete math and science assignments",
    dueDate: "2025-08-05",
    completed: true,
  },
  {
    id: 2,
    title: "Finish final project",
    description: "Send presentation to professor",
    dueDate: "2025-08-03",
    completed: false,
  },
  {
    id: 3,
    title: "Buy groceries",
    description: "Milk, bread, cheese",
    completed: false,
    dueDate: "2025-08-06",
  },
];

const App = () => {
  return (
    <>
      <div className="max-w-6xl px-4 py-12 mx-auto">
        <div className="flex flex-col justify-between sm:flex-row gap-2 mb-5">
          <div className="flex justify-center sm:justify-start gap-2 mb-5">
            <button className="btn btn-secondary">All</button>
            <button className="btn btn-ghost">Active</button>
            <button className="btn btn-ghost">completed</button>
          </div>
          <button className="btn btn-primary">
            <PlusIcon className="size-5" /> Add new task
          </button>
        </div>

        {tasks.map((task) => (
          <div className="card border border-slate-200 shadow-lg mb-5">
            <div className="card-body pt-4 pb-6 px-6">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="badge badge-outline badge-secondary">
                      {task.dueDate}
                    </div>
                  </div>
                  <details className="dropdown dropdown-end">
                    <summary className="btn btn-ghost btn-circle m-1">
                      <EllipsisVerticalIcon className="size-6" />
                    </summary>
                    <ul className="menu dropdown-content border border-slate-200 bg-base-100 rounded-box z-40 w-52 p-3 shadow-lg">
                      <li>
                        <span>
                          <PencilIcon className="size-5" /> Edit
                        </span>
                      </li>
                      <li>
                        <span>
                          <TrashIcon className="size-5" /> Delete
                        </span>
                      </li>
                    </ul>
                  </details>
                </div>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox bg-base-100 checkbox-primary"
                    checked={task.completed}
                  />
                  <span className="ml-2 text-lg font-semibold">
                    {task.title}
                  </span>
                </label>

                <p>{task.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;

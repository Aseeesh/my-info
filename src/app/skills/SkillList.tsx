import { useData } from "./useData";
import AddForm from "./addForm";
import { Skill } from "@/server/skills/type";

export default function SkillList() {
  const { data, addItem, deleteItem, error, isLoading } = useData();

  const handleAddItem = async (item: Skill) => {
    await addItem(item);
  };

  const handleDeleteItem = async (id: string) => {
    await deleteItem(id); // Call deleteItem to remove item
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mb-12 grid rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 md:mb-12 md:grid-cols-2">
      <div className="mb-4 grid md:mb-4">
        <AddForm onAddItem={handleAddItem} />
      </div>
      <div className="mb-8 grid md:mb-8">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Skill
                </th>
                <th scope="col" className="px-6 py-3">
                  Logo
                </th>
                <th scope="col" className="px-6 py-3">
                  URL
                </th>
                <th scope="col" className="px-6 py-3">
                  Dummy
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                  key={item.id}
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.logo}</td>
                  <td className="px-6 py-4">
                    <a
                      href={item.url}
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      URL
                    </a>
                  </td>
                  <td className="px-6 py-4">$0</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

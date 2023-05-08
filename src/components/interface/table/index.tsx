import Link from "next/link";

import clsx from "clsx";

type TableSubjectsProps = {
  lists: {
    id: number;
    name: string;
    questions: number;
    comments: number;
  }[];
};

export const Table = ({ lists }: TableSubjectsProps) => {
  return (
    <div>
      <div className="mt-8 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            <ul className="flex justify-between px-4  py-4 text-lg">
              <li className="py-3.5 text-left font-semibold text-gray-900 ">
                Disciplinas
              </li>
              <div className="flex w-full  max-w-[300px] gap-3 ">
                <li className="w-full max-w-[150px] py-3.5 text-center font-semibold text-gray-900">
                  Questões
                </li>

                <li className="w-full max-w-[150px] py-3.5 text-center font-semibold text-gray-900">
                  Comentadas
                </li>
              </div>
            </ul>
            <ul className="bg-white">
              {lists?.map((list, index) => {
                return (
                  <Link
                    key={list.id}
                    href={`/discipline/${list.name}`}
                    className={clsx(
                      index % 2 === 0 ? undefined : "bg-gray-50",
                      "block border-b border-gray-200 px-4 py-4"
                    )}
                  >
                    <li className="flex justify-between">
                      <div className=" py-4 text-left text-sm text-gray-800">
                        {list.name}
                      </div>
                      <div className="flex w-full max-w-[300px] gap-3">
                        <div className="w-full max-w-[150px] py-4 text-center text-sm text-gray-500">
                          {list.questions}
                        </div>

                        <div className="w-full max-w-[150px] py-4 text-center text-sm text-gray-500">
                          {list.comments}
                        </div>
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

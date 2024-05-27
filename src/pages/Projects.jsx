import axios from "axios";
import { useEffect, useState } from "react";
const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);

  useEffect(() => {
    fetchDataLang();
  }, [repos]);

  const getDatas = async () => {
    try {
      const data = await axios(`${process.env.REACT_APP_BASE_URL}`, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `${process.env.REACT_APP_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      setRepos(data.data);
    } catch (error) {
      throw new Error("cannot access repos");
    }
  };

  const getLanguages = async (languageUrl) => {
    try {
      const data = await axios(languageUrl, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `${process.env.REACT_APP_TOKEN}`,

          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      return data.data;
    } catch (error) {
      throw new Error("cannot get languages");
    }
  };

  const fetchDataLang = async () => {
    try {
      // promise all -> so many asencron process in map function so used promise all structure.
      const newData = await Promise.all(
        filteredRepos.map(async (item) => {
          const language = await getLanguages(item.languages_url);
          return { name: item.name, itemLanguages: Object.keys(language) };
        })
      );
      setLanguages([...languages, ...newData]);
      return newData;
    } catch (error) {
      throw new Error("cannot get languages by languages url");
    }
  };

  const filteredRepos = repos.filter(
    (item) =>
      item.name !== "vildancetin" &&
      item.name !== "vscode-git1" &&
      item.name !== "taskforce"
  );

  return (
    <div className="m-6">
      <h3 className="text-5xl  mt-4 text-blue font-medium text-start m-6">
        Projects
      </h3>
      {/* projects content */}
      <section className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-3 justify-items-center w-2/3 place-content-center">
          {filteredRepos.map((repo) => {
            return (
              <div
                className="h-60 bg-extra-light-gray w-full font-poppins rounded-3xl"
                key={repo.id}
              >
                <a href={repo.homepage} target="_blank" className="block">
                  <div className="flex flex-col justify-between">
                    <div className="capitalize text-blue text-2xl font-medium">
                      {repo.name}
                    </div>
                    <div className="text-md font-normal pt-4 pb-4">
                      {" "}
                      {repo.description}
                    </div>

                    <div className="flex gap-2 flex-wrap justify-center items-end ">
                      {" "}
                      {repo.topics.map((item, index) => {
                        return (
                          <div
                            className="bg-light-orange p-1 rounded-xl text-sm inline"
                            key={index}
                          >
                            {item}
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-3 flex justify-center gap-6">
                      <button className="p-2 bg-green-light rounded-3xl hover:scale-105">
                        <a href={repo.html_url} target="_blank">
                          Github
                        </a>
                      </button>
                      <button className="p-2 bg-gray-light rounded-3xl hover:scale-105">
                        <a href={repo.homepage} target="_blank">
                          Live
                        </a>
                      </button>
                    </div>
                  </div>
                </a>

                {/* {languages
                    .filter((lang) => lang.name === repo.name)
                    .map((lang) => (
                      <div>{lang.itemLanguages}</div>
                    ))} */}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;

import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";
import axios from "axios";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  async function handleListRepositories() {
    await axios({
      method: "get",
      url: "https://api.github.com/users/jhonatanffelipe/repos",
    })
      .then((response) => setRepositories(...repositories, response.data))
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    handleListRepositories();
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}

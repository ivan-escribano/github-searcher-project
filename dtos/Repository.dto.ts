export interface OwnerDTO {
  login: string; // Nombre del Owner
  avatar_url: string; // La imagen del Avatar del Owner
}

export interface RepositoryDTO {
  id: number;
  full_name: string;
  description: string | null; // Descripción del Repo
  owner: OwnerDTO; // Datos del Owner
  created_at: string; // Fecha de creación
  updated_at: string; // Última actualización
  topics: string[]; // Los Topics del Repo
  language: string | null; // El lenguaje del Repo
  stargazers_count: number; // El número de estrellas que tiene el Repo
  html_url: string; // URL del repo
}

// export interface RepositoryDTO {
//   id: number;
//   node_id: string;
//   name: string;
//   full_name: string;
//   private: boolean;
//   owner: Owner;
//   html_url: string;
//   description: string | null;
//   fork: boolean;
//   url: string;
//   created_at: string;
//   updated_at: string;
//   pushed_at?: string;
//   git_url: string;
//   ssh_url: string;
//   clone_url: string;
//   svn_url: string;
//   homepage: string | null;
//   size: number;
//   stargazers_count: number;
//   watchers_count: number;
//   language: string | null;
//   has_issues: boolean;
//   has_projects: boolean;
//   has_downloads: boolean;
//   has_wiki: boolean;
//   has_pages: boolean;
//   forks_count: number;
//   mirror_url: string | null;
//   archived: boolean;
//   disabled: boolean;
//   open_issues_count: number;
//   license: string | null;
//   allow_forking: boolean;
//   is_template: boolean;
//   topics: string[];
//   visibility: string;
//   forks: number;
//   open_issues: number;
//   watchers: number;
//   default_branch: string;
// }

// interface Owner {
//   login: string;
//   id: number;
//   node_id: string;
//   avatar_url: string;
//   gravatar_id: string;
//   url: string;
//   html_url: string;
//   followers_url: string;
//   following_url: string;
//   gists_url: string;
//   starred_url: string;
//   subscriptions_url: string;
//   organizations_url: string;
//   repos_url: string;
//   events_url: string;
//   received_events_url: string;
//   type: string;
//   site_admin: boolean;
// }

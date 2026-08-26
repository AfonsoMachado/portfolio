import type { ProjectId } from "@/core/domain/entities/portfolio";

export type GitHubRepository = {
  demoUrl: string | null;
  description: string | null;
  name: ProjectId;
  primaryLanguage: string | null;
  profileUrl: string;
  topics: string[];
};

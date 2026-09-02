import { ProjectId } from "@/core/domain/entities/portfolio";

export const githubUsername = "AfonsoMachado";
export const githubProfileUrl = `https://github.com/${githubUsername}`;

export const featuredGitHubRepositoryNames = [
  ProjectId.CalculatorReact,
  ProjectId.NubankClone,
  ProjectId.FlappyBird,
  ProjectId.CrudAngular,
  ProjectId.Metalflix,
  ProjectId.ProffyNlw,
] as const satisfies readonly ProjectId[];

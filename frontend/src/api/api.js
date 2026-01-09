const BASE = "http://localhost:5000/api";

export const getWorkspaces = () => fetch(`${BASE}/workspaces`).then(r => r.json());
export const getMembers = () => fetch(`${BASE}/members`).then(r => r.json());
export const getPrograms = () => fetch(`${BASE}/programs`).then(r => r.json());
export const getRoadmaps = () => fetch(`${BASE}/roadmaps`).then(r => r.json());

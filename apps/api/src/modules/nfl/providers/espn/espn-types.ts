export interface EspnTeam {
  id: string;
  abbreviation: string;
  displayName: string;
  logo: string;
}

export interface EspnStatus {
  type: {
    name: string;
    state: string;
    completed: boolean;
    description: string;
  };
}

export interface EspnCompetitor {
  homeAway: 'home' | 'away';
  score: string;
  team: EspnTeam;
}

export interface EspnCompetiton {
  competitors: EspnCompetitor;
}

export interface EspnEvent {
  id: string;
  date: string;
  name: string;
  competitions: EspnCompetiton[];
  status: EspnStatus;
}

export interface EspnScoreboardResponse {
  events: EspnEvent[];
}
type Players = {
    strPlayer: string;
    strThumb: string;
    idTeam: string;
    strTeam: string;
    strTeamBadge: string;
    idPlayer: string;
}

type Teams = {
    idTeam: string;
    strAlternate: string;
    strTeam: string;
    strTeamBadge: string;
    strDescriptionEN: string;
}

type TeamPageHandler = (selectedId:string) => void;
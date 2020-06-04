export interface GameServerData {
    name: string, // Name of server.
    tagLine: string, // Optional. Custom text appearing below name.

    address: string, // Either a dns hostname, e.g. server.com, or an ip, e.g. 127.0.0.1. Only has to be present in POST /api/servers
    gamePort: number, // Port used for connecting to the game.
    queryPort: number, // Port used for querying game information. All http requests should go to here. Only has to be present in POST /api/servers.

    players: number,
    maxPlayers: number, // Optional. -1 implies infinite

    roundStatus: "restarting" | "lobby" | "playing" | string, // Ideally should be one of the fixed strings listed.
    roundStartTime: number, // In seconds since epoch. Should be time since last status change.

    map: string, // Optional
    gamemode: string, // Optional

    game: "SS3D" | string, // Note: Should almost always be SS3D. Different codebases should change 'branch' instead.
    branch: "root" | string, // Optional. The specific codebase this game is running.
    version: string, // Optional. Should be in format major.minor.patch, year-month-day, or GIT hash
    downloadUrl: string // url to current client download, for example a github release
}

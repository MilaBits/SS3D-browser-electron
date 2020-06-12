export interface News {
  id: number, // id of news item in database
  belongingServer: number, //id of the server this news belongs to. -1 implies no corresponding server.
  title: string, // Title of news item.
  subTitle: string, // Optional. Subtitle appearing below name.
  date: number, // Date of posting.
  category: string, // Category of this news (like "SS3D", "General", "Balance" or whatever else)
  markdownContent: string, // full html for content of news article.
}
